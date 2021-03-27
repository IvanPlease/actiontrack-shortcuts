chrome.runtime.onMessage.addListener(
    function(request){
        switch(request){
            case "save-project":
                if($("#cpEditorSaveButton").is(":visible")){
                    $("#cpEditorSaveButton").trigger("click");
                }
                var i = setInterval(function(){
                    if($("#gzEditorSaveButton").is(":visible")){
                        $("#gzEditorSaveButton").trigger("click");
                        clearInterval(i);
                    }
                }, 200);
                break;
            case "duplicate-checkpoint":
                $("#cpEditorDuplicateButton").trigger("click");
                break;
            case "delete-checkpoint":
                $("#cpEditorDeleteButton").trigger("click");
                $("button[data-theme=positive]").trigger("click");
                break;
            case "cancel-edition":
                $("#cpEditorCancelButton").trigger("click");
                break;
        }
    }
)