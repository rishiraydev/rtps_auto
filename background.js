// Bihar RTPS AutoFill — Background Service Worker
// Handles messaging between popup and content scripts

chrome.runtime.onInstalled.addListener(() => {
  console.log('[RTPS AutoFill] Extension installed.');
  // Initialize storage with empty profiles array if not present
  chrome.storage.local.get('profiles', (data) => {
    if (!data.profiles) {
      chrome.storage.local.set({ profiles: [] });
    }
  });
});

// Relay messages between popup and content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fillForm') {
    // Forward to the active tab's content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
          sendResponse(response);
        });
      }
    });
    return true; // keep channel open for async response
  }

  if (message.action === 'detectForm') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'detectForm' }, (response) => {
          sendResponse(response);
        });
      }
    });
    return true;
  }

  if (message.action === 'saveCapturedProfile') {
    chrome.storage.local.get('profiles', (data) => {
      const profiles = data.profiles || [];
      const newProfile = message.profile;
      // Generate a unique ID
      newProfile.id = 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
      newProfile.updatedAt = new Date().toISOString();
      
      profiles.push(newProfile);
      chrome.storage.local.set({ profiles: profiles }, () => {
        sendResponse({ success: true, id: newProfile.id });
      });
    });
    return true; // async response
  }
});
