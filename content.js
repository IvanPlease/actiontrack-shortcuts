chrome.runtime.onMessage.addListener(
    function(request){
        switch(request){
            case "save-project":

                if($("#cpEditorSaveButton").is(":visible")){
                    $("#cpEditorSaveButton").trigger("click");
                }

                if($("button[data-theme=positive]").is(":visible")){
                    $("button[data-theme=positive]").trigger("click");
                    clearInterval(i);
                }

                var i = setInterval(function(){
                    console.log("checking for button");
                    if($("#gzEditorSaveButton").is(":visible")){
                        $("#gzEditorSaveButton").trigger("click");
                        clearInterval(i);
                    }
                }, 100);
                break;
            case "duplicate-checkpoint":
                $("#cpEditorDuplicateButton").trigger("click");
                break;
            case "delete-checkpoint":
                $("#cpEditorDeleteButton").trigger("click");
                checkForButton();
                break;
            case "cancel-edition":
                $("#cpEditorCancelButton").trigger("click");
                break;
            case "new-checkpoint":
                $("#addCheckPointButton").find("span").first().trigger("click");
                break;
            case "new-connection":
                $("#addEdgeButton").find("span").first().trigger("click");
                checkForButton();
                break;
        }
    }
)

function checkForButton(){
    var i = setInterval(function(){
        console.log("checking for button");
        if($("button[data-theme=positive]").is(":visible")){
            $("button[data-theme=positive]").trigger("click");
            clearInterval(i);
        }
    }, 100);
}