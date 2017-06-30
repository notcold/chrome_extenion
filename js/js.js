(function($) {
    // setTimeout(function() {
    //     chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
    //         console.log(response.farewell);
    //     });
    // }, 2000)
    console.log(window);
    $.ajax({ method: 'get', url: '//datacollect.superboss.cc/userCoupon/queryCouponList.json?pageSize=100&pageNo=1&used=false&api_name=getUnusedList',success : function(json) {
        console.log(json)
    }},)
})($)
//     chrome.extension.onRequest.addListener(
//         function(request, sender, sendResponse) {
//             console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//             if (request.greeting == "hello")
//                 sendResponse({ farewell: "goodbye" });
//             else
//                 console.log(request.greeting)
//             sendResponse({ farewell: "hello" }); // snub them.
// });
