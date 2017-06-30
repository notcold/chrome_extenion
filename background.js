


if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies;
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
      sendResponse({farewell: sender.tab ?
                "from a content script1:" + sender.tab.url :
                "from the extension1"});
    chrome.cookies.getAll({
        domain:'.superboss.cc'
    }, function(cookies) {

        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, { greeting: cookies }, function(response) {
                console.log(response.farewell);
            });
        });
    });
  });
// A simple Timer class.
function Timer() {
    this.start_ = new Date();
    this.elapsed = function() {
        return (new Date()) - this.start_;
    }
    this.reset = function() {
        this.start_ = new Date();
    }
}
// Compares cookies for "key" (name, domain, etc.) equality, but not "value"
// equality.
function cookieMatch(c1, c2) {
    return (c1.name == c2.name) && (c1.domain == c2.domain) &&
        (c1.hostOnly == c2.hostOnly) && (c1.path == c2.path) &&
        (c1.secure == c2.secure) && (c1.httpOnly == c2.httpOnly) &&
        (c1.session == c2.session) && (c1.storeId == c2.storeId);
}
// Returns an array of sorted keys from an associative array.
function sortedKeys(array) {
    var keys = [];
    for (var i in array) {
        keys.push(i);
    }
    keys.sort();
    return keys;
}
// Shorthand for document.querySelector.
function select(selector) {
    return document.querySelector(selector);
}
function simpleAjax(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var msgs = unserialize(httpRequest.responseText);
                callback.call(this, msgs);
            } else {
                console.log(httpRequest.status);
            }
        }
    };
    httpRequest.open("get", 'http://datacollect.superboss.cc/userCoupon/queryCouponList.json?pageSize=100&pageNo=1&used=false&api_name=getUnusedList');
    httpRequest.send();
}