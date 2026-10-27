// ============================================================
// Bihar RTPS AutoFill — English → Hindi Transliteration Engine
// Basic phonetic mapping for common Indian name patterns
// ============================================================

const TRANSLITERATE_MAP = {
  // Vowels
  'aa': 'आ', 'a': 'अ', 'ee': 'ई', 'i': 'इ', 'oo': 'ऊ', 'u': 'उ',
  'ai': 'ऐ', 'ei': 'ऐ', 'e': 'ए', 'au': 'औ', 'ou': 'औ', 'o': 'ओ',
  'ri': 'ऋ',
  // Consonants — special combos first (longer match wins)
  'ksh': 'क्ष', 'ks': 'क्ष', 'gya': 'ज्ञा', 'gy': 'ज्ञ',
  'shri': 'श्री', 'shr': 'श्र', 'sh': 'श',
  'chh': 'छ', 'ch': 'च',
  'th': 'थ', 'dh': 'ध', 'ph': 'फ', 'bh': 'भ',
  'kh': 'ख', 'gh': 'घ', 'jh': 'झ',
  'ng': 'ङ', 'nk': 'ङ्क',
  'tr': 'त्र', 'pr': 'प्र', 'kr': 'क्र', 'gr': 'ग्र', 'dr': 'द्र', 'br': 'ब्र',
  'k': 'क', 'g': 'ग', 'c': 'क',
  'j': 'ज', 't': 'त', 'd': 'द',
  'n': 'न', 'p': 'प', 'b': 'ब',
  'm': 'म', 'y': 'य', 'r': 'र',
  'l': 'ल', 'v': 'व', 'w': 'व',
  's': 'स', 'h': 'ह', 'f': 'फ',
  'z': 'ज़', 'q': 'क़', 'x': 'क्स',
};

// Matra (vowel sign) mapping — used after consonants
const MATRA_MAP = {
  'aa': 'ा', 'a': '', 'ee': 'ी', 'i': 'ि', 'oo': 'ू', 'u': 'ु',
  'ai': 'ै', 'ei': 'ै', 'e': 'े', 'au': 'ौ', 'ou': 'ौ', 'o': 'ो',
  'ri': 'ृ',
};

// Common names dictionary for accurate translation
const NAME_DICTIONARY = {
  // Male names
  'kumar': 'कुमार', 'raj': 'राज', 'ram': 'राम', 'shyam': 'श्याम',
  'mohan': 'मोहन', 'sohan': 'सोहन', 'ravi': 'रवि', 'suresh': 'सुरेश',
  'mahesh': 'महेश', 'rajesh': 'राजेश', 'dinesh': 'दिनेश', 'mukesh': 'मुकेश',
  'ganesh': 'गणेश', 'naresh': 'नरेश', 'ramesh': 'रामेश', 'amit': 'अमित',
  'ankit': 'अंकित', 'rohit': 'रोहित', 'mohit': 'मोहित', 'sumit': 'सुमित',
  'rishi': 'ऋषि', 'vivek': 'विवेक', 'sanjay': 'संजय', 'vijay': 'विजय',
  'ajay': 'अजय', 'manoj': 'मनोज', 'arun': 'अरुण', 'varun': 'वरुण',
  'pankaj': 'पंकज', 'deepak': 'दीपक', 'ashok': 'अशोक', 'vinod': 'विनोद',
  'pramod': 'प्रमोद', 'santosh': 'संतोष', 'sunil': 'सुनील', 'anil': 'अनिल',
  'ranjan': 'रंजन', 'niranjan': 'निरंजन', 'narayan': 'नारायण', 'hari': 'हरि',
  'krishna': 'कृष्णा', 'gopal': 'गोपाल', 'lal': 'लाल', 'prasad': 'प्रसाद',
  'nand': 'नंद', 'chandra': 'चंद्र', 'dev': 'देव', 'devi': 'देवी',
  'shiv': 'शिव', 'shankar': 'शंकर', 'prakash': 'प्रकाश', 'kishore': 'किशोर',
  'babu': 'बाबू', 'lalu': 'लालू', 'jha': 'झा', 'mishra': 'मिश्रा',
  'singh': 'सिंह', 'pandey': 'पांडेय', 'dubey': 'दुबे', 'tiwari': 'तिवारी',
  'yadav': 'यादव', 'sharma': 'शर्मा', 'verma': 'वर्मा', 'gupta': 'गुप्ता',
  'das': 'दास', 'mandal': 'मंडल', 'thakur': 'ठाकुर', 'chauhan': 'चौहान',
  'patel': 'पटेल', 'khan': 'खान', 'ansari': 'अंसारी', 'ali': 'अली',
  'mohammad': 'मोहम्मद', 'ahmed': 'अहमद', 'hussain': 'हुसैन', 'akhtar': 'अख्तर',
  'nishad': 'निषाद', 'mallah': 'मल्लाह', 'sahni': 'सहनी', 'paswan': 'पासवान',
  'ravidas': 'रविदास', 'manjhi': 'मांझी', 'musahar': 'मुसहर',
  'mahto': 'महतो', 'sah': 'साह', 'shah': 'शाह', 'keshri': 'केशरी',
  'choudhary': 'चौधरी', 'chaudhary': 'चौधरी',

  // Female names
  'sunita': 'सुनीता', 'anita': 'अनीता', 'geeta': 'गीता', 'seeta': 'सीता',
  'rekha': 'रेखा', 'meena': 'मीना', 'neha': 'नेहा', 'pooja': 'पूजा',
  'priya': 'प्रिया', 'rani': 'रानी', 'savitri': 'सावित्री', 'lakshmi': 'लक्ष्मी',
  'parvati': 'पार्वती', 'saraswati': 'सरस्वती', 'durga': 'दुर्गा',
  'sona': 'सोना', 'mala': 'माला', 'kamla': 'कमला', 'pushpa': 'पुष्पा',
  'radha': 'राधा', 'sita': 'सीता', 'rita': 'रीता', 'babita': 'बबीता',
  'kavita': 'कविता', 'mamta': 'ममता', 'saroj': 'सरोज', 'usha': 'उषा',
  'nisha': 'निशा', 'renu': 'रेनु', 'kiran': 'किरण', 'ruby': 'रूबी',

  // Titles & common words
  'shri': 'श्री', 'smt': 'श्रीमती', 'mr': 'श्री', 'mrs': 'श्रीमती',
  'md': 'मो', 'mo': 'मो',

  // Common Bihar place names
  'patna': 'पटना', 'gaya': 'गया', 'bhagalpur': 'भागलपुर',
  'muzaffarpur': 'मुजफ्फरपुर', 'darbhanga': 'दरभंगा', 'purnia': 'पूर्णिया',
  'begusarai': 'बेगूसराय', 'munger': 'मुंगेर', 'samastipur': 'समस्तीपुर',
  'nalanda': 'नालंदा', 'vaishali': 'वैशाली', 'siwan': 'सिवान',
  'gopalganj': 'गोपालगंज', 'saran': 'सारण', 'chapra': 'छपरा',
  'madhubani': 'मधुबनी', 'sitamarhi': 'सीतामढ़ी', 'araria': 'अररिया',
  'kishanganj': 'किशनगंज', 'katihar': 'कटिहार', 'saharsa': 'सहरसा',
  'madhepura': 'मधेपुरा', 'supaul': 'सुपौल', 'banka': 'बांका',
  'jamui': 'जमुई', 'lakhisarai': 'लखीसराय', 'sheikhpura': 'शेखपुरा',
  'nawada': 'नवादा', 'aurangabad': 'औरंगाबाद', 'jehanabad': 'जहानाबाद',
  'arwal': 'अरवल', 'rohtas': 'रोहतास', 'buxar': 'बक्सर',
  'bhojpur': 'भोजपुर', 'kaimur': 'कैमूर', 'bhabua': 'भभुआ',
  'east': 'पूर्वी', 'west': 'पश्चिमी',
  'champaran': 'चंपारण', 'bihar': 'बिहार',
};

/**
 * Transliterate an English string to Hindi (Devanagari)
 * Uses dictionary lookup first, then falls back to phonetic mapping
 * @param {string} text - English text to transliterate
 * @returns {string} Hindi transliterated text
 */
function transliterateToHindi(text) {
  if (!text || !text.trim()) return '';

  const words = text.trim().split(/\s+/);
  const hindiWords = words.map(word => {
    const lower = word.toLowerCase();

    // Dictionary lookup first
    if (NAME_DICTIONARY[lower]) {
      return NAME_DICTIONARY[lower];
    }

    // Phonetic transliteration fallback
    return phoneticTransliterate(lower);
  });

  return hindiWords.join(' ');
}

/**
 * Phonetic transliteration engine
 * Converts English text to Hindi character by character using phonetic rules
 */
function phoneticTransliterate(text) {
  let result = '';
  let i = 0;
  let lastWasConsonant = false;

  while (i < text.length) {
    let matched = false;

    // Try matching longest patterns first (3 chars, 2 chars, 1 char)
    for (let len = 3; len >= 1; len--) {
      const chunk = text.substring(i, i + len).toLowerCase();

      // Check if it's a vowel
      if (MATRA_MAP[chunk] !== undefined) {
        if (lastWasConsonant) {
          // Add matra (vowel sign) after consonant
          result += MATRA_MAP[chunk];
        } else {
          // Standalone vowel
          const vowelMap = {
            'aa': 'आ', 'a': 'अ', 'ee': 'ई', 'i': 'इ',
            'oo': 'ऊ', 'u': 'उ', 'ai': 'ऐ', 'ei': 'ऐ',
            'e': 'ए', 'au': 'औ', 'ou': 'औ', 'o': 'ओ', 'ri': 'ऋ'
          };
          result += vowelMap[chunk] || chunk;
        }
        lastWasConsonant = false;
        i += len;
        matched = true;
        break;
      }

      // Check if it's a consonant
      if (TRANSLITERATE_MAP[chunk]) {
        if (lastWasConsonant) {
          // Add halant before the new consonant (creates conjunct)
          result += '्';
        }
        result += TRANSLITERATE_MAP[chunk];
        lastWasConsonant = true;
        i += len;
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Pass through unrecognized characters
      if (lastWasConsonant) {
        result += '्';
        lastWasConsonant = false;
      }
      result += text[i];
      i++;
    }
  }

  // If the last char was a consonant, add implicit 'a' matra (nothing in Hindi)
  // In Hindi, consonants have an inherent 'a' sound, so no halant is needed at the end
  // unless it's a word-final consonant in a name context

  return result;
}

// Make available globally for the content script
if (typeof window !== 'undefined') {
  window.transliterateToHindi = transliterateToHindi;
}
