# Bihar RTPS AutoFill — Chrome Extension

A Google Chrome extension designed to streamline and automate form filling on the Bihar RTPS (ServicePlus) portal (`serviceonline.bihar.gov.in`).

## 🚀 Features

- **Supported Certificates**:
  - 🏠 **Residence Certificate** (निवास प्रमाण पत्र)
  - 💰 **Income Certificate** (आय प्रमाण पत्र)
  - 📋 **Caste Certificate** (जाति प्रमाण पत्र)
  - 📜 **Central Non-Creamy Layer (NCL) Certificate** (ओ. बी. सी. क्रीमीलेयर रहित प्रमाण पत्र - भारत सरकार के प्रयोजनार्थ)
- **Profile Management**: Save and manage multiple applicant profiles.
- **Cascading Dropdown Automation**: Automatically triggers cascading updates (State → District → Sub-Division → Block → Police Station / Panchayat).
- **Auto English-to-Hindi Transliteration**: Automatically transliterates applicant, father, and mother names into Hindi.
- **Smart Form Capture**: 1-click capture from an already filled form to save as a new profile.
- **Floating Widget**: On-page quick access floating widget on the ServicePlus portal.
- **Import / Export**: Backup and restore profiles via JSON files.

## 📦 Installation

1. Clone or download this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right corner).
4. Click **Load unpacked** and select this directory (`rtps_auto`).
5. Navigate to `https://serviceonline.bihar.gov.in` to start using the extension.
