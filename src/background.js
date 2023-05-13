chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    if (request.type === "PIN_CODE") {
        const idCardData = `pincode: ${request.pinCode}`;

        const response = {
            type: "ID_CARD_DATA",
            data: idCardData,
        };
        sendResponse(response);
    }
});