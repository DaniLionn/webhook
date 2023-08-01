let WebhookName = "Webhook"
let url = ""
// let pfp = ""
let message = ""

function updateName() {
    WebhookName = document.getElementById("webhookName").value;
    console.log(WebhookName)
}

function updateURL() {
    url = document.getElementById("webhookURL").value;
    console.log(url)
}

// function updatePreview(input, target) {
//     const url = new URL("")
//     let file = input.files[0];
//     let reader = new FileReader();
    
//     pfp = url.createObjectURL(file)
    
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//         let img = document.getElementById(target);
//         img.src = reader.result;
//     }
    
//     console.log(pfp)
// }

function updateMessage() {
    message = document.getElementById("messagebox").value;
    console.log(message)
}

function sendMessage() {
    
    const request = new XMLHttpRequest();
    request.open("POST", url);
    
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        username: name,
        //avatar_url: pfp,
        content: document.getElementById("messagebox").value
    }
    
    request.send(JSON.stringify(params));
}

function init() {
    
    document.getElementById("webhookName").value = "";
    //document.getElementById("webhookImage").value = "";
    document.getElementById("webhookURL").value = "";
    document.getElementById("messagebox").value = "";
    
}

window.onload = init;