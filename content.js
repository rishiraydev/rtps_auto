// ============================================================
// Bihar RTPS AutoFill — Content Script (Form Filling Engine)
// Detects form type and fills fields from saved profiles
// ============================================================

(function () {
  'use strict';

  // ── Service IDs for form detection ──────────────────────────
  const SERVICE_IDS = {
    RESIDENCE: '4630012',
    INCOME: '4640012',
    CASTE: '4650013',
    NCL_CENTRAL: '9330013',
  };

// ── State variable ──────────────────────────────────────────
  let detectedForm = null;
  let currentProfile = null;
  let floatingPanel = null;

  
// ── Detect which form is open ───────────────────────────────
  function detectFormType() {
    const url = window.location.href;
    const title = document.title.toLowerCase();

    // Check URL for serviceId parameter
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('serviceId') || urlParams.get('ESSION_SERVICEID');

    // Central NCL check (serviceId 933 / 9330013 or OBC / Non Creamy Layer title)
    if (
      serviceId === SERVICE_IDS.NCL_CENTRAL ||
      serviceId === '933' ||
      (serviceId && serviceId.startsWith('933')) ||
      (serviceId && serviceId.startsWith('932')) ||
      title.includes('non creamy') ||
      title.includes('non-creamy') ||
      title.includes('creamy layer') ||
      title.includes('क्रीमीलेयर')
    ) {
      return 'ncl';
    }

    if (serviceId === SERVICE_IDS.RESIDENCE || title.includes('residence')) {
      return 'residence';
    }
    if (serviceId === SERVICE_IDS.INCOME || title.includes('income')) {
      return 'income';
    }
    if (serviceId === SERVICE_IDS.CASTE || title.includes('caste')) {
      return 'caste';
    }

    // Fallback: check page header text
    const headers = document.querySelectorAll('h3, h4, .page-header, .formheading, td');
    for (const h of headers) {
      const text = h.textContent.toLowerCase();
      if (text.includes('क्रीमीलेयर') || text.includes('non creamy') || text.includes('non-creamy') || text.includes('creamy layer') || text.includes('obc (non creamy layer)')) return 'ncl';
      if (text.includes('residence') || text.includes('निवास')) return 'residence';
      if (text.includes('income') || text.includes('आय प्रमाण')) return 'income';
      if (text.includes('caste') || text.includes('जाति प्रमाण')) return 'caste';
    }

    return null;
  }

  

  // ── Field ID Mappings per form type ─────────────────────────
  // Note: ServicePlus generates dynamic IDs. These are the known IDs
  // from inspection. We also use label-text fallback detection.
  // ── Show Toaster ────────────────────────────────────────────
  function showToaster(message, type = 'info') {
    let container = document.getElementById('rtps-toaster-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'rtps-toaster-container';
      container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999999; display: flex; flex-direction: column; gap: 10px;';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style.cssText = `
      padding: 12px 20px;
      border-radius: 8px;
      color: white;
      font-family: sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      background-color: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    `;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ── Capture Profile Logic ───────────────────────────────────
  function captureProfile(formType) {
    if (!formType || !window.RTPSAutoFill || !window.RTPSAutoFill.FIELD_MAP[formType]) {
      showToaster('Cannot capture: Form type not recognized or AutoFill engine missing.', 'error');
      return;
    }
    const map = window.RTPSAutoFill.FIELD_MAP[formType];
    const profile = {};
    let capturedCount = 0;

    // Helper to get element value safely
    const getVal = (id) => {
      if (!id) return '';
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };
    const isChecked = (id) => {
      if (!id) return false;
      const el = document.getElementById(id);
      return el ? el.checked : false;
    };
    const getSelectText = (id) => {
      if (!id) return '';
      const el = document.getElementById(id);
      if (el && el.tagName === 'SELECT' && el.selectedIndex >= 0) {
        return el.options[el.selectedIndex].text.trim().replace(/ \/ .*/, ''); // Remove Hindi suffix if present
      }
      return getVal(id);
    };

    // Generic captures based on map
    if (map.name_en) { profile.name_en = getVal(map.name_en); if (profile.name_en) capturedCount++; }
    if (map.name_hi) profile.name_hi = getVal(map.name_hi);
    if (map.father_en) profile.father_en = getVal(map.father_en);
    if (map.father_hi) profile.father_hi = getVal(map.father_hi);
    if (map.mother_en) profile.mother_en = getVal(map.mother_en);
    if (map.mother_hi) profile.mother_hi = getVal(map.mother_hi);
    if (map.husband_en) profile.husband_en = getVal(map.husband_en);
    if (map.husband_hi) profile.husband_hi = getVal(map.husband_hi);
    if (map.mobile) profile.mobile = getVal(map.mobile);
    if (map.email) profile.email = getVal(map.email);
    if (map.aadhaar) profile.aadhaar = getVal(map.aadhaar);

    // Dropdowns
    if (map.salutation) profile.salutation = getVal(map.salutation);
    if (map.state) profile.state = getVal(map.state);
    if (map.district) profile.district = getVal(map.district);
    if (map.subdivision) profile.subdivision = getVal(map.subdivision);
    if (map.block) profile.block = getVal(map.block);

    // Address
    if (map.panchayat) profile.panchayat = getSelectText(map.panchayat);
    if (map.ward) profile.ward = getVal(map.ward);
    if (map.village) profile.village = getVal(map.village);
    if (map.police_station) profile.policeStation = getVal(map.police_station);
    if (map.post_office) profile.postOffice = getVal(map.post_office);
    if (map.pin_code) profile.pinCode = getVal(map.pin_code);

    // Gender radios
    if (isChecked(map.gender_male)) profile.gender = 'Male';
    else if (isChecked(map.gender_female)) profile.gender = 'Female';
    else if (isChecked(map.gender_third)) profile.gender = 'Third Gender';

    // Local Body Type radios
    if (isChecked(map.localbody_panchayat)) profile.localBodyType = 'Gram Panchayat';
    else if (isChecked(map.localbody_mc)) profile.localBodyType = 'Municipal Corporation';
    else if (isChecked(map.localbody_muni)) profile.localBodyType = 'Municipality';
    else if (isChecked(map.localbody_town)) profile.localBodyType = 'Town Panchayat';

    // Form specific captures
    if (formType === 'residence') {
      if (isChecked(map.residence_permanent)) profile.residenceType = 'Permanent';
      else if (isChecked(map.residence_temporary)) profile.residenceType = 'Temporary';
      if (map.purpose) profile.purposeResidence = getVal(map.purpose);
      if (map.present_address_same) profile.presentAddressSame = isChecked(map.present_address_same);
    } else if (formType === 'income') {
      if (map.profession) profile.profession = getVal(map.profession);
      if (map.purpose_of_application) profile.purposeIncome = getVal(map.purpose_of_application);
      if (map.income_govt) profile.incomeGovt = getVal(map.income_govt);
      if (map.income_agriculture) profile.incomeAgriculture = getVal(map.income_agriculture);
      if (map.income_business) profile.incomeBusiness = getVal(map.income_business);
      if (map.income_other) profile.incomeOther = getVal(map.income_other);
      if (map.total_income) profile.totalIncome = getVal(map.total_income);
    } else if (formType === 'caste') {
      if (map.profession) profile.profession = getVal(map.profession);
      if (map.category) profile.category = getVal(map.category);
      if (map.caste) profile.caste = getVal(map.caste);
      if (map.sub_caste) profile.subCaste = getVal(map.sub_caste);
      if (map.present_address_same) profile.presentAddressSame = isChecked(map.present_address_same);
    } else if (formType === 'ncl') {
      if (map.dob) profile.dob = getVal(map.dob);
      if (map.religion) profile.religion = getVal(map.religion);
      if (map.profession) profile.profession = getVal(map.profession);
      if (map.category) profile.category = getVal(map.category);
      if (map.caste) profile.caste = getVal(map.caste);
      if (map.sub_caste) profile.subCaste = getVal(map.sub_caste);
      if (map.central_caste_serial) profile.centralCasteSerial = getVal(map.central_caste_serial);
      if (map.income_salary) profile.incomeGovt = getVal(map.income_salary);
      if (map.income_agriculture) profile.incomeAgriculture = getVal(map.income_agriculture);
      if (map.income_business) profile.incomeBusiness = getVal(map.income_business);
      if (map.income_pension) profile.incomeOther = getVal(map.income_pension);
      if (map.present_address_same) profile.presentAddressSame = isChecked(map.present_address_same);
    }

    if (!profile.name_en) {
      showToaster('Applicant Name (English) is required to capture a profile.', 'error');
      return;
    }

    const defaultName = `Profile - ${profile.name_en} - ${new Date().toLocaleTimeString()}`;
    const pName = window.prompt("Enter a name for this profile:", defaultName);
    
    if (pName === null) {
      showToaster('Profile capture cancelled.', 'info');
      return; // Cancelled
    }

    // Send to background to save
    chrome.runtime.sendMessage({
      action: 'saveCapturedProfile',
      profile: profile
    }, (response) => {
      if (response && response.success) {
        showToaster('📸 Profile Captured Successfully!', 'success');
        loadProfilesToPanel(); // refresh dropdown
      } else {
        showToaster('Failed to capture profile.', 'error');
      }
    });
  }

  // ── Create Floating Panel on RTPS Pages ─────────────────────
  function createFloatingPanel() {
    if (floatingPanel) return;

    floatingPanel = document.createElement('div');
    floatingPanel.id = 'rtps-autofill-panel';
    floatingPanel.innerHTML = `
      <div class="rtps-af-header" id="rtps-af-drag-handle">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        <span>RTPS AutoFill</span>
        <button class="rtps-af-minimize" id="rtps-af-toggle">−</button>
      </div>
      <div class="rtps-af-body" id="rtps-af-body">
        <div class="rtps-af-status" id="rtps-af-status">
          Detecting form...
        </div>
        <div class="rtps-af-controls">
          <select id="rtps-af-profile-select" class="rtps-af-select">
            <option value="">— Select Profile —</option>
          </select>
          <label class="rtps-af-transliterate-toggle">
            <input type="checkbox" id="rtps-af-transliterate" checked>
            <span>Auto Hindi</span>
          </label>
        </div>
        <button id="rtps-af-fill-btn" class="rtps-af-btn rtps-af-btn-fill" disabled>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Fill Now
        </button>
        <button id="rtps-af-capture-btn" class="rtps-af-btn rtps-af-btn-capture" style="margin-top: 8px; background: #28a745; color: white;" disabled>
          📸 Capture & Save Profile
        </button>


        <div class="rtps-af-result" id="rtps-af-result"></div>
      </div>
    `;

    document.body.appendChild(floatingPanel);

    // ── Make panel draggable ─────────────────────────────────
    const handle = document.getElementById('rtps-af-drag-handle');
    let isDragging = false, offsetX = 0, offsetY = 0;

    handle.addEventListener('mousedown', (e) => {
      if (e.target.closest('.rtps-af-minimize')) return;
      isDragging = true;
      offsetX = e.clientX - floatingPanel.getBoundingClientRect().left;
      offsetY = e.clientY - floatingPanel.getBoundingClientRect().top;
      floatingPanel.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      floatingPanel.style.left = (e.clientX - offsetX) + 'px';
      floatingPanel.style.top = (e.clientY - offsetY) + 'px';
      floatingPanel.style.right = 'auto';
      floatingPanel.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      floatingPanel.style.transition = '';
    });

    // ── Toggle minimize ─────────────────────────────────────
    document.getElementById('rtps-af-toggle').addEventListener('click', () => {
      const body = document.getElementById('rtps-af-body');
      const btn = document.getElementById('rtps-af-toggle');
      if (body.style.display === 'none') {
        body.style.display = 'block';
        btn.textContent = '−';
        floatingPanel.classList.remove('rtps-af-minimized');
      } else {
        body.style.display = 'none';
        btn.textContent = '+';
        floatingPanel.classList.add('rtps-af-minimized');
      }
    });

    // ── Load profiles ───────────────────────────────────────
    loadProfilesToPanel();

    // ── Fill button ─────────────────────────────────────────
    document.getElementById('rtps-af-fill-btn').addEventListener('click', async () => {
      const select = document.getElementById('rtps-af-profile-select');
      const profileId = select.value;
      const resultDiv = document.getElementById('rtps-af-result');

      if (!profileId) {
        resultDiv.textContent = '⚠️ Please select a profile first.';
        resultDiv.className = 'rtps-af-result rtps-af-result-warn';
        return;
      }

      const btn = document.getElementById('rtps-af-fill-btn');
      btn.disabled = true;
      btn.innerHTML = `
        <svg class="rtps-af-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
        </svg>
        Filling...
      `;
      resultDiv.textContent = '';

      chrome.storage.local.get('profiles', async (data) => {
        const profiles = data.profiles || [];
        const profile = profiles.find(p => p.id === profileId);

        if (!profile) {
          resultDiv.textContent = '❌ Profile not found.';
          resultDiv.className = 'rtps-af-result rtps-af-result-error';
          btn.disabled = false;
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Fill Now';
          return;
        }

        const transliterateCheckbox = document.getElementById('rtps-af-transliterate');
        profile.autoTransliterate = transliterateCheckbox.checked;

        const result = await window.RTPSAutoFill.fillForm(profile, detectedForm);

        resultDiv.textContent = result.message;
        resultDiv.className = result.success
          ? 'rtps-af-result rtps-af-result-success'
          : 'rtps-af-result rtps-af-result-error';

        btn.disabled = false;
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Fill Now';
      });
    });

    // ── Detect form type and update status ───────────────────
    detectedForm = detectFormType();
    const statusDiv = document.getElementById('rtps-af-status');
    const fillBtn = document.getElementById('rtps-af-fill-btn');
    const captureBtn = document.getElementById('rtps-af-capture-btn');

    if (detectedForm) {
      const formNames = {
        residence: '🏠 Residence Certificate',
        income: '💰 Income Certificate',
        caste: '📋 Caste Certificate',
        ncl: '📜 Non-Creamy Layer (Central NCL)',
      };
      statusDiv.innerHTML = `<span class="rtps-af-detected">Detected: <strong>${formNames[detectedForm]}</strong></span>`;
      statusDiv.classList.add('rtps-af-status-ok');
      fillBtn.disabled = false;
      captureBtn.disabled = false;
    } else {
      statusDiv.innerHTML = '⚠️ No RTPS form detected on this page.';
      statusDiv.classList.add('rtps-af-status-warn');
    }

    // ── Capture button ────────────────────────────────────────
    captureBtn.addEventListener('click', () => {
      captureProfile(detectedForm);
    });

  }

  // ── Load profiles into floating panel select ────────────────
  function loadProfilesToPanel() {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      const select = document.getElementById('rtps-af-profile-select');
      if (!select) return;

      select.innerHTML = '<option value="">— Select Profile —</option>';
      profiles.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name_en || 'Unnamed'} — ${p.mobile || ''}`;
        select.appendChild(opt);
      });
    });
  }

  // ── Listen for messages from popup/background ───────────────
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'detectForm') {
      const formType = detectFormType();
      sendResponse({ formType });
      return;
    }

    if (message.action === 'fillForm') {
      const profile = message.profile;
      const formType = detectedForm || detectFormType();

      if (!formType) {
        sendResponse({ success: false, message: 'No RTPS form detected' });
        return;
      }

      window.RTPSAutoFill.fillForm(profile, formType).then(result => {
        sendResponse(result);
      });
      return true; // async response
    }

    if (message.action === 'refreshProfiles') {
      loadProfilesToPanel();
      sendResponse({ success: true });
      return;
    }
  });

  // ── Initialize when DOM is ready ────────────────────────────
  function init() {
    // Only create panel on RTPS form pages
    const isFormPage = window.location.href.includes('serviceonline.bihar.gov.in') &&
      (window.location.href.includes('renderApplicationForm') ||
        window.location.href.includes('service') ||
        detectFormType());

    if (isFormPage) {
      // Wait a bit for dynamic content to load
      setTimeout(() => {
        createFloatingPanel();
      }, 1500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
