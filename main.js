let NameInput = document.getElementById("webhookName")
let URLInput = document.getElementById("webhookURL")
let MessageInput = document.getElementById("messagebox")
let SendButton = document.getElementById("send")

let WebhookName = "Webhook"
let url = ""
let message = ""

function init() {

    NameInput = document.getElementById("webhookName")
    URLInput = document.getElementById("webhookURL")
    MessageInput = document.getElementById("messagebox")
    SendButton = document.getElementById("send")
    
    NameInput.value = "";
    URLInput.value = "";
    MessageInput.value = "";
    
}

NameInput.addEventListener("change", () => {
    WebhookName = NameInput.value;
    //console.log(WebhookName)
})

URLInput.addEventListener("change", () => {
    url = URLInput.value;
    //console.log(url)
})

MessageInput.addEventListener("change", () => {
    message = MessageInput.value;
    //console.log(message)
})

SendButton.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("POST", url);
    
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        username: WebhookName,
        content: document.getElementById("messagebox").value
    }
    
    request.send(JSON.stringify(params));
})

window.onload = init;