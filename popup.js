// ============================================================
// Bihar RTPS AutoFill — Popup Script
// Fast, robust profile management & full data loading/editing
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
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
  const btnCapturePage = document.getElementById('btn-capture-page');
  const btnCaptureActive = document.getElementById('btn-capture-active');
  const statusIndicator = document.getElementById('status-indicator');
  const statusText = document.getElementById('status-text');

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + target).classList.add('active');

      if (target === 'profiles') loadProfiles();
      else if (target === 'editor' && !editIdInput.value) clearForm();
    });
  });

  // Check Page Status
  function checkActivePage() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0] || !tabs[0].url || !tabs[0].url.includes('serviceonline.bihar.gov.in')) {
        statusIndicator.classList.remove('active');
        statusIndicator.classList.add('inactive');
        statusText.textContent = 'Not on RTPS Portal';
        return;
      }

      chrome.tabs.sendMessage(tabs[0].id, { action: 'detectForm' }, (response) => {
        if (chrome.runtime.lastError || !response) {
          statusIndicator.classList.remove('active');
          statusIndicator.classList.add('inactive');
          statusText.textContent = 'RTPS page loading...';
          return;
        }

        const formNames = {
          ncl_bihar: '📜 Bihar NCL (Govt. of Bihar)',
          central_ncl: '📜 Central NCL (Govt. of India)',
          ews: '📊 EWS Certificate',
          residence: '🏠 Residence Certificate',
          income: '💰 Income Certificate',
          caste: '📋 Caste Certificate',
          character: '🛡️ Character Certificate (चरित्र प्रमाण-पत्र)'
        };

        if (response.formType) {
          statusIndicator.classList.add('active');
          statusIndicator.classList.remove('inactive');
          statusText.innerHTML = `<strong>${formNames[response.formType] || response.formType}</strong> detected`;
        } else {
          statusIndicator.classList.remove('active');
          statusIndicator.classList.add('inactive');
          statusText.textContent = 'Portal open — no form detected';
        }
      });
    });
  }

  checkActivePage();

  // Load Profiles List
  function loadProfiles(filter = '') {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      let list = profiles;

      if (filter) {
        const q = filter.toLowerCase();
        list = profiles.filter(p =>
          (p.name_en || '').toLowerCase().includes(q) ||
          (p.mobile || '').includes(q) ||
          (p.district || '').toLowerCase().includes(q) ||
          (p.caste || '').toLowerCase().includes(q)
        );
      }

      if (list.length === 0) {
        profilesList.innerHTML = `
          <div class="empty-state">
            <p>${filter ? 'No matching profiles' : 'No saved profiles'}</p>
            <span>Click "New / Edit Profile" to add one</span>
          </div>
        `;
        return;
      }

      profilesList.innerHTML = list.map(p => {
        const initials = (p.name_en || 'A').substring(0, 2).toUpperCase();
        return `
          <div class="profile-card" data-id="${p.id}">
            <div class="profile-avatar">${initials}</div>
            <div class="profile-info">
              <div class="profile-name">${escapeHtml(p.name_en || 'Unnamed')}</div>
              <div class="profile-meta">
                ${p.mobile ? `<span>📱 ${p.mobile}</span>` : ''}
                ${p.district ? `<span>📍 ${p.district}</span>` : ''}
                ${p.caste ? `<span>🏷️ ${p.caste}</span>` : ''}
              </div>
            </div>
            <div class="profile-actions">
              <button class="profile-action-btn fill" data-action="fill" data-id="${p.id}" title="Fill Form">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="profile-action-btn" data-action="edit" data-id="${p.id}" title="Edit Profile">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                </svg>
              </button>
              <button class="profile-action-btn delete" data-action="delete" data-id="${p.id}" title="Delete">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </div>
        `;
      }).join('');

      // Actions click
      profilesList.querySelectorAll('.profile-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const action = btn.dataset.action;
          const id = btn.dataset.id;
          if (action === 'edit') editProfile(id);
          else if (action === 'delete') deleteProfile(id);
          else if (action === 'fill') triggerFill(id);
        });
      });

      // Card click
      profilesList.querySelectorAll('.profile-card').forEach(card => {
        card.addEventListener('click', () => editProfile(card.dataset.id));
      });
    });
  }

  searchInput.addEventListener('input', () => loadProfiles(searchInput.value));

  // Edit Profile -> Load complete data
  function editProfile(id) {
    chrome.storage.local.get('profiles', (data) => {
      const p = (data.profiles || []).find(item => item.id === id);
      if (!p) return;

      profileForm.reset();
      editIdInput.value = p.id;

      const setVal = (elId, v) => {
        const el = document.getElementById(elId);
        if (el) el.value = v !== undefined && v !== null ? v : '';
      };

      setVal('f-gender', p.gender || 'Male');
      setVal('f-salutation', p.salutation || 'Shri');
      setVal('f-name-en', p.name_en);
      setVal('f-name-hi', p.name_hi);
      setVal('f-dob', p.dob);
      setVal('f-mobile', p.mobile);
      setVal('f-email', p.email);
      setVal('f-religion', p.religion || 'Hindu');

      setVal('f-father-en', p.father_en);
      setVal('f-father-hi', p.father_hi);
      setVal('f-mother-en', p.mother_en);
      setVal('f-mother-hi', p.mother_hi);
      setVal('f-husband-en', p.husband_en);
      setVal('f-husband-hi', p.husband_hi);

      setVal('f-state', p.state || 'BIHAR');
      setVal('f-district', p.district);
      setVal('f-subdivision', p.subdivision);
      setVal('f-block', p.block);
      setVal('f-village', p.village);
      setVal('f-po', p.post_office);
      setVal('f-ps', p.police_station);
      setVal('f-pin', p.pin_code);
      setVal('f-ward', p.ward);
      setVal('f-localbody', p.localBodyType || 'Village Panchayat');
      setVal('f-panchayat', p.panchayat);

      setVal('f-category', p.category || 'BC');
      setVal('f-caste', p.caste);
      setVal('f-subcaste', p.sub_caste);
      setVal('f-serial', p.caste_serial);
      setVal('f-profession', p.profession || 'Student');
      setVal('f-annual-income', p.total_income || p.annual_income || p.family_income || '');

      // Switch tab to editor
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      document.getElementById('tab-btn-editor').classList.add('active');
      document.getElementById('tab-editor').classList.add('active');
      document.getElementById('tab-editor').scrollTop = 0;

      btnSave.textContent = 'Update Profile';
    });
  }

  function clearForm() {
    profileForm.reset();
    editIdInput.value = '';
    document.getElementById('f-state').value = 'BIHAR';
    const pEl = document.getElementById('f-panchayat');
    if (pEl) pEl.value = '';
    btnSave.textContent = 'Save Profile';
  }

  btnCancel.addEventListener('click', () => {
    clearForm();
    tabBtns[0].click();
  });

  // Save Profile
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const rawName = document.getElementById('f-name-en').value.trim();
    const nameEn = rawName || (document.getElementById('f-mobile')?.value.trim() ? ('User_' + document.getElementById('f-mobile').value.trim()) : ('Profile_' + Date.now().toString(36).slice(-5)));

    const getV = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    const incomeVal = getV('f-annual-income');

    const profile = {
      id: editIdInput.value || 'p_' + Date.now().toString(36),
      gender: getV('f-gender'),
      salutation: getV('f-salutation'),
      name_en: nameEn,
      name_hi: getV('f-name-hi'),
      dob: getV('f-dob'),
      mobile: getV('f-mobile'),
      email: getV('f-email'),
      religion: getV('f-religion'),

      father_en: getV('f-father-en'),
      father_hi: getV('f-father-hi'),
      mother_en: getV('f-mother-en'),
      mother_hi: getV('f-mother-hi'),
      husband_en: getV('f-husband-en'),
      husband_hi: getV('f-husband-hi'),

      state: getV('f-state') || 'BIHAR',
      district: getV('f-district'),
      subdivision: getV('f-subdivision'),
      block: getV('f-block'),
      village: getV('f-village'),
      post_office: getV('f-po'),
      police_station: getV('f-ps'),
      pin_code: getV('f-pin'),
      ward: getV('f-ward'),
      localBodyType: getV('f-localbody'),
      panchayat: getV('f-panchayat'),

      category: getV('f-category'),
      caste: getV('f-caste'),
      sub_caste: getV('f-subcaste'),
      caste_serial: getV('f-serial'),
      profession: getV('f-profession'),

      total_income: incomeVal,
      annual_income: incomeVal,
      family_income: incomeVal,

      updatedAt: new Date().toISOString()
    };

    chrome.storage.local.get('profiles', (data) => {
      let profiles = data.profiles || [];
      const idx = profiles.findIndex(p => p.id === profile.id);
      if (idx >= 0) {
        profiles[idx] = profile;
        showToast('Profile updated!', 'success');
      } else {
        profiles.push(profile);
        showToast('Profile saved!', 'success');
      }

      chrome.storage.local.set({ profiles }, () => {
        // Notify tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) chrome.tabs.sendMessage(tabs[0].id, { action: 'refreshProfiles' });
        });
        clearForm();
        tabBtns[0].click();
      });
    });
  });

  // Delete
  function deleteProfile(id) {
    if (!confirm('Delete this profile?')) return;
    chrome.storage.local.get('profiles', (data) => {
      let profiles = (data.profiles || []).filter(p => p.id !== id);
      chrome.storage.local.set({ profiles }, () => {
        showToast('Profile deleted', 'info');
        loadProfiles();
      });
    });
  }

  // Trigger Fill
  function triggerFill(id) {
    chrome.storage.local.get('profiles', (data) => {
      const profile = (data.profiles || []).find(p => p.id === id);
      if (!profile) return;

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs[0]) return;
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fillForm', profile }, (response) => {
          if (chrome.runtime.lastError || !response) {
            showToast('Open an RTPS form page first', 'error');
            return;
          }
          if (response.success) {
            showToast(response.message, 'success');
          } else {
            showToast(response.message || 'Fill failed', 'error');
          }
        });
      });
    });
  }

  // Export / Import
  btnExport.addEventListener('click', () => {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      const blob = new Blob([JSON.stringify({ profiles }, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rtps_profiles_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(`Exported ${profiles.length} profiles`, 'success');
    });
  });

  btnImport.addEventListener('click', () => importFile.click());
  importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        const imported = parsed.profiles || parsed;
        if (Array.isArray(imported)) {
          chrome.storage.local.set({ profiles: imported }, () => {
            showToast(`Imported ${imported.length} profiles`, 'success');
            loadProfiles();
          });
        }
      } catch (err) {
        showToast('Invalid JSON file', 'error');
      }
    };
    reader.readAsText(file);
    importFile.value = '';
  });

  function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2800);
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  // Capture handlers
  function handlePageCapture() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0] || !tabs[0].url || !tabs[0].url.includes('serviceonline.bihar.gov.in')) {
        showToast('Open an RTPS form page first', 'error');
        return;
      }

      showToast('Capturing data from form...', 'info');
      const targetId = editIdInput.value || null;

      chrome.tabs.sendMessage(tabs[0].id, { action: 'captureForm', profileId: targetId }, (response) => {
        if (chrome.runtime.lastError || !response) {
          showToast('Could not communicate with RTPS page. Please refresh the page.', 'error');
          return;
        }

        if (response.success) {
          showToast(response.message, 'success');
          loadProfiles();
          if (response.profile) {
            editProfile(response.profile.id);
          }
        } else {
          showToast(response.message || 'Capture failed', 'error');
        }
      });
    });
  }

  if (btnCapturePage) btnCapturePage.addEventListener('click', handlePageCapture);
  if (btnCaptureActive) btnCaptureActive.addEventListener('click', handlePageCapture);

  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'profilesUpdated') {
      loadProfiles();
    }
  });

  loadProfiles();
});

