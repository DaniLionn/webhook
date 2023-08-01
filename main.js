let NameInput = document.getElementById("webhookName")
let URLInput = document.getElementById("webhookURL")
let MessageInput = document.getElementById("messagebox")
let SendButton = document.getElementById("send")
let PFPImage = document.getElementById("pfp")

let WebhookName = "Webhook"
let url = ""
let message = ""

let pfps = ["https://danilionn.github.io/webhook/pfps/discordblue.png", "https://danilionn.github.io/webhook/pfps/discordgreen.png", "https://danilionn.github.io/webhook/pfps/discordgrey.png", "https://danilionn.github.io/webhook/pfps/discordred.png", "https://danilionn.github.io/webhook/pfps/discordyellow.png"]

let pfpURL

function init() {

    pfpURL = pfps[Math.floor(Math.random()*pfps.length)]

    console.log(pfpURL)

    NameInput = document.getElementById("webhookName")
    URLInput = document.getElementById("webhookURL")
    MessageInput = document.getElementById("messagebox")
    SendButton = document.getElementById("send")
    PFPImage = document.getElementById("pfp")

    PFPImage.src = pfpURL
    
    NameInput.value = "";
    //URLInput.value = "";
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
        avatar_url: pfpURL,
        content: document.getElementById("messagebox").value
    }
    
    request.send(JSON.stringify(params));
})

window.onload = init;