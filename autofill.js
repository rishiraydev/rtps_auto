// ============================================================
// Bihar RTPS AutoFill — AutoFill Engine
// ============================================================

window.RTPSAutoFill = (function() {
  const FIELD_MAP = {
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
      state: '17295',
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
      // present address
      present_address_same: '91900_1',
      present_state: '91901',
      present_district: '91902',
      present_subdivision: '91903',
      present_block: '91904',
    },
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
      agree: '74568',
    },
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
      husband_en: '64913',
      husband_hi: '64914',
      mobile: '17180',
      email: '17332',
      state: '17181',
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
      caste_serial: '17197',
      sub_caste: '17188',
      agree: '74569',
      // present address
      present_address_same: '91902_1',
      present_state: '91903',
      present_district: '91904',
      present_subdivision: '91905',
      present_block: '91906',
    },
    ncl: {
      format: '93029',
      gender_male: '60088_1',
      gender_female: '60088_2',
      gender_third: '60088_3',
      salutation: '60093',
      name_en: '60091',
      name_hi: '60094',
      dob: '60068',
      aadhaar: '60062_txt',
      father_en: '60083',
      father_hi: '60084',
      mother_en: '60085',
      mother_hi: '60086',
      husband_en: '60087',
      husband_hi: '60067',
      mobile: '60063',
      email: '60058',
      // Permanent Address
      district: '60070',
      subdivision: '60071',
      block: '60072',
      village: '60097',
      ward: '60073',
      post_office: '60098',
      pin_code: '60100',
      circle_no: '60099',
      holding_no: '60103',
      localbody_panchayat: '91079_1',
      localbody_mc: '91079_2',
      localbody_muni: '91079_3',
      localbody_town: '91079_4',
      police_station: '91081',
      // Present / Temporary Address
      present_address_same: '60101_1',
      present_state: '60102',
      present_district: '60077',
      present_subdivision: '60076',
      present_block: '60060',
      present_village: '60081',
      present_ward: '60074',
      present_post_office: '60064',
      present_pin_code: '60056',
      present_circle_no: '60104',
      present_holding_no: '60090',
      present_police_station: '91082',
      present_localbody_panchayat: '91080_1',
      present_localbody_mc: '91080_2',
      present_localbody_muni: '91080_3',
      present_localbody_town: '91080_4',
      // Caste & Category
      religion: '60105',
      category: '60057',
      caste: '60106',
      sub_caste: '60107',
      central_caste_serial: '60065',
      profession: '60082',
      // Income
      income_salary: '60336',
      income_business: '60340',
      income_pension: '91100',
      income_agriculture: '91103',
      // Tax & Wealth
      tax_payer_yes: '60345_1',
      tax_payer_no: '60345_2',
      wealth_tax_yes: '91102_1',
      wealth_tax_no: '91102_2',
      // Agree
      agree: '60109',
    },
  };

  // ── Helper: Set value on input and trigger events ───────────
  function setInputValue(elementOrId, value) {
    let el;
    if (typeof elementOrId === 'string') {
      el = document.getElementById(elementOrId);
    } else {
      el = elementOrId;
    }

    if (!el || value === undefined || value === null || value === '') return false;

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype, 'value'
    )?.set;
    const nativeTextareaValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype, 'value'
    )?.set;

    if (el.tagName === 'TEXTAREA' && nativeTextareaValueSetter) {
      nativeTextareaValueSetter.call(el, value);
    } else if (nativeInputValueSetter) {
      nativeInputValueSetter.call(el, value);
    } else {
      el.value = value;
    }

    // Trigger standard events
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new Event('blur', { bubbles: true }));
    el.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

    // Inject script to trigger jQuery change for ServicePlus DWR compatibility
    if (el.id) {
      const script = document.createElement('script');
      script.textContent = `
        if (typeof jQuery !== 'undefined' && window.$) {
          $("#${el.id}").trigger('change');
          $("#${el.id}").trigger('blur');
        }
      `;
      document.documentElement.appendChild(script);
      script.remove();
    }

    return true;
  }

  // ── Helper: Set dropdown value and trigger cascade ──────────
  function setDropdownValue(elementOrId, value) {
    return new Promise((resolve) => {
      let el;
      if (typeof elementOrId === 'string') {
        el = document.getElementById(elementOrId);
      } else {
        el = elementOrId;
      }

      if (!el || !value) { resolve(false); return; }

      // For SELECT elements
      if (el.tagName === 'SELECT') {
        // Find option by value or text
        let found = false;
        for (const opt of el.options) {
          if (opt.value === value || opt.value === String(value) ||
            opt.text.trim().toLowerCase() === String(value).toLowerCase() ||
            opt.text.trim().includes(value)) {
            el.value = opt.value;
            found = true;
            break;
          }
        }

        if (!found) {
          // Try partial matching
          for (const opt of el.options) {
            if (opt.text.toLowerCase().includes(String(value).toLowerCase())) {
              el.value = opt.value;
              found = true;
              break;
            }
          }
        }

        if (found) {
          el.dispatchEvent(new Event('change', { bubbles: true }));
          el.dispatchEvent(new Event('input', { bubbles: true }));

          if (el.id) {
            const script = document.createElement('script');
            script.textContent = `
              if (typeof jQuery !== 'undefined' && window.$) {
                var elem = $("#${el.id}");
                elem.val("${el.value}").trigger('change');
              }
            `;
            document.documentElement.appendChild(script);
            script.remove();
          }
        }
        resolve(found);
      } else {
        // For regular inputs
        setInputValue(el, value);
        resolve(true);
      }
    });
  }

  // ── Helper: Click a radio button ────────────────────────────
  function clickRadio(id) {
    const el = document.getElementById(id);
    if (el) {
      el.checked = true;
      el.click();
      el.dispatchEvent(new Event('change', { bubbles: true }));
      el.dispatchEvent(new Event('click', { bubbles: true }));
      return true;
    }
    return false;
  }

  // ── Helper: Check a checkbox ────────────────────────────────
  function checkCheckbox(id) {
    const el = document.getElementById(id);
    if (el && !el.checked) {
      el.checked = true;
      el.click();
      el.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    return false;
  }

  // ── Helper: Small delay for dynamic dropdown loading ────────
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ── Helper: Wait for dropdown to populate then select ───────
  async function waitAndSelectDropdown(elementOrId, value, maxWait = 5000, labelText = null) {
    let el;
    if (typeof elementOrId === 'string') {
      el = document.getElementById(elementOrId);
    } else {
      el = elementOrId;
    }
    if (!el && labelText) {
      el = findFieldByLabel(labelText, false);
    }
    if (!el || !value) return false;

    const startTime = Date.now();
    while (Date.now() - startTime < maxWait) {
      if (el.options && el.options.length > 1) {
        const result = await setDropdownValue(el, value);
        if (result) return true;
      }
      await delay(300);
    }
    // Final attempt
    return setDropdownValue(el, value);
  }

  // ── Alternative field finder by label text ──────────────────
  function findFieldByLabel(labelText, restrictToText = false) {
    const labels = document.querySelectorAll('label, td, th, span');
    for (const label of labels) {
      if (label.textContent.trim().toLowerCase().includes(labelText.toLowerCase())) {
        // Check for 'for' attribute
        if (label.htmlFor) {
          const el = document.getElementById(label.htmlFor);
          if (el && (!restrictToText || el.tagName !== 'SELECT')) return el;
        }
        // Check sibling/child inputs
        const parent = label.closest('tr') || label.closest('td') || label.parentElement;
        const selector = restrictToText ? 'input[type="text"], input:not([type]), textarea' : 'input, select, textarea';
        if (parent) {
          const input = parent.querySelector(selector);
          if (input) return input;
          // Check next sibling
          const nextTd = label.closest('td')?.nextElementSibling;
          if (nextTd) {
            const nextInput = nextTd.querySelector(selector);
            if (nextInput) return nextInput;
          }
        }
      }
    }
    return null;
  }

  // ── Smart field setter (tries ID first, then label-based) ───
  function smartSetValue(fieldId, value, labelText) {
    if (!value && value !== 0) return false;
    // Try by ID first
    const byId = setInputValue(fieldId, value);
    if (byId) return true;
    // Fallback: find by label text
    if (labelText) {
      const el = findFieldByLabel(labelText);
      if (el) {
        setInputValue(el, value);
        return true;
      }
    }
    return false;
  }

  // ── Smart field setter specifically for text inputs ─────────
  function smartSetTextValue(fieldId, value, labelText) {
    if (!value && value !== 0) return false;
    let el = document.getElementById(fieldId);

    // If element exists by ID but is a SELECT, ignore it
    if (el && el.tagName === 'SELECT') {
      el = null;
    }

    // Fallback: find by label text, restricted to text fields
    if (!el && labelText) {
      el = findFieldByLabel(labelText, true);
    }

    if (el && el.tagName !== 'SELECT') {
      setInputValue(el, value);
      return true;
    }
    return false;
  }

  // ── MAIN FILL FUNCTION ──────────────────────────────────────
  async function fillForm(profile, formType) {
    if (!profile || !formType) return { success: false, message: 'No profile or form type' };

    const map = FIELD_MAP[formType];
    if (!map) return { success: false, message: 'Unknown form type: ' + formType };

    let filledCount = 0;
    const errors = [];

    try {
      // ── 1. Gender ───────────────────────────────────────────
      if (profile.gender) {
        const g = profile.gender.toLowerCase();
        let genderId;
        if (g === 'male' || g === 'पुरुष') genderId = map.gender_male;
        else if (g === 'female' || g === 'स्त्री' || g === 'महिला') genderId = map.gender_female;
        else genderId = map.gender_third;
        if (clickRadio(genderId)) filledCount++;
      }

      await delay(300);

      // ── 2. Salutation ───────────────────────────────────────
      if (profile.salutation) {
        if (await setDropdownValue(map.salutation, profile.salutation)) filledCount++;
      }

      await delay(200);

      // ── 3. Name (English) ───────────────────────────────────
      if (profile.name_en) {
        if (smartSetValue(map.name_en, profile.name_en, 'Name of Applicant')) filledCount++;
      }

      // ── 4. Name (Hindi) — auto-transliterate if not provided
      if (profile.name_hi) {
        smartSetValue(map.name_hi, profile.name_hi);
      } else if (profile.name_en && profile.autoTransliterate !== false) {
        const hindiName = transliterateToHindi(profile.name_en);
        smartSetValue(map.name_hi, hindiName);
      }

      // ── 5. Father's Name ────────────────────────────────────
      if (profile.father_en) {
        if (smartSetValue(map.father_en, profile.father_en, "Name of Father")) filledCount++;
        // Hindi
        if (profile.father_hi) {
          smartSetValue(map.father_hi, profile.father_hi);
        } else if (profile.autoTransliterate !== false) {
          smartSetValue(map.father_hi, transliterateToHindi(profile.father_en));
        }
      }

      // ── 6. Mother's Name ────────────────────────────────────
      if (profile.mother_en) {
        if (smartSetValue(map.mother_en, profile.mother_en, "Name of Mother")) filledCount++;
        if (profile.mother_hi) {
          smartSetValue(map.mother_hi, profile.mother_hi);
        } else if (profile.autoTransliterate !== false) {
          smartSetValue(map.mother_hi, transliterateToHindi(profile.mother_en));
        }
      }

      // ── 7. Husband's Name ───────────────────────────────────
      if (profile.husband_en) {
        smartSetValue(map.husband_en, profile.husband_en, "Name of Husband");
        if (profile.husband_hi) {
          smartSetValue(map.husband_hi, profile.husband_hi);
        } else if (profile.autoTransliterate !== false) {
          smartSetValue(map.husband_hi, transliterateToHindi(profile.husband_en));
        }
      }

      // ── 8. Mobile & Email ───────────────────────────────────
      if (profile.mobile) {
        if (smartSetValue(map.mobile, profile.mobile, 'Mobile')) filledCount++;
      }
      if (profile.email) {
        if (smartSetValue(map.email, profile.email, 'Email')) filledCount++;
      }

      // ── 9. Aadhaar Number ───────────────────────────────────
      if (profile.aadhaar) {
        if (smartSetValue(map.aadhaar, profile.aadhaar, 'Aadhaar')) filledCount++;
      }

      // ── 10. Address — cascading dropdowns ───────────────────
      // State
      if (map.state) {
        const stateVal = profile.state || 'BIHAR';
        let stateEl = document.getElementById(map.state);
        if (!stateEl) stateEl = findFieldByLabel('State', false);
        if (stateEl) {
          await setDropdownValue(stateEl, stateVal);
          filledCount++;
          await delay(1500); // Wait for districts to load
        }
      }

      // District
      if (profile.district) {
        if (await waitAndSelectDropdown(map.district, profile.district, 5000, 'District')) {
          filledCount++;
          await delay(1500); // Wait for sub-divisions to load
        }
      }

      // Sub-Division
      if (profile.subdivision) {
        if (await waitAndSelectDropdown(map.subdivision, profile.subdivision, 5000, 'Sub-Division')) {
          filledCount++;
          await delay(1000);
        }
      }

      // Block
      if (profile.block) {
        if (await waitAndSelectDropdown(map.block, profile.block, 5000, 'Block')) {
          filledCount++;
          await delay(800);
        }
      }

      // ── 11. Type of Local Body ──────────────────────────────
      if (profile.localBodyType) {
        const lbt = profile.localBodyType.toLowerCase();
        let lbtId;
        if (lbt.includes('panchayat') || lbt.includes('ग्राम')) lbtId = map.localbody_panchayat;
        else if (lbt.includes('municipal corp') || lbt.includes('नगर निगम')) lbtId = map.localbody_mc;
        else if (lbt.includes('municipality') || lbt.includes('नगर') || lbt.includes('nagar')) lbtId = map.localbody_muni;
        else if (lbt.includes('town') || lbt.includes('नगर पंचायत')) lbtId = map.localbody_town;
        else lbtId = map.localbody_panchayat; // default

        if (clickRadio(lbtId)) filledCount++;
        await delay(500);
      }

      // ── 11.5. Panchayat ─────────────────────────────────────
      if (profile.panchayat) {
        if (await waitAndSelectDropdown(map.panchayat, profile.panchayat, 4000, 'Village Panchayat')) {
          filledCount++;
          await delay(300);
        }
      }

      // ── 12. Ward Number ─────────────────────────────────────
      if (profile.ward) {
        if (smartSetTextValue(map.ward, profile.ward, 'Ward')) filledCount++;
      }

      // ── 13. Village / Town ──────────────────────────────────
      if (profile.village) {
        if (smartSetTextValue(map.village, profile.village, 'Village')) filledCount++;
      }

      // ── 14. Police Station ──────────────────────────────────
      if (profile.policeStation) {
        let psEl = document.getElementById(map.police_station);
        if (!psEl) psEl = findFieldByLabel('Police Station', false) || findFieldByLabel('थाना', false);
        if (psEl) {
          if (psEl.tagName === 'SELECT') {
            await waitAndSelectDropdown(psEl, profile.policeStation, 3000, 'Police Station');
          } else {
            setInputValue(psEl, profile.policeStation);
          }
          filledCount++;
        }
      }

      // ── 15. Post Office ─────────────────────────────────────
      if (profile.postOffice) {
        if (smartSetTextValue(map.post_office, profile.postOffice, 'Post Office')) filledCount++;
      }

      // ── 16. Pin Code ────────────────────────────────────────
      if (profile.pinCode) {
        if (smartSetTextValue(map.pin_code, profile.pinCode, 'Pin Code')) filledCount++;
      }

      // ── 17. FORM-SPECIFIC FIELDS ────────────────────────────

      // === RESIDENCE FORM ===
      if (formType === 'residence') {
        // Type of Residence
        if (profile.residenceType) {
          const rt = profile.residenceType.toLowerCase();
          if (rt.includes('permanent') || rt.includes('स्थाई')) {
            clickRadio(map.residence_permanent);
          } else {
            clickRadio(map.residence_temporary);
          }
          filledCount++;
        }

        // Purpose of Application
        if (profile.purposeResidence) {
          smartSetValue(map.purpose, profile.purposeResidence, 'Purpose');
          filledCount++;
        }

        // Present Address — same as permanent
        if (profile.presentAddressSame) {
          if (map.present_address_same) {
            clickRadio(map.present_address_same);
            await delay(500);
          }
        }
      }

      // === INCOME FORM ===
      if (formType === 'income') {
        // Profession
        if (profile.profession) {
          await setDropdownValue(map.profession, profile.profession);
          filledCount++;
          await delay(300);
        }

        // Purpose of Application
        if (profile.purposeIncome) {
          smartSetValue(map.purpose_of_application, profile.purposeIncome, 'Purpose of Application');
          filledCount++;
        }

        // Income Sources
        if (profile.incomeGovt || profile.incomeGovt === 0) {
          smartSetValue(map.income_govt, String(profile.incomeGovt), 'Income from Govt');
          filledCount++;
        }
        if (profile.incomeAgriculture || profile.incomeAgriculture === 0) {
          smartSetValue(map.income_agriculture, String(profile.incomeAgriculture), 'Income from Agriculture');
          filledCount++;
        }
        if (profile.incomeBusiness || profile.incomeBusiness === 0) {
          smartSetValue(map.income_business, String(profile.incomeBusiness), 'Income from Business');
          filledCount++;
        }
        if (profile.incomeOther || profile.incomeOther === 0) {
          smartSetValue(map.income_other, String(profile.incomeOther), 'Income from Other Sources');
          filledCount++;
        }
        // Total Income (may auto-calculate)
        if (profile.totalIncome) {
          smartSetValue(map.total_income, String(profile.totalIncome), 'Total Income');
          filledCount++;
        }
      }

      // === CASTE FORM ===
      if (formType === 'caste') {
        // Profession
        if (profile.profession) {
          await setDropdownValue(map.profession, profile.profession);
          filledCount++;
          await delay(300);
        }

        // Category (BC/EBC/SC/ST)
        if (profile.category) {
          await setDropdownValue(map.category, profile.category);
          filledCount++;
          await delay(1000); // wait for caste list to load
        }

        // Caste
        if (profile.caste) {
          if (await waitAndSelectDropdown(map.caste, profile.caste, 5000)) {
            filledCount++;
            await delay(500);
          }
        }

        // Sub-Caste
        if (profile.subCaste) {
          const subCasteEl = document.getElementById(map.sub_caste);
          if (subCasteEl) {
            if (subCasteEl.tagName === 'SELECT') {
              await waitAndSelectDropdown(map.sub_caste, profile.subCaste, 3000);
            } else {
              setInputValue(subCasteEl, profile.subCaste);
            }
            filledCount++;
          }
        }

        // Present Address — same as permanent
        if (profile.presentAddressSame && map.present_address_same) {
          clickRadio(map.present_address_same);
          await delay(500);
        }
      }

      // === NCL (NON-CREAMY LAYER) FORM ===
      if (formType === 'ncl') {
        // Language format (English / Hindi)
        if (map.format) {
          const formatEl = document.getElementById(map.format);
          if (formatEl) {
            await setDropdownValue(formatEl, 'Hindi');
          }
        }

        // Date of Birth
        if (profile.dob) {
          smartSetValue(map.dob, profile.dob, 'Date of Birth');
          filledCount++;
        }

        // Religion
        if (map.religion) {
          const relVal = profile.religion || 'Hindu';
          await setDropdownValue(map.religion, relVal);
          filledCount++;
          await delay(200);
        }

        // Category (BC / EBC / पिछड़ा वर्ग / अत्यंत पिछड़ा वर्ग)
        if (profile.category) {
          await setDropdownValue(map.category, profile.category);
          filledCount++;
          await delay(1200); // wait for caste list to load
        }

        // Caste
        if (profile.caste) {
          if (await waitAndSelectDropdown(map.caste, profile.caste, 5000)) {
            filledCount++;
            await delay(500);
          }
        }

        // Sub-Caste
        if (profile.subCaste) {
          const subCasteEl = document.getElementById(map.sub_caste);
          if (subCasteEl) {
            if (subCasteEl.tagName === 'SELECT') {
              await waitAndSelectDropdown(map.sub_caste, profile.subCaste, 3000);
            } else {
              setInputValue(subCasteEl, profile.subCaste);
            }
            filledCount++;
          }
        }

        // Central Caste Serial No.
        if (profile.centralCasteSerial) {
          smartSetValue(map.central_caste_serial, profile.centralCasteSerial);
        }

        // Profession / Occupation
        if (profile.profession) {
          await setDropdownValue(map.profession, profile.profession);
          filledCount++;
          await delay(300);
        }

        // Present Address — same as permanent (check checkbox)
        if (profile.presentAddressSame !== false && map.present_address_same) {
          checkCheckbox(map.present_address_same);
          filledCount++;
          await delay(500);
        }

        // Income Details
        if (profile.incomeGovt || profile.incomeGovt === 0) {
          smartSetValue(map.income_salary, String(profile.incomeGovt), 'नौकरी से आय');
          filledCount++;
        }
        if (profile.incomeBusiness || profile.incomeBusiness === 0) {
          smartSetValue(map.income_business, String(profile.incomeBusiness), 'व्यवसाय से आय');
          filledCount++;
        }
        if (profile.incomeOther || profile.incomeOther === 0) {
          smartSetValue(map.income_pension, String(profile.incomeOther), 'पेंशन से आय');
          filledCount++;
        }
        if (profile.incomeAgriculture || profile.incomeAgriculture === 0) {
          smartSetValue(map.income_agriculture, String(profile.incomeAgriculture), 'कृषि से आय');
          filledCount++;
        }

        // Tax Payee Status
        if (profile.taxPayer) {
          clickRadio(map.tax_payer_yes);
        } else {
          clickRadio(map.tax_payer_no); // Default: No
        }
        filledCount++;

        // Wealth Tax Status
        if (profile.wealthTaxPayer) {
          clickRadio(map.wealth_tax_yes);
        } else {
          clickRadio(map.wealth_tax_no); // Default: No
        }
        filledCount++;

        // Auto check NCL mandatory enclosure checkboxes (Form-VIII, Residence, Caste, Income)
        const nclEnclosures = document.querySelectorAll('input[type="checkbox"][id^="60054_"], input[type="checkbox"][name^="60054_"]');
        nclEnclosures.forEach(cb => {
          if (!cb.checked) {
            cb.checked = true;
            cb.click();
            cb.dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
          }
        });
      }

      // ── 18. Document Selection Logic ─────────────────────────
      // Automatically check default document checkboxes to minimize manual tasks
      const allCheckboxes = document.querySelectorAll(
        'input[type="checkbox"][id*="self_declaration"], ' +
        'input[type="checkbox"][name*="declaration"], ' +
        '.declaration input[type="checkbox"]'
      );
      allCheckboxes.forEach(cb => {
        if (!cb.checked) {
          cb.checked = true;
          cb.click();
          cb.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });

      // Select appropriate evidence docs (e.g. Form-II, Khatiyan)
      // Usually the first radio/checkbox in document evidence groups is safest
      const docElements = document.querySelectorAll('input[name="41546"], input[name="93963"], input[name="41566"]');
      if (docElements.length > 0) {
        // Find group by name, check first item if none checked
        const names = new Set([...docElements].map(el => el.name));
        for (const name of names) {
          const group = document.querySelectorAll(`input[name="${name}"]`);
          const isChecked = Array.from(group).some(r => r.checked);
          if (!isChecked && group.length > 0) {
            group[0].checked = true;
            group[0].click();
            group[0].dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
          }
        }
      }

      // ── 19. I Agree Checkbox ────────────────────────────────
      if (map.agree) {
        checkCheckbox(map.agree);
        filledCount++;
      }

      // ── 20. Focus on Captcha input for manual entry ─────────
      await delay(500);
      const captchaInput = document.querySelector(
        'input[name*="captcha"], input[name*="CAPTCHA"], ' +
        'input[id*="captcha"], input[placeholder*="captcha"], ' +
        'input[placeholder*="characters"], input[name*="wordVerification"]'
      );
      if (captchaInput) {
        captchaInput.focus();
        captchaInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      return {
        success: true,
        message: `✅ Filled ${filledCount} fields on ${formType} form.${captchaInput ? ' Captcha focused for manual entry.' : ''}`,
        filledCount,
      };

    } catch (err) {
      console.error('[RTPS AutoFill] Error:', err);
      return { success: false, message: '❌ Error: ' + err.message };
    }
  }

  return {
    FIELD_MAP: FIELD_MAP,
    fillForm: fillForm
  };
})();
