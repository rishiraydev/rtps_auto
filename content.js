// ============================================================
// Bihar RTPS AutoFill — Content Script
// Fast Form Detection & Action Handling
// ============================================================

(function () {
  'use strict';

  let detectedForm = null;

  // Exact Form Type Detection by serviceId, DOM elements, and Title
  function detectFormType() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('serviceId') || urlParams.get('ESSION_SERVICEID') || '';
    const title = (document.title || '').toLowerCase();
    const pageText = (document.body ? document.body.innerText : '').toLowerCase();

    // 1. Service ID Check (100% Precise)
    if (serviceId.startsWith('683')) return 'ncl_bihar';
    if (serviceId.startsWith('933')) return 'central_ncl';
    if (serviceId.startsWith('1043')) return 'ews';
    if (serviceId.startsWith('463')) return 'residence';
    if (serviceId.startsWith('464')) return 'income';
    if (serviceId.startsWith('465')) return 'caste';
    if (serviceId.startsWith('1205')) return 'character';

    // 2. DOM Field Element Check
    if (document.getElementById('54228') || document.getElementById('41813')) return 'ncl_bihar';
    if (document.getElementById('60091') || document.getElementById('60094')) return 'central_ncl';
    if (document.getElementById('67538') || document.getElementById('67520')) return 'ews';
    if (document.getElementById('78250') || document.getElementById('17287')) return 'residence';
    if (document.getElementById('17154') || document.getElementById('17394')) return 'income';
    if (document.getElementById('17176') || document.getElementById('17193')) return 'caste';
    if (document.getElementById('90876') || document.getElementById('90881')) return 'character';

    // 3. Keyword/Title Check
    if (pageText.includes('govt. of bihar') && (pageText.includes('non creamy') || pageText.includes('क्रीमीलेयर'))) return 'ncl_bihar';
    if (pageText.includes('govt. of india') && (pageText.includes('non creamy') || pageText.includes('क्रीमीलेयर'))) return 'central_ncl';
    if (pageText.includes('economically weaker') || pageText.includes('आर्थिक रूप से कमजोर') || title.includes('economically weaker')) return 'ews';
    if (title.includes('residence') || pageText.includes('निवास प्रमाण-पत्र')) return 'residence';
    if (title.includes('income') || pageText.includes('आय प्रमाण-पत्र')) return 'income';
    if (title.includes('caste') || pageText.includes('जाति प्रमाण-पत्र')) return 'caste';
    if (title.includes('character') || pageText.includes('चरित्र प्रमाण-पत्र') || pageText.includes('character certificate')) return 'character';

    return null;
  }

  // Floating Panel
  function createFloatingPanel() {
    if (document.getElementById('rtps-autofill-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'rtps-autofill-panel';
    panel.innerHTML = `
      <div class="rtps-af-header" id="rtps-af-drag-handle">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        <span>RTPS AutoFill & Capture</span>
        <button class="rtps-af-minimize" id="rtps-af-toggle">−</button>
      </div>
      <div class="rtps-af-body" id="rtps-af-body">
        <div class="rtps-af-status" id="rtps-af-status">Detecting form...</div>
        <div class="rtps-af-controls">
          <select id="rtps-af-profile-select" class="rtps-af-select">
            <option value="">— Select Profile —</option>
          </select>
          <label class="rtps-af-transliterate-toggle" title="Auto convert English to Hindi">
            <input type="checkbox" id="rtps-af-transliterate" checked>
            <span>Auto Hindi</span>
          </label>
        </div>
        <div class="rtps-af-btn-row">
          <button id="rtps-af-fill-btn" class="rtps-af-btn rtps-af-btn-fill" disabled title="Auto fill fields on this form">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Fill Form
          </button>
          <button id="rtps-af-capture-btn" class="rtps-af-btn rtps-af-btn-capture" title="Capture all dropdowns & inputs from this page">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            Capture Data
          </button>
        </div>
        <div class="rtps-af-result" id="rtps-af-result"></div>
      </div>
    `;

    document.body.appendChild(panel);

    // Draggable
    const handle = document.getElementById('rtps-af-drag-handle');
    let isDragging = false, offX = 0, offY = 0;
    handle.addEventListener('mousedown', (e) => {
      if (e.target.closest('.rtps-af-minimize')) return;
      isDragging = true;
      offX = e.clientX - panel.getBoundingClientRect().left;
      offY = e.clientY - panel.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      panel.style.left = (e.clientX - offX) + 'px';
      panel.style.top = (e.clientY - offY) + 'px';
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => { isDragging = false; });

    // Minimize
    document.getElementById('rtps-af-toggle').addEventListener('click', () => {
      const body = document.getElementById('rtps-af-body');
      const btn = document.getElementById('rtps-af-toggle');
      if (body.style.display === 'none') {
        body.style.display = 'block';
        btn.textContent = '−';
        panel.classList.remove('rtps-af-minimized');
      } else {
        body.style.display = 'none';
        btn.textContent = '+';
        panel.classList.add('rtps-af-minimized');
      }
    });

    // Fill button
    document.getElementById('rtps-af-fill-btn').addEventListener('click', async () => {
      const select = document.getElementById('rtps-af-profile-select');
      const profileId = select.value;
      const resDiv = document.getElementById('rtps-af-result');

      if (!profileId) {
        resDiv.textContent = '⚠️ Select a profile first';
        resDiv.className = 'rtps-af-result rtps-af-result-warn';
        return;
      }

      const fillBtn = document.getElementById('rtps-af-fill-btn');
      fillBtn.disabled = true;
      fillBtn.textContent = 'Filling Form...';
      resDiv.textContent = '';

      chrome.storage.local.get('profiles', async (data) => {
        const profile = (data.profiles || []).find(p => p.id === profileId);
        if (!profile) {
          resDiv.textContent = 'Profile not found';
          fillBtn.disabled = false;
          fillBtn.textContent = 'Fill Form';
          return;
        }

        const currentForm = detectedForm || detectFormType();
        const result = await window.RTPSAutoFill.fillForm(profile, currentForm);

        resDiv.textContent = result.message;
        resDiv.className = result.success ? 'rtps-af-result rtps-af-result-success' : 'rtps-af-result rtps-af-result-error';
        fillBtn.disabled = false;
        fillBtn.textContent = 'Fill Form';
      });
    });

    // Capture button (Captures all form data & records without duplicate)
    document.getElementById('rtps-af-capture-btn').addEventListener('click', async () => {
      const capBtn = document.getElementById('rtps-af-capture-btn');
      const resDiv = document.getElementById('rtps-af-result');
      const select = document.getElementById('rtps-af-profile-select');

      capBtn.disabled = true;
      capBtn.textContent = 'Capturing...';
      resDiv.textContent = '';

      const selectedId = select ? select.value : null;
      const result = await window.RTPSAutoFill.captureForm(selectedId);

      resDiv.textContent = result.message;
      resDiv.className = result.success ? 'rtps-af-result rtps-af-result-success' : 'rtps-af-result rtps-af-result-warn';

      capBtn.disabled = false;
      capBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
        Capture Data
      `;

      if (result.success && result.profile) {
        loadProfilesToSelect(result.profile.id);
        document.getElementById('rtps-af-fill-btn').disabled = false;
        try {
          chrome.runtime.sendMessage({ action: 'profilesUpdated', profile: result.profile }).catch(() => {});
        } catch (e) {}
      }
    });

    // Set Status
    detectedForm = detectFormType();
    const statusDiv = document.getElementById('rtps-af-status');
    const fillBtn = document.getElementById('rtps-af-fill-btn');

    const formLabels = {
      ncl_bihar: '📜 Bihar NCL (Govt. of Bihar)',
      central_ncl: '📜 Central NCL (Govt. of India)',
      ews: '📊 EWS Certificate',
      residence: '🏠 Residence Certificate',
      income: '💰 Income Certificate',
      caste: '📋 Caste Certificate',
      character: '🛡️ Character Certificate (चरित्र प्रमाण-पत्र)'
    };

    if (detectedForm) {
      statusDiv.innerHTML = `<span class="rtps-af-detected">Detected: <strong>${formLabels[detectedForm] || detectedForm}</strong></span>`;
      statusDiv.classList.add('rtps-af-status-ok');
      fillBtn.disabled = false;
    } else {
      statusDiv.innerHTML = '🌐 RTPS Portal Ready (Universal Fill & Capture)';
      statusDiv.classList.add('rtps-af-status-ok');
      // Keep fill button enabled if user has chosen a profile
      fillBtn.disabled = false;
    }

    loadProfilesToSelect();
  }

  function loadProfilesToSelect(selectedId = null) {
    chrome.storage.local.get('profiles', (data) => {
      const select = document.getElementById('rtps-af-profile-select');
      if (!select) return;
      const currentVal = selectedId || select.value;
      select.innerHTML = '<option value="">— Select Profile —</option>';
      (data.profiles || []).forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name_en || 'Unnamed'} (${p.district || p.mobile || 'Profile'})`;
        if (currentVal && p.id === currentVal) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });
    });
  }

  // Messaging from popup / background
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'detectForm') {
      const formType = detectFormType();
      sendResponse({ formType });
      return;
    }

    if (msg.action === 'fillForm') {
      const profile = msg.profile;
      const formType = detectedForm || detectFormType();
      if (!formType) {
        sendResponse({ success: false, message: 'No RTPS form detected on active page' });
        return;
      }
      window.RTPSAutoFill.fillForm(profile, formType).then(res => {
        sendResponse(res);
      });
      return true;
    }

    if (msg.action === 'captureForm') {
      const profileId = msg.profileId || document.getElementById('rtps-af-profile-select')?.value;
      window.RTPSAutoFill.captureForm(profileId).then(res => {
        if (res.success && res.profile) {
          loadProfilesToSelect(res.profile.id);
        }
        sendResponse(res);
      });
      return true;
    }

    if (msg.action === 'refreshProfiles' || msg.action === 'profilesUpdated') {
      loadProfilesToSelect(msg.profile ? msg.profile.id : null);
      sendResponse({ success: true });
      return;
    }
  });

  // Init
  if (window.location.href.includes('serviceonline.bihar.gov.in')) {
    setTimeout(createFloatingPanel, 800);
  }
})();
