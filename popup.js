// ============================================================
// Bihar RTPS AutoFill — Popup Script
// Profile management, import/export, and form-fill triggering
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ── DOM References ────────────────────────────────────────
  const tabBtns = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  const profilesList = document.getElementById('profiles-list');
  const searchInput = document.getElementById('search-profiles');
  const profileForm = document.getElementById('profile-form');
  const editIdInput = document.getElementById('edit-id');
  const btnCancel = document.getElementById('btn-cancel');
  const btnSave = document.getElementById('btn-save');
  const btnImport = document.getElementById('btn-import');
  const btnExport = document.getElementById('btn-export');
  const importFile = document.getElementById('import-file');
  const statusBar = document.getElementById('status-bar');
  const statusIndicator = document.getElementById('status-indicator');
  const statusText = document.getElementById('status-text');

  // Income auto-calculate fields
  const incGovt = document.getElementById('f-inc-govt');
  const incAgri = document.getElementById('f-inc-agri');
  const incBiz = document.getElementById('f-inc-biz');
  const incOther = document.getElementById('f-inc-other');
  const incTotal = document.getElementById('f-inc-total');

  // ── Tab Switching ─────────────────────────────────────────
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + targetTab).classList.add('active');

      if (targetTab === 'profiles') {
        loadProfiles();
      } else if (targetTab === 'editor' && !editIdInput.value) {
        clearForm();
      }
    });
  });

  // ── Check Page Status ─────────────────────────────────────
  function checkPageStatus() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url && tabs[0].url.includes('serviceonline.bihar.gov.in')) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'detectForm' }, (response) => {
          if (chrome.runtime.lastError) {
            statusIndicator.classList.add('inactive');
            statusText.textContent = 'RTPS page — extension loading...';
            return;
          }
          if (response && response.formType) {
            statusIndicator.classList.add('active');
            const formNames = {
              residence: '🏠 Residence Certificate',
              income: '💰 Income Certificate',
              caste: '📋 Caste Certificate',
              ncl: '📜 Non-Creamy Layer (Central NCL)',
            };
            statusText.innerHTML = `<strong>${formNames[response.formType]}</strong> detected`;
          } else {
            statusIndicator.classList.add('inactive');
            statusText.textContent = 'On RTPS portal — no form detected';
          }
        });
      } else {
        statusIndicator.classList.remove('active', 'inactive');
        statusText.textContent = 'Navigate to serviceonline.bihar.gov.in';
      }
    });
  }

  checkPageStatus();

  // ── Load Profiles ─────────────────────────────────────────
  function loadProfiles(filter = '') {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      let filtered = profiles;

      if (filter) {
        const f = filter.toLowerCase();
        filtered = profiles.filter(p =>
          (p.name_en || '').toLowerCase().includes(f) ||
          (p.mobile || '').includes(f) ||
          (p.father_en || '').toLowerCase().includes(f) ||
          (p.district || '').toLowerCase().includes(f)
        );
      }

      if (filtered.length === 0) {
        profilesList.innerHTML = `
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            <p>${filter ? 'No matching profiles' : 'No profiles yet'}</p>
            <span>${filter ? 'Try a different search term' : 'Click "Add / Edit" to create your first profile'}</span>
          </div>
        `;
        return;
      }

      profilesList.innerHTML = filtered.map(p => {
        const initials = getInitials(p.name_en || 'N/A');
        const district = p.district ? `📍 ${p.district}` : '';
        const mobile = p.mobile ? `📱 ${p.mobile}` : '';

        return `
          <div class="profile-card" data-id="${p.id}">
            <div class="profile-avatar">${initials}</div>
            <div class="profile-info">
              <div class="profile-name">${escapeHtml(p.name_en || 'Unnamed Profile')}</div>
              <div class="profile-meta">
                ${mobile ? `<span>${mobile}</span>` : ''}
                ${district ? `<span>${district}</span>` : ''}
              </div>
            </div>
            <div class="profile-actions">
              <button class="profile-action-btn fill" data-action="fill" data-id="${p.id}" title="Fill Form">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="profile-action-btn" data-action="edit" data-id="${p.id}" title="Edit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                </svg>
              </button>
              <button class="profile-action-btn delete" data-action="delete" data-id="${p.id}" title="Delete">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </div>
        `;
      }).join('');

      // ── Profile card click handlers ─────────────────────
      profilesList.querySelectorAll('.profile-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const action = btn.dataset.action;
          const id = btn.dataset.id;

          if (action === 'edit') {
            editProfile(id);
          } else if (action === 'delete') {
            deleteProfile(id);
          } else if (action === 'fill') {
            triggerFill(id);
          }
        });
      });

      // Click on card itself to edit
      profilesList.querySelectorAll('.profile-card').forEach(card => {
        card.addEventListener('click', () => {
          editProfile(card.dataset.id);
        });
      });
    });
  }

  // ── Search ────────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    loadProfiles(searchInput.value);
  });

  // ── Edit Profile ──────────────────────────────────────────
  function editProfile(id) {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      const profile = profiles.find(p => p.id === id);
      if (!profile) return;

      populateForm(profile);

      // Switch to editor tab
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      document.querySelector('[data-tab="editor"]').classList.add('active');
      document.getElementById('tab-editor').classList.add('active');

      btnSave.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
          <polyline points="17 21 17 13 7 13 7 21"/>
          <polyline points="7 3 7 8 15 8"/>
        </svg>
        Update Profile
      `;
    });
  }

  // ── Populate Form ─────────────────────────────────────────
  function populateForm(p) {
    editIdInput.value = p.id || '';
    document.getElementById('f-gender').value = p.gender || '';
    document.getElementById('f-salutation').value = p.salutation || '';
    document.getElementById('f-dob').value = p.dob || '';
    document.getElementById('f-religion').value = p.religion || '';
    document.getElementById('f-name-en').value = p.name_en || '';
    document.getElementById('f-name-hi').value = p.name_hi || '';
    document.getElementById('f-father-en').value = p.father_en || '';
    document.getElementById('f-father-hi').value = p.father_hi || '';
    document.getElementById('f-mother-en').value = p.mother_en || '';
    document.getElementById('f-mother-hi').value = p.mother_hi || '';
    document.getElementById('f-husband-en').value = p.husband_en || '';
    document.getElementById('f-husband-hi').value = p.husband_hi || '';
    document.getElementById('f-mobile').value = p.mobile || '';
    document.getElementById('f-email').value = p.email || '';
    document.getElementById('f-aadhaar').value = p.aadhaar || '';
    document.getElementById('f-state').value = p.state || 'BIHAR';
    document.getElementById('f-district').value = p.district || '';
    document.getElementById('f-subdivision').value = p.subdivision || '';
    document.getElementById('f-block').value = p.block || '';
    document.getElementById('f-localbody').value = p.localBodyType || '';
    document.getElementById('f-panchayat').value = p.panchayat || '';
    document.getElementById('f-ward').value = p.ward || '';
    document.getElementById('f-village').value = p.village || '';
    document.getElementById('f-ps').value = p.policeStation || '';
    document.getElementById('f-po').value = p.postOffice || '';
    document.getElementById('f-pin').value = p.pinCode || '';
    document.getElementById('f-present-same').checked = p.presentAddressSame !== false;

    // Residence
    document.getElementById('f-res-type').value = p.residenceType || '';
    document.getElementById('f-res-purpose').value = p.purposeResidence || '';

    // Income
    document.getElementById('f-inc-profession').value = p.profession || '';
    document.getElementById('f-inc-purpose').value = p.purposeIncome || '';
    document.getElementById('f-inc-govt').value = p.incomeGovt || '';
    document.getElementById('f-inc-agri').value = p.incomeAgriculture || '';
    document.getElementById('f-inc-biz').value = p.incomeBusiness || '';
    document.getElementById('f-inc-other').value = p.incomeOther || '';
    document.getElementById('f-inc-total').value = p.totalIncome || '';

    // Caste
    document.getElementById('f-caste-profession').value = p.profession || '';
    document.getElementById('f-caste-category').value = p.category || '';
    document.getElementById('f-caste-name').value = p.caste || '';
    document.getElementById('f-caste-sub').value = p.subCaste || '';
  }

  // ── Clear Form ────────────────────────────────────────────
  function clearForm() {
    editIdInput.value = '';
    profileForm.reset();
    document.getElementById('f-state').value = 'BIHAR';
    document.getElementById('f-present-same').checked = true;
    btnSave.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
        <polyline points="17 21 17 13 7 13 7 21"/>
        <polyline points="7 3 7 8 15 8"/>
      </svg>
      Save Profile
    `;
  }

  // ── Save Profile ──────────────────────────────────────────
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEn = document.getElementById('f-name-en').value.trim();
    if (!nameEn) {
      showToast('Please enter the applicant name', 'error');
      return;
    }

    const profile = {
      id: editIdInput.value || generateId(),
      gender: document.getElementById('f-gender').value,
      salutation: document.getElementById('f-salutation').value,
      dob: document.getElementById('f-dob').value.trim(),
      religion: document.getElementById('f-religion').value.trim(),
      name_en: nameEn,
      name_hi: document.getElementById('f-name-hi').value.trim(),
      father_en: document.getElementById('f-father-en').value.trim(),
      father_hi: document.getElementById('f-father-hi').value.trim(),
      mother_en: document.getElementById('f-mother-en').value.trim(),
      mother_hi: document.getElementById('f-mother-hi').value.trim(),
      husband_en: document.getElementById('f-husband-en').value.trim(),
      husband_hi: document.getElementById('f-husband-hi').value.trim(),
      mobile: document.getElementById('f-mobile').value.trim(),
      email: document.getElementById('f-email').value.trim(),
      aadhaar: document.getElementById('f-aadhaar').value.trim(),
      state: document.getElementById('f-state').value.trim(),
      district: document.getElementById('f-district').value.trim(),
      subdivision: document.getElementById('f-subdivision').value.trim(),
      block: document.getElementById('f-block').value.trim(),
      localBodyType: document.getElementById('f-localbody').value,
      panchayat: document.getElementById('f-panchayat').value.trim(),
      ward: document.getElementById('f-ward').value.trim(),
      village: document.getElementById('f-village').value.trim(),
      policeStation: document.getElementById('f-ps').value.trim(),
      postOffice: document.getElementById('f-po').value.trim(),
      pinCode: document.getElementById('f-pin').value.trim(),
      presentAddressSame: document.getElementById('f-present-same').checked,

      // Residence
      residenceType: document.getElementById('f-res-type').value,
      purposeResidence: document.getElementById('f-res-purpose').value.trim(),

      // Income
      profession: document.getElementById('f-inc-profession').value.trim() ||
        document.getElementById('f-caste-profession').value.trim(),
      purposeIncome: document.getElementById('f-inc-purpose').value.trim(),
      incomeGovt: document.getElementById('f-inc-govt').value || '0',
      incomeAgriculture: document.getElementById('f-inc-agri').value || '0',
      incomeBusiness: document.getElementById('f-inc-biz').value || '0',
      incomeOther: document.getElementById('f-inc-other').value || '0',
      totalIncome: document.getElementById('f-inc-total').value || '',

      // Caste
      category: document.getElementById('f-caste-category').value,
      caste: document.getElementById('f-caste-name').value.trim(),
      subCaste: document.getElementById('f-caste-sub').value.trim(),

      updatedAt: new Date().toISOString(),
    };

    // Calculate total income if not manually set
    if (!profile.totalIncome) {
      const total = (parseInt(profile.incomeGovt) || 0) +
        (parseInt(profile.incomeAgriculture) || 0) +
        (parseInt(profile.incomeBusiness) || 0) +
        (parseInt(profile.incomeOther) || 0);
      if (total > 0) profile.totalIncome = String(total);
    }

    chrome.storage.local.get('profiles', (data) => {
      let profiles = data.profiles || [];
      const existingIdx = profiles.findIndex(p => p.id === profile.id);

      if (existingIdx >= 0) {
        profiles[existingIdx] = profile;
        showToast('Profile updated successfully!', 'success');
      } else {
        profiles.push(profile);
        showToast('Profile saved successfully!', 'success');
      }

      chrome.storage.local.set({ profiles }, () => {
        // Notify content script to refresh
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'refreshProfiles' });
          }
        });

        // Switch to profiles tab
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        document.querySelector('[data-tab="profiles"]').classList.add('active');
        document.getElementById('tab-profiles').classList.add('active');
        loadProfiles();
        clearForm();
      });
    });
  });

  // ── Cancel ────────────────────────────────────────────────
  btnCancel.addEventListener('click', () => {
    clearForm();
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-tab="profiles"]').classList.add('active');
    document.getElementById('tab-profiles').classList.add('active');
    loadProfiles();
  });

  // ── Delete Profile ────────────────────────────────────────
  function deleteProfile(id) {
    if (!confirm('Delete this profile?')) return;

    chrome.storage.local.get('profiles', (data) => {
      let profiles = data.profiles || [];
      profiles = profiles.filter(p => p.id !== id);
      chrome.storage.local.set({ profiles }, () => {
        showToast('Profile deleted', 'info');
        loadProfiles();
        // Notify content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'refreshProfiles' });
          }
        });
      });
    });
  }

  // ── Trigger Fill ──────────────────────────────────────────
  function triggerFill(id) {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      const profile = profiles.find(p => p.id === id);
      if (!profile) {
        showToast('Profile not found', 'error');
        return;
      }

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs[0]) {
          showToast('No active tab found', 'error');
          return;
        }

        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'fillForm',
          profile: profile,
        }, (response) => {
          if (chrome.runtime.lastError) {
            showToast('Could not connect to page. Make sure you\'re on an RTPS form.', 'error');
            return;
          }
          if (response && response.success) {
            showToast(response.message, 'success');
          } else {
            showToast(response?.message || 'Fill failed', 'error');
          }
        });
      });
    });
  }

  // ── Income Auto-Calculate ─────────────────────────────────
  [incGovt, incAgri, incBiz, incOther].forEach(input => {
    input.addEventListener('input', () => {
      const total = (parseInt(incGovt.value) || 0) +
        (parseInt(incAgri.value) || 0) +
        (parseInt(incBiz.value) || 0) +
        (parseInt(incOther.value) || 0);
      incTotal.value = total || '';
      incTotal.placeholder = total ? `₹ ${total.toLocaleString('en-IN')}` : 'Auto-calculated';
    });
  });

  // ── Export Profiles ───────────────────────────────────────
  btnExport.addEventListener('click', () => {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      if (profiles.length === 0) {
        showToast('No profiles to export', 'error');
        return;
      }

      const exportData = {
        _meta: {
          app: 'Bihar RTPS AutoFill',
          version: '1.0.0',
          exportedAt: new Date().toISOString(),
          count: profiles.length,
        },
        profiles: profiles,
      };

      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rtps_profiles_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);

      showToast(`Exported ${profiles.length} profiles`, 'success');
    });
  });

  // ── Import Profiles ───────────────────────────────────────
  btnImport.addEventListener('click', () => {
    importFile.click();
  });

  importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importData = JSON.parse(event.target.result);
        let newProfiles = [];

        // Support both formats: {profiles: [...]} and direct array
        if (importData.profiles && Array.isArray(importData.profiles)) {
          newProfiles = importData.profiles;
        } else if (Array.isArray(importData)) {
          newProfiles = importData;
        } else {
          showToast('Invalid file format', 'error');
          return;
        }

        // Validate profiles
        newProfiles = newProfiles.filter(p => p && (p.name_en || p.mobile));

        if (newProfiles.length === 0) {
          showToast('No valid profiles found in file', 'error');
          return;
        }

        chrome.storage.local.get('profiles', (data) => {
          const existing = data.profiles || [];
          const existingIds = new Set(existing.map(p => p.id));

          // Assign new IDs to avoid conflicts
          newProfiles.forEach(p => {
            if (!p.id || existingIds.has(p.id)) {
              p.id = generateId();
            }
            existingIds.add(p.id);
          });

          const merged = [...existing, ...newProfiles];
          chrome.storage.local.set({ profiles: merged }, () => {
            showToast(`Imported ${newProfiles.length} profiles`, 'success');
            loadProfiles();
            // Notify content script
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'refreshProfiles' });
              }
            });
          });
        });
      } catch (err) {
        showToast('Failed to parse file: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    importFile.value = ''; // reset for re-import
  });

  // ── Utilities ─────────────────────────────────────────────
  function generateId() {
    return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
  }

  function getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toast-out 0.3s ease-in forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ── Initial Load ──────────────────────────────────────────
  loadProfiles();
});
