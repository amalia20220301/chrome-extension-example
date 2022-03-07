let color = '#3aa757';

chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.sync.set({ color },()=>{
    chrome.browserAction.setBadgeText({text: 'new'});
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // 只有打开百度才显示pageAction
          new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
