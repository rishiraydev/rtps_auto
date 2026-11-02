// ============================================================
// Bihar RTPS AutoFill — Fast Accurate AutoFill Engine
// Target Services:
// 1. Residence (4630012)
// 2. Income (4640012)
// 3. Caste (4650013)
// 4. Bihar NCL (6830012)
// 5. Central NCL (9330013)
// 6. EWS (10430014)
// ============================================================

window.RTPSAutoFill = (function() {
  'use strict';

  // EXACT FIELD MAPPING FROM REAL SERVICEPLUS DOM
  const FIELD_MAP = {
    // ── 1. BIHAR NCL (ServiceId: 6830012) ──
    ncl_bihar: {
      gender_male: '41855_1',
      gender_female: '41855_2',
      gender_third: '41855_3',
      salutation: '63931',
      name_en: '54228',
      name_hi: '41813',
      dob: '41857',
      // Permanent Address
      state: '41827',
      district: '41828',
      subdivision: '41829',
      block: '41831',
      village: '41830',
      police_station: '64990',
      post_office: '41853',
      pin_code: '90781',
      ward: '56372',
      holding_no: '41948',
      circle_no: '41947',
      // Local Body & Gram Panchayat
      localbody_panchayat: '85734_1',
      localbody_mc: '85734_2',
      localbody_muni: '85734_3',
      localbody_town: '85734_4',
      panchayat: '85744',
      // Present Address Same Checkbox
      present_address_same: '41873_1',
      // Present Address
      present_state: '41876',
      present_district: '41879',
      present_subdivision: '41880',
      present_block: '41878',
      present_village: '41881',
      present_police_station: '64991',
      present_post_office: '41882',
      present_pin_code: '90782',
      present_ward: '56373',
      // Caste & Identity
      religion: '41958',
      category: '42079',
      caste: '42078',
      sub_caste: '42080',
      caste_serial: '42081',
      profession: '42349',
      father_en: '41821',
      father_hi: '41823',
      mother_en: '41822',
      mother_hi: '41824',
      husband_en: '64988',
      husband_hi: '64989',
      mobile: '41825',
      email: '41826',
      // Annual Income
      annual_income: '60677',
      // Mandatory enclosure checkboxes (42248_1 through 42248_6)
      enclosures: ['42248_1', '42248_2', '42248_3', '42248_4'],
      agree: '54227'
    },

    // ── 2. CENTRAL NCL (ServiceId: 9330013) ──
    central_ncl: {
      format: '93029',
      gender_male: '60088_1',
      gender_female: '60088_2',
      gender_third: '60088_3',
      salutation: '60093',
      name_en: '60091',
      name_hi: '60094',
      dob: '60068',
      // Permanent Address
      state: '60069',
      district: '60070',
      subdivision: '60071',
      block: '60072',
      village: '60097',
      police_station: '91081',
      post_office: '60098',
      pin_code: '60100',
      ward: '60073',
      // Local Body & Gram Panchayat
      localbody_panchayat: '91079_1',
      localbody_mc: '91079_2',
      localbody_muni: '91079_3',
      localbody_town: '91079_4',
      panchayat: '60059',
      // Present Address Same Checkbox
      present_address_same: '60101_1',
      // Present Address
      present_state: '60102',
      present_district: '60077',
      present_subdivision: '60076',
      present_block: '60060',
      present_village: '60081',
      present_police_station: '91082',
      present_post_office: '60064',
      present_pin_code: '60056',
      present_ward: '60074',
      // Caste & Identity
      religion: '60105',
      category: '60057',
      caste: '60106',
      sub_caste: '60107',
      caste_serial: '60065',
      profession: '60082',
      father_en: '60083',
      father_hi: '60084',
      father_caste: '91110',
      mother_en: '60085',
      mother_hi: '60086',
      husband_en: '60087',
      husband_hi: '60067',
      mobile: '60063',
      email: '60058',
      // Annual Income & Tax
      annual_income: '60344',
      income_salary: '60336',
      income_business: '60340',
      income_pension: '91100',
      income_agriculture: '91103',
      tax_payer_yes: '60345_1',
      tax_payer_no: '60345_2',
      wealth_tax_yes: '91102_1',
      wealth_tax_no: '91102_2',
      // Enclosures (60054_1 through 60054_6)
      enclosures: ['60054_1', '60054_2', '60054_3', '60054_4'],
      agree: '60109'
    },

    // ── 3. EWS (ServiceId: 10430014) ──
    ews: {
      format: '70125',
      gender_male: '67535_1',
      gender_female: '67535_2',
      gender_third: '67535_3',
      salutation: '67489',
      name_en: '67538',
      name_hi: '67520',
      dob: '67501',
      // Address
      state: '67502',
      district: '67503',
      subdivision: '67504',
      block: '67505',
      localbody_panchayat: '77725_1',
      localbody_mc: '77725_2',
      localbody_muni: '77725_3',
      localbody_town: '77725_4',
      panchayat: '67492',
      ward: '67508',
      village: '67523',
      police_station: '67510',
      post_office: '67522',
      pin_code: '68199',
      holding_no: '67543',
      circle_no: '67540',
      // Caste & Identity
      religion: '67545',
      category_option_a: '93019_1', // Option (a)
      category_option_b: '93019_2', // Option (b)
      caste: '67546',
      caste_serial: '67498',
      father_en: '67517',
      father_hi: '67518',
      mother_en: '67532',
      mother_hi: '67533',
      husband_en: '67534',
      mobile: '67496',
      email: '67491',
      // Income
      family_income: '67563',
      // Application Status & Service Type
      app_status_accept: '71543_1',
      service_type_general: '71544_1',
      // Enclosures checklist
      enclosures: ['68417_1', '71940_1', '71940_2'],
      agree: '71550'
    },

    // ── 4. RESIDENCE (ServiceId: 4630012) ──
    residence: {
      gender_male: '17290_1',
      gender_female: '17290_2',
      gender_third: '17290_3',
      salutation: '63928',
      name_en: '78250',
      name_hi: '17287',
      father_en: '78251',
      father_hi: '17288',
      mother_en: '41565',
      mother_hi: '41567',
      husband_en: '64876',
      husband_hi: '64877',
      mobile: '17293',
      email: '17294',
      state: '17391',
      district: '17297',
      subdivision: '17296',
      block: '17298',
      localbody_panchayat: '75290_1',
      localbody_mc: '75290_2',
      localbody_muni: '75290_3',
      localbody_town: '75290_4',
      ward: '56887',
      village: '17299',
      police_station: '65015',
      post_office: '17300',
      pin_code: '90772',
      panchayat: '56886',
      aadhaar: '56925_txt',
      residence_permanent: '41566_1',
      residence_temporary: '41566_2',
      purpose: '17301',
      agree: '74561',
      present_address_same: '91900_1'
    },

    // ── 5. INCOME (ServiceId: 4640012) ──
    income: {
      gender_male: '17155_1',
      gender_female: '17155_2',
      gender_third: '17155_3',
      salutation: '64058',
      name_en: '17154',
      name_hi: '17394',
      father_en: '17157',
      father_hi: '17395',
      mother_en: '41395',
      mother_hi: '41433',
      husband_en: '64861',
      husband_hi: '64862',
      mobile: '17203',
      email: '17205',
      state: '17158',
      district: '17162',
      subdivision: '17159',
      block: '17163',
      localbody_panchayat: '75265_1',
      localbody_mc: '75265_2',
      localbody_muni: '75265_3',
      localbody_town: '75265_4',
      ward: '56894',
      village: '17160',
      police_station: '65010',
      post_office: '17164',
      pin_code: '90777',
      panchayat: '56895',
      aadhaar: '17178_txt',
      profession: '17185',
      purpose_of_application: '17186',
      income_govt: '17187',
      income_agriculture: '17188',
      income_business: '17189',
      income_other: '17190',
      total_income: '17166',
      agree: '74568'
    },

    // ── 6. CASTE (ServiceId: 4650013) ──
    caste: {
      gender_male: '17177_1',
      gender_female: '17177_2',
      gender_third: '17177_3',
      salutation: '63930',
      name_en: '17176',
      name_hi: '17193',
      father_en: '17179',
      father_hi: '17195',
      mother_en: '78252',
      mother_hi: '41486',
      husband_en: '64882',
      husband_hi: '64883',
      mobile: '17180',
      email: '17332',
      state: '17392',
      district: '17183',
      subdivision: '17182',
      block: '17184',
      localbody_panchayat: '75299_1',
      localbody_mc: '75299_2',
      localbody_muni: '75299_3',
      localbody_town: '75299_4',
      ward: '56927',
      village: '17185',
      police_station: '65034',
      post_office: '17186',
      pin_code: '90779',
      panchayat: '56891',
      aadhaar: '56980_txt',
      profession: '17202',
      category: '17191',
      caste: '41552',
      caste_serial: '41535',
      sub_caste: '17188',
      agree: '74569',
      present_address_same: '91902_1'
    },

    // ── 7. CHARACTER CERTIFICATE (ServiceId: 12050017) ──
    character: {
      format: '92641',
      gender_male: '90875_1',
      gender_female: '90875_2',
      gender_third: '90875_3',
      salutation: '90880',
      name_en: '90876',
      name_hi: '90881',
      father_en: '90877',
      father_hi: '90882',
      mother_en: '90878',
      mother_hi: '90883',
      husband_en: '90879',
      husband_hi: '90884',
      mobile: '90937',
      email: '90938',
      // Permanent Address
      state: '90895',
      district: '90897',
      police_district: '92992',
      subdivision: '90898',
      block: '90904',
      village: '91814',
      village_hi: '90910',
      post_office: '91816',
      post_office_hi: '90913',
      ward: '90912',
      pin_code: '90914',
      localbody_panchayat: '90899_1',
      localbody_mc: '90899_2',
      localbody_muni: '90899_3',
      localbody_town: '90899_4',
      panchayat: '90900',
      police_station: '90911',
      holding_no: '91322',
      circle_no: '91321',
      // Present Address Same Checkbox
      present_address_same: '91324_1',
      // Profession & Purpose
      profession: '90956',
      purpose: '90957',
      // Domicile Details of last 2 years
      domicile_type: '91599_0',
      domicile_district: '91600_0',
      domicile_police_station: '91601_0',
      domicile_address: '91602_0',
      domicile_from_month: '91603_0',
      domicile_from_year: '91604_0',
      domicile_to_month: '91605_0',
      domicile_to_year: '91606_0',
      agree: '90952'
    }
  };

  // Aliases
  FIELD_MAP.ncl = FIELD_MAP.central_ncl;

  // ── Helper Functions ──────────────────────────────────────
  function setVal(id, value) {
    if (!value && value !== 0) return false;
    const el = document.getElementById(id);
    if (!el) return false;

    // Use prototype setter for React/ServicePlus DWR compatibility
    const setter = Object.getOwnPropertyDescriptor(
      el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype,
      'value'
    )?.set;

    if (setter) setter.call(el, value);
    else el.value = value;

    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new Event('blur', { bubbles: true }));
    return true;
  }

  function clickRadio(id) {
    if (!id) return false;
    const el = document.getElementById(id);
    if (el) {
      el.checked = true;
      el.click();
      el.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    return false;
  }

  function checkCheckbox(id) {
    if (!id) return false;
    const el = document.getElementById(id);
    if (!el) return false;
    if (!el.checked) {
      el.click();
      if (!el.checked) {
        el.checked = true;
      }
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    return true;
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function selectDropdown(id, val, waitMs = 4000) {
    if (!val) return false;
    let el = document.getElementById(id);
    
    // Fallback: If not found by ID, look for select by name or nearby label
    if (!el) {
      const allSels = document.querySelectorAll('select');
      for (const s of allSels) {
        if (s.name === id) { el = s; break; }
      }
    }

    if (!el) return false;

    const targetVal = String(val).trim().toLowerCase();
    const start = Date.now();

    const fireEvents = (targetEl) => {
      targetEl.dispatchEvent(new Event('input', { bubbles: true }));
      targetEl.dispatchEvent(new Event('change', { bubbles: true }));
      if (typeof targetEl.onchange === 'function') {
        try { targetEl.onchange(); } catch(e) {}
      }
      try {
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent('change', true, false);
        targetEl.dispatchEvent(evt);
      } catch(e) {}
    };

    while (Date.now() - start < waitMs) {
      if (el.options && el.options.length > 1) {
        for (let i = 0; i < el.options.length; i++) {
          const opt = el.options[i];
          const optVal = (opt.value || '').trim().toLowerCase();
          const optText = (opt.text || '').trim().toLowerCase();
          // Skip placeholder options
          if (!optVal || optVal === '0' || optVal === '-1' || /^(select|--|चुनें|please)/i.test(optText)) {
            continue;
          }
          if (optVal === targetVal || optText === targetVal || optText.startsWith(targetVal) || optText.includes(targetVal)) {
            el.selectedIndex = i;
            el.value = opt.value;
            fireEvents(el);
            return true;
          }
        }
      }
      await delay(250);
    }

    // Fallback search across options
    if (el.options && el.options.length > 0) {
      for (let i = 0; i < el.options.length; i++) {
        const opt = el.options[i];
        const optText = (opt.text || '').toLowerCase();
        if (opt.value && opt.value !== '0' && optText.includes(targetVal)) {
          el.selectedIndex = i;
          el.value = opt.value;
          fireEvents(el);
          return true;
        }
      }
    }
    return false;
  }

  // ── CORE FAST FORM FILL FUNCTION ────────────────────────────
  async function fillForm(profile, formType) {
    if (!profile) return { success: false, message: 'No profile data' };
    const map = FIELD_MAP[formType] || FIELD_MAP.central_ncl;
    if (!map) return { success: false, message: 'Unrecognized form type: ' + formType };

    let count = 0;

    // 1. Language Format (if present)
    if (map.format) {
      await selectDropdown(map.format, 'Hindi', 1000);
    }

    // 2. Gender Radio (Male/Female/Third)
    if (profile.gender) {
      const g = profile.gender.toLowerCase();
      let rId = map.gender_third;
      if (g.includes('male') || g.includes('पुरुष')) rId = map.gender_male;
      else if (g.includes('female') || g.includes('स्त्री') || g.includes('महिला')) rId = map.gender_female;
      if (clickRadio(rId)) count++;
    }

    // 3. Salutation
    if (profile.salutation) {
      if (await selectDropdown(map.salutation, profile.salutation, 1000)) count++;
    }

    // 4. Applicant Name (English & Hindi)
    if (profile.name_en) {
      if (setVal(map.name_en, profile.name_en)) count++;
      const hi = profile.name_hi || (window.transliterateToHindi ? window.transliterateToHindi(profile.name_en) : '');
      if (hi) setVal(map.name_hi, hi);
    }

    // 5. Date of Birth
    if (profile.dob && map.dob) {
      if (setVal(map.dob, profile.dob)) count++;
    }

    // 6. Father's Name
    if (profile.father_en) {
      if (setVal(map.father_en, profile.father_en)) count++;
      const fHi = profile.father_hi || (window.transliterateToHindi ? window.transliterateToHindi(profile.father_en) : '');
      if (fHi) setVal(map.father_hi, fHi);
    }

    // 7. Mother's Name
    if (profile.mother_en) {
      if (setVal(map.mother_en, profile.mother_en)) count++;
      const mHi = profile.mother_hi || (window.transliterateToHindi ? window.transliterateToHindi(profile.mother_en) : '');
      if (mHi) setVal(map.mother_hi, mHi);
    }

    // 8. Husband's Name (if applicable)
    if (profile.husband_en && map.husband_en) {
      setVal(map.husband_en, profile.husband_en);
      const hHi = profile.husband_hi || (window.transliterateToHindi ? window.transliterateToHindi(profile.husband_en) : '');
      if (hHi && map.husband_hi) setVal(map.husband_hi, hHi);
    }

    // 9. Mobile & Email
    if (profile.mobile && map.mobile) {
      if (setVal(map.mobile, profile.mobile)) count++;
    }
    if (profile.email && map.email) {
      if (setVal(map.email, profile.email)) count++;
    }

    // Character certificate format (Hindi by default)
    if (map.format && document.getElementById(map.format)) {
      const fmtEl = document.getElementById(map.format);
      if (fmtEl && fmtEl.tagName === 'SELECT' && fmtEl.options.length > 1) {
        fmtEl.selectedIndex = 1;
        fmtEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // 10. Address Hierarchy (State -> District -> SubDiv -> Block)
    if (map.state) {
      let stOk = await selectDropdown(map.state, profile.state || 'BIHAR', 3500);
      if (!stOk) {
        // Fallback: search any select near State / राज्य label
        for (const s of document.querySelectorAll('select')) {
          const lbl = s.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';
          if (lbl.includes('राज्य') || lbl.includes('state')) {
            stOk = await selectDropdown(s.id || s.name, profile.state || 'BIHAR', 2000);
            if (stOk) break;
          }
        }
      }
      if (stOk) {
        count++;
        // Give ServicePlus DWR AJAX time to populate District options
        await delay(1500);
      }
    }

    if (profile.district && map.district) {
      let distOk = await selectDropdown(map.district, profile.district, 5000);
      if (!distOk) {
        for (const s of document.querySelectorAll('select')) {
          const lbl = s.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';
          if (lbl.includes('जिला') || lbl.includes('district')) {
            distOk = await selectDropdown(s.id || s.name, profile.district, 3000);
            if (distOk) break;
          }
        }
      }
      if (distOk) {
        count++;
        // Police district for Character Certificate
        if (map.police_district && profile.district) {
          await selectDropdown(map.police_district, profile.district, 2000);
        }
        // Wait for sub-division options
        await delay(1200);
      }
    }

    if (profile.subdivision && map.subdivision) {
      let subOk = await selectDropdown(map.subdivision, profile.subdivision, 4500);
      if (!subOk) {
        for (const s of document.querySelectorAll('select')) {
          const lbl = s.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';
          if (lbl.includes('अनुमंडल') || lbl.includes('sub-division') || lbl.includes('subdivision')) {
            subOk = await selectDropdown(s.id || s.name, profile.subdivision, 3000);
            if (subOk) break;
          }
        }
      }
      if (subOk) {
        count++;
        // Wait for block options
        await delay(1200);
      }
    }

    if (profile.block && map.block) {
      let blkOk = await selectDropdown(map.block, profile.block, 4500);
      if (!blkOk) {
        for (const s of document.querySelectorAll('select')) {
          const lbl = s.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';
          if (lbl.includes('प्रखंड') || lbl.includes('block')) {
            blkOk = await selectDropdown(s.id || s.name, profile.block, 3000);
            if (blkOk) break;
          }
        }
      }
      if (blkOk) {
        count++;
        await delay(1000);
      }
    }

    // 11. Type of Local Body & Gram Panchayat Selection
    if (map.localbody_panchayat || map.localbody_mc) {
      const lbt = (profile.localBodyType || 'Gram Panchayat').toLowerCase();
      let lbId = map.localbody_panchayat;
      if (lbt.includes('municipal corporation') || lbt.includes('निगम')) lbId = map.localbody_mc;
      else if (lbt.includes('municipality') || lbt.includes('परिषद')) lbId = map.localbody_muni;
      else if (lbt.includes('town') || lbt.includes('नगर पंचायत')) lbId = map.localbody_town;
      if (lbId && clickRadio(lbId)) {
        count++;
        // Give ServicePlus DWR/AJAX time to load Panchayat list for selected block
        await delay(1200);
      }
    }

    // Gram Panchayat Dropdown Selection
    if (profile.panchayat && map.panchayat) {
      if (await selectDropdown(map.panchayat, profile.panchayat, 5000)) {
        count++;
      } else {
        // Fallback: search any visible select with panchayat in id, name, or preceding label
        const allSels = document.querySelectorAll('select');
        for (const s of allSels) {
          const sId = (s.id || s.name || '').toLowerCase();
          const sLbl = s.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';
          if (sId.includes('panchayat') || sLbl.includes('ग्राम पंचायत') || sLbl.includes('panchayat')) {
            if (await selectDropdown(s.id, profile.panchayat, 2500)) {
              count++;
              break;
            }
          }
        }
      }
    }

    // 12. Village, Post Office, Police Station, Pin Code, Ward
    if (profile.village && map.village) {
      if (setVal(map.village, profile.village)) count++;
    }
    if (profile.post_office && map.post_office) {
      if (setVal(map.post_office, profile.post_office)) count++;
    }
    if (profile.village && map.village_hi) {
      const vHi = profile.village_hi || (window.RTPSTransliterate ? window.RTPSTransliterate.toHindi(profile.village) : profile.village);
      setVal(map.village_hi, vHi);
    }
    if (profile.post_office && map.post_office_hi) {
      const poHi = profile.post_office_hi || (window.RTPSTransliterate ? window.RTPSTransliterate.toHindi(profile.post_office) : profile.post_office);
      setVal(map.post_office_hi, poHi);
    }
    if (profile.police_station && map.police_station) {
      const psEl = document.getElementById(map.police_station);
      if (psEl && psEl.tagName === 'SELECT') {
        if (await selectDropdown(map.police_station, profile.police_station, 2000)) count++;
      } else if (psEl) {
        if (setVal(map.police_station, profile.police_station)) count++;
      }
    }
    if (profile.pin_code && map.pin_code) {
      if (setVal(map.pin_code, profile.pin_code)) count++;
    }
    if (profile.ward && map.ward) {
      if (setVal(map.ward, profile.ward)) count++;
    }

    // 13. Present Address Same Checkbox ("ऊपर जैसा / Same as Above") - Always kept checked!
    let sameAsDone = false;
    if (map.present_address_same) {
      sameAsDone = checkCheckbox(map.present_address_same);
    }
    // Universal check for all forms with "Same as Above" / "ऊपर जैसा"
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      const parentText = (cb.closest('label, div, td')?.innerText || '') + ' ' + (cb.title || '');
      if (parentText.includes('Same as Above') || parentText.includes('ऊपर जैसा') || parentText.includes('Same as above')) {
        if (!cb.checked) {
          cb.click();
          if (!cb.checked) cb.checked = true;
          cb.dispatchEvent(new Event('input', { bubbles: true }));
          cb.dispatchEvent(new Event('change', { bubbles: true }));
        }
        sameAsDone = true;
      }
    });
    if (sameAsDone) {
      count++;
      await delay(500);
    }

    // 14. Religion
    if (map.religion) {
      const rel = profile.religion || 'Hindu';
      const relEl = document.getElementById(map.religion);
      if (relEl && relEl.tagName === 'SELECT') await selectDropdown(map.religion, rel, 1000);
      else if (relEl) setVal(map.religion, rel);
      count++;
    }

    // 15. Category & Caste
    const catVal = profile.category || profile.nclCategory;
    if (catVal && map.category) {
      if (await selectDropdown(map.category, catVal, 2000)) {
        count++;
        await delay(1000); // Wait for caste list
      }
    }

    // EWS option selection: Choose (a) or (b)
    if (map.category_option_a) {
      clickRadio(map.category_option_a); // Default option (a)
    }

    const casteVal = profile.caste || profile.nclCaste;
    if (casteVal && map.caste) {
      if (await selectDropdown(map.caste, casteVal, 4000)) {
        count++;
        await delay(500);
      }
    }

    // Sub-Caste
    const subCasteVal = profile.sub_caste || profile.nclSubCaste;
    if (subCasteVal && map.sub_caste) {
      const subEl = document.getElementById(map.sub_caste);
      if (subEl && subEl.tagName === 'SELECT') await selectDropdown(map.sub_caste, subCasteVal, 2000);
      else if (subEl) setVal(map.sub_caste, subCasteVal);
    }

    // Caste Serial No.
    if (profile.caste_serial && map.caste_serial) {
      setVal(map.caste_serial, profile.caste_serial);
    }

    // Father's Caste (Central NCL)
    if (casteVal && map.father_caste) {
      await selectDropdown(map.father_caste, casteVal, 1000);
    }

    // 16. Profession / Occupation
    const profVal = profile.profession || 'Student';
    if (profVal && map.profession) {
      await selectDropdown(map.profession, profVal, 1000);
      count++;
    }

    // 17. Incomes
    if (profile.total_income || profile.family_income) {
      const incVal = profile.family_income || profile.total_income;
      if (map.family_income) setVal(map.family_income, incVal);
      if (map.annual_income) setVal(map.annual_income, incVal);
      if (map.total_income) setVal(map.total_income, incVal);
      count++;
    }

    // Breakdown for NCL / Income form
    if (profile.income_govt && map.income_salary) setVal(map.income_salary, profile.income_govt);
    if (profile.income_business && map.income_business) setVal(map.income_business, profile.income_business);
    if (profile.income_other && map.income_pension) setVal(map.income_pension, profile.income_other);
    if (profile.income_agriculture && map.income_agriculture) setVal(map.income_agriculture, profile.income_agriculture);

    // Tax status (No by default)
    if (map.tax_payer_no) clickRadio(map.tax_payer_no);
    if (map.wealth_tax_no) clickRadio(map.wealth_tax_no);

    // Service type / Application status for EWS
    if (map.app_status_accept) clickRadio(map.app_status_accept);
    if (map.service_type_general) clickRadio(map.service_type_general);

    // 18. Mandatory Enclosures Checkboxes
    if (map.enclosures && Array.isArray(map.enclosures)) {
      map.enclosures.forEach(encId => {
        checkCheckbox(encId);
      });
      count += map.enclosures.length;
    }

    // Purpose of Application (Character Certificate)
    if (map.purpose) {
      const purVal = profile.purpose || 'चरित्र प्रमाण पत्र निर्गत करना';
      const purEl = document.getElementById(map.purpose);
      if (purEl && purEl.tagName === 'SELECT') {
        const ok = await selectDropdown(map.purpose, purVal, 2000);
        if (!ok && purEl.options.length > 2) {
          purEl.selectedIndex = purEl.options.length > 5 ? 5 : 2;
          purEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }

    // Domicile Details of last 2 years (Character Certificate)
    if (map.domicile_type) {
      const domTypeEl = document.getElementById(map.domicile_type);
      if (domTypeEl) {
        domTypeEl.value = '1';
        domTypeEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
      await delay(400);

      if (map.domicile_district && profile.district) {
        await selectDropdown(map.domicile_district, profile.district, 2500);
        await delay(800);
      }

      if (map.domicile_police_station && profile.police_station) {
        await selectDropdown(map.domicile_police_station, profile.police_station, 3000);
      }

      if (map.domicile_address) {
        const fullAddr = [profile.village, profile.post_office, profile.block, profile.district].filter(Boolean).join(', ');
        setVal(map.domicile_address, fullAddr);
      }

      const curYr = new Date().getFullYear();
      const curMo = new Date().getMonth() + 1;

      if (map.domicile_from_month) {
        const fm = document.getElementById(map.domicile_from_month);
        if (fm) { fm.value = '1'; fm.dispatchEvent(new Event('change', { bubbles: true })); }
      }
      if (map.domicile_from_year) {
        const fy = document.getElementById(map.domicile_from_year);
        if (fy) { fy.value = String(curYr - 2); fy.dispatchEvent(new Event('change', { bubbles: true })); }
      }
      if (map.domicile_to_month) {
        const tm = document.getElementById(map.domicile_to_month);
        if (tm) { tm.value = String(curMo); tm.dispatchEvent(new Event('change', { bubbles: true })); }
      }
      if (map.domicile_to_year) {
        const ty = document.getElementById(map.domicile_to_year);
        if (ty) { ty.value = String(curYr); ty.dispatchEvent(new Event('change', { bubbles: true })); }
      }
    }

    // 19. I Agree
    if (map.agree) {
      checkCheckbox(map.agree);
      count++;
    }

    // Focus on Captcha
    await delay(300);
    const captcha = document.querySelector('input[name*="captcha" i], input[id*="captcha" i], input[name*="wordVerification" i]');
    if (captcha) {
      captcha.focus();
      captcha.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return {
      success: true,
      message: `✅ Form filled successfully! (${count} fields processed)`,
      count: count
    };
  }

  // ============================================================
  // FORM CAPTURE ENGINE — Captures all inputs, selects, radios, checkboxes
  // Smart profile deduplication: updates existing profile if matched!
  // ============================================================
  async function captureForm(targetProfileId = null) {
    let formType = null;
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('serviceId') || urlParams.get('ESSION_SERVICEID') || '';
    const title = (document.title || '').toLowerCase();
    const pageText = (document.body ? document.body.innerText : '').toLowerCase();

    // 1. Detect form type by serviceId, DOM elements, or keywords
    if (serviceId.startsWith('683') || document.getElementById('54228')) formType = 'ncl_bihar';
    else if (serviceId.startsWith('933') || document.getElementById('60091')) formType = 'central_ncl';
    else if (serviceId.startsWith('1043') || document.getElementById('67538')) formType = 'ews';
    else if (serviceId.startsWith('463') || document.getElementById('78250')) formType = 'residence';
    else if (serviceId.startsWith('464') || document.getElementById('17154')) formType = 'income';
    else if (serviceId.startsWith('465') || document.getElementById('17176')) formType = 'caste';
    else if (serviceId.startsWith('1205') || document.getElementById('90876')) formType = 'character';
    else {
      if (pageText.includes('govt. of bihar') && (pageText.includes('non creamy') || pageText.includes('क्रीमीलेयर'))) formType = 'ncl_bihar';
      else if (pageText.includes('govt. of india') && (pageText.includes('non creamy') || pageText.includes('क्रीमीलेयर'))) formType = 'central_ncl';
      else if (pageText.includes('economically weaker') || pageText.includes('आर्थिक रूप से कमजोर')) formType = 'ews';
      else if (title.includes('residence') || pageText.includes('निवास प्रमाण-पत्र')) formType = 'residence';
      else if (title.includes('income') || pageText.includes('आय प्रमाण-पत्र')) formType = 'income';
      else if (title.includes('caste') || pageText.includes('जाति प्रमाण-पत्र')) formType = 'caste';
      else if (title.includes('character') || pageText.includes('चरित्र प्रमाण-पत्र') || pageText.includes('character certificate')) formType = 'character';
    }

    const getVal = (id) => {
      if (!id) return '';
      const el = document.getElementById(id);
      if (!el) return '';
      if (el.tagName === 'SELECT') {
        if (el.selectedIndex >= 0) {
          const opt = el.options[el.selectedIndex];
          if (opt && opt.value && opt.value !== '0' && opt.value !== '-1') {
            const txt = (opt.text || '').trim();
            if (!/^(select|--|चुनें)/i.test(txt)) return txt.split('/')[0].trim();
          }
        }
        return '';
      }
      return (el.value || '').trim();
    };

    const getSelectText = (id) => {
      if (!id) return '';
      const el = document.getElementById(id);
      if (!el || el.selectedIndex < 0) return '';
      const opt = el.options[el.selectedIndex];
      if (!opt || !opt.value || opt.value === '0' || opt.value === '-1') return '';
      const txt = (opt.text || '').trim();
      if (/^(select|--|चुनें)/i.test(txt)) return '';
      return txt.split('/')[0].trim();
    };

    const isChecked = (id) => {
      if (!id) return false;
      const el = document.getElementById(id);
      return !!(el && el.checked);
    };

    const captured = {};

    // 2. FORM-SPECIFIC EXTRACTION (Exact DOM mappings)
    if (formType && FIELD_MAP[formType]) {
      const map = FIELD_MAP[formType];

      // Gender
      if (isChecked(map.gender_male)) captured.gender = 'Male';
      else if (isChecked(map.gender_female)) captured.gender = 'Female';
      else if (isChecked(map.gender_third)) captured.gender = 'Third Gender';

      // Salutation
      if (map.salutation) captured.salutation = getSelectText(map.salutation) || getVal(map.salutation);

      // Name
      if (map.name_en) captured.name_en = getVal(map.name_en);
      if (map.name_hi) captured.name_hi = getVal(map.name_hi);

      // DOB
      if (map.dob) captured.dob = getVal(map.dob);

      // Address
      if (map.state) captured.state = getSelectText(map.state) || 'BIHAR';
      if (map.district) captured.district = getSelectText(map.district);
      if (map.subdivision) captured.subdivision = getSelectText(map.subdivision);
      if (map.block) captured.block = getSelectText(map.block);
      if (map.village) captured.village = getVal(map.village);
      if (map.police_station) captured.police_station = getSelectText(map.police_station) || getVal(map.police_station);
      if (map.post_office) captured.post_office = getVal(map.post_office);
      if (map.pin_code) captured.pin_code = getVal(map.pin_code);
      if (map.ward) captured.ward = getVal(map.ward);

      // Local body type & Gram Panchayat
      if (map.localbody_panchayat && isChecked(map.localbody_panchayat)) captured.localBodyType = 'Gram Panchayat';
      else if (map.localbody_mc && isChecked(map.localbody_mc)) captured.localBodyType = 'Municipal Corporation';
      else if (map.localbody_muni && isChecked(map.localbody_muni)) captured.localBodyType = 'Municipality';
      else if (map.localbody_town && isChecked(map.localbody_town)) captured.localBodyType = 'Town Panchayat';

      if (map.panchayat) {
        captured.panchayat = getSelectText(map.panchayat) || getVal(map.panchayat);
      }

      // Parents & Relations
      if (map.father_en) captured.father_en = getVal(map.father_en);
      if (map.father_hi) captured.father_hi = getVal(map.father_hi);
      if (map.mother_en) captured.mother_en = getVal(map.mother_en);
      if (map.mother_hi) captured.mother_hi = getVal(map.mother_hi);
      if (map.husband_en) captured.husband_en = getVal(map.husband_en);
      if (map.husband_hi) captured.husband_hi = getVal(map.husband_hi);

      // Contact
      if (map.mobile) captured.mobile = getVal(map.mobile);
      if (map.email) captured.email = getVal(map.email);

      // Caste & Identity
      if (map.religion) captured.religion = getVal(map.religion);
      if (map.category) captured.category = getSelectText(map.category) || getVal(map.category);
      if (map.caste) captured.caste = getSelectText(map.caste) || getVal(map.caste);
      if (map.sub_caste) captured.sub_caste = getSelectText(map.sub_caste) || getVal(map.sub_caste);
      if (map.caste_serial) captured.caste_serial = getVal(map.caste_serial);
      if (map.profession) captured.profession = getSelectText(map.profession) || getVal(map.profession);

      // Incomes
      const incomeVal = getVal(map.annual_income) || getVal(map.total_income) || getVal(map.family_income);
      if (incomeVal) {
        captured.total_income = incomeVal;
        captured.annual_income = incomeVal;
        captured.family_income = incomeVal;
      }
      if (map.income_govt) captured.income_govt = getVal(map.income_govt);
      if (map.income_salary) captured.income_salary = getVal(map.income_salary);
      if (map.income_business) captured.income_business = getVal(map.income_business);
      if (map.income_agriculture) captured.income_agriculture = getVal(map.income_agriculture);
      if (map.income_other) captured.income_other = getVal(map.income_other);
    }

    // 3. UNIVERSAL SCANNER FOR ALL DROPDOWNS & SELECT BOXES ON THE PAGE
    // Records every selected option so no dropdown data is ever lost
    captured.captured_dropdowns = {};
    document.querySelectorAll('select').forEach(sel => {
      if (sel.selectedIndex > 0) {
        const opt = sel.options[sel.selectedIndex];
        if (opt && opt.value && opt.value !== '0' && opt.value !== '-1') {
          const rawText = (opt.text || '').trim();
          if (!/^(select|--|चुनें)/i.test(rawText)) {
            const cleanText = rawText.split('/')[0].trim();
            const ident = (sel.name || sel.id || '').toLowerCase();
            const labelText = sel.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';

            captured.captured_dropdowns[sel.id || sel.name || ident] = {
              value: opt.value,
              text: cleanText,
              rawText: rawText
            };

            if (!captured.district && (ident.includes('dist') || labelText.includes('जिला') || labelText.includes('district'))) captured.district = cleanText;
            if (!captured.subdivision && (ident.includes('sub') || labelText.includes('अनुमंडल') || labelText.includes('subdivision'))) captured.subdivision = cleanText;
            if (!captured.block && (ident.includes('block') || labelText.includes('प्रखंड') || labelText.includes('block'))) captured.block = cleanText;
            if (!captured.police_station && (ident.includes('police') || labelText.includes('थाना') || labelText.includes('police station'))) captured.police_station = cleanText;
            if (!captured.category && (ident.includes('cat') || labelText.includes('वर्ग') || labelText.includes('category'))) captured.category = cleanText;
            if (!captured.caste && (ident.includes('caste') || labelText.includes('जाति') || labelText.includes('caste'))) captured.caste = cleanText;
            if (!captured.sub_caste && (ident.includes('subcaste') || labelText.includes('उप-जाति'))) captured.sub_caste = cleanText;
            if (!captured.profession && (ident.includes('prof') || labelText.includes('पेशा') || labelText.includes('profession'))) captured.profession = cleanText;
            if (!captured.salutation && (ident.includes('salut') || labelText.includes('अभिवादन'))) captured.salutation = cleanText;
            if (!captured.panchayat && (ident.includes('panchayat') || labelText.includes('ग्राम पंचायत') || labelText.includes('panchayat')) && !ident.includes('town') && !ident.includes('samiti')) {
              captured.panchayat = cleanText;
            }
          }
        }
      }
    });

    // 4. UNIVERSAL SCANNER FOR TEXT/TEL/EMAIL INPUTS
    document.querySelectorAll('input[type="text"], input[type="number"], input[type="tel"], input[type="email"]').forEach(inp => {
      const val = (inp.value || '').trim();
      if (val && !inp.id.includes('captcha') && !inp.name?.includes('captcha') && !inp.id.includes('token') && inp.id !== 'wordVerification') {
        const ident = (inp.name || inp.id || '').toLowerCase();
        const labelText = inp.closest('.form-group, tr, div')?.querySelector('label, th, td')?.innerText?.toLowerCase() || '';

        if (!captured.name_en && (ident.includes('applicant_name') || labelText.includes('applicant name') || (labelText.includes('नाम') && labelText.includes('english')))) {
          captured.name_en = val;
        }
        if (!captured.mobile && (ident.includes('mobile') || labelText.includes('मोबाइल') || labelText.includes('mobile'))) {
          captured.mobile = val;
        }
        if (!captured.email && (ident.includes('email') || labelText.includes('ई-मेल') || labelText.includes('email'))) {
          captured.email = val;
        }
        if (!captured.father_en && (ident.includes('father') || labelText.includes('पिता का नाम') || labelText.includes("father's name"))) {
          captured.father_en = val;
        }
        if (!captured.mother_en && (ident.includes('mother') || labelText.includes('माता का नाम') || labelText.includes("mother's name"))) {
          captured.mother_en = val;
        }
        if (!captured.pin_code && (ident.includes('pin') || labelText.includes('पिन') || labelText.includes('pin code'))) {
          captured.pin_code = val;
        }
        if (!captured.village && (ident.includes('village') || labelText.includes('ग्राम') || labelText.includes('village'))) {
          captured.village = val;
        }
        if (!captured.post_office && (ident.includes('post') || labelText.includes('डाकघर') || labelText.includes('post office'))) {
          captured.post_office = val;
        }
        if (!captured.ward && (ident.includes('ward') || labelText.includes('वार्ड') || labelText.includes('ward'))) {
          captured.ward = val;
        }
      }
    });

    // Auto-transliterate Hindi names if missing
    if (window.RTPSTransliterate) {
      if (captured.name_en && !captured.name_hi) captured.name_hi = window.RTPSTransliterate.toHindi(captured.name_en);
      if (captured.father_en && !captured.father_hi) captured.father_hi = window.RTPSTransliterate.toHindi(captured.father_en);
      if (captured.mother_en && !captured.mother_hi) captured.mother_hi = window.RTPSTransliterate.toHindi(captured.mother_en);
    }

    // Safety check: Don't capture a completely empty form
    const hasAnyIdentity = captured.name_en || captured.name_hi || captured.mobile || captured.father_en || captured.district || captured.panchayat || captured.village || Object.keys(captured.captured_dropdowns || {}).length > 0;
    if (!hasAnyIdentity) {
      return {
        success: false,
        message: '⚠️ Form appears empty! Please fill form fields before capturing.'
      };
    }

    // 5. SMART DEDUPLICATION & STORAGE (Update existing profile or create new)
    return new Promise((resolve) => {
      chrome.storage.local.get('profiles', (data) => {
        let profiles = data.profiles || [];
        let matchedProfile = null;
        let matchReason = '';

        // Match 1: Explicitly selected targetProfileId
        if (targetProfileId) {
          const found = profiles.find(p => p.id === targetProfileId);
          if (found) {
            matchedProfile = found;
            matchReason = 'selected profile';
          }
        }

        // Match 2: Mobile number match (10 digits)
        if (!matchedProfile && captured.mobile) {
          const cleanMobile = captured.mobile.replace(/\D/g, '').slice(-10);
          if (cleanMobile.length === 10) {
            const found = profiles.find(p => {
              if (!p.mobile) return false;
              return p.mobile.replace(/\D/g, '').slice(-10) === cleanMobile;
            });
            if (found) {
              matchedProfile = found;
              matchReason = `mobile match (${cleanMobile})`;
            }
          }
        }

        // Match 3: Applicant English Name (case-insensitive)
        if (!matchedProfile && captured.name_en) {
          const cleanName = captured.name_en.trim().toLowerCase();
          const found = profiles.find(p => (p.name_en || '').trim().toLowerCase() === cleanName);
          if (found) {
            matchedProfile = found;
            matchReason = `name match (${found.name_en})`;
          }
        }

        // Match 4: Applicant Hindi Name
        if (!matchedProfile && captured.name_hi) {
          const cleanNameHi = captured.name_hi.trim();
          const found = profiles.find(p => (p.name_hi || '').trim() === cleanNameHi);
          if (found) {
            matchedProfile = found;
            matchReason = `Hindi name match (${found.name_hi})`;
          }
        }

        if (matchedProfile) {
          // UPDATE EXISTING PROFILE (NO DUPLICATE)
          for (const [key, val] of Object.entries(captured)) {
            if (val !== undefined && val !== null && String(val).trim() !== '') {
              if (key === 'captured_dropdowns' && typeof val === 'object') {
                matchedProfile.captured_dropdowns = Object.assign(matchedProfile.captured_dropdowns || {}, val);
              } else {
                matchedProfile[key] = val;
              }
            }
          }
          matchedProfile.updatedAt = new Date().toISOString();

          chrome.storage.local.set({ profiles }, () => {
            resolve({
              success: true,
              status: 'updated',
              profile: matchedProfile,
              message: `✅ Updated profile: "${matchedProfile.name_en || 'Profile'}" (${matchReason})`
            });
          });
        } else {
          // CREATE NEW PROFILE
          const newProfile = Object.assign({}, captured, {
            id: 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
          profiles.push(newProfile);

          chrome.storage.local.set({ profiles }, () => {
            resolve({
              success: true,
              status: 'created',
              profile: newProfile,
              message: `✅ New profile created: "${newProfile.name_en || 'Profile'}"`
            });
          });
        }
      });
    });
  }

  return {
    FIELD_MAP: FIELD_MAP,
    fillForm: fillForm,
    captureForm: captureForm
  };
})();
