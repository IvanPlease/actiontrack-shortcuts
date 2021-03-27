chrome.commands.onCommand.addListener(function(cmd){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, cmd);
    });
});