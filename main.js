let NameInput = document.getElementById("webhookName")
let URLInput = document.getElementById("webhookURL")
let MessageInput = document.getElementById("messagebox")
let MessageInputLabel = document.getElementById("messageboxLabel")
let SendButton = document.getElementById("send")
let RandomButton = document.getElementById("randomize")
let PFPImage = document.getElementById("pfp")
let PFPTypeSelector = document.getElementById("pfpselect")

let defaultPFPs = ["https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordblue.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordgreen.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordgrey.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordred.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordyellow.png"]
let solidColours = ["https://better-default-discord.netlify.app/Icons/Solid-Red.png", "https://better-default-discord.netlify.app/Icons/Solid-Orange.png", "https://better-default-discord.netlify.app/Icons/Solid-Yellow.png", "https://better-default-discord.netlify.app/Icons/Solid-Green.png", "https://better-default-discord.netlify.app/Icons/Solid-Indigo.png", "https://better-default-discord.netlify.app/Icons/Solid-Blue.png", "https://better-default-discord.netlify.app/Icons/Solid-Violet.png", "https://better-default-discord.netlify.app/Icons/Solid-Pink.png", "https://better-default-discord.netlify.app/Icons/Solid-Black.png", "https://better-default-discord.netlify.app/Icons/Solid-Gray.png"]
let pastelColours = ["https://better-default-discord.netlify.app/Icons/Pastel-Red.png", "https://better-default-discord.netlify.app/Icons/Pastel-Orange.png", "https://better-default-discord.netlify.app/Icons/Pastel-Yellow.png", "https://better-default-discord.netlify.app/Icons/Pastel-Green.png", "https://better-default-discord.netlify.app/Icons/Pastel-Indigo.png", "https://better-default-discord.netlify.app/Icons/Pastel-Blue.png", "https://better-default-discord.netlify.app/Icons/Pastel-Violet.png", "https://better-default-discord.netlify.app/Icons/Pastel-Pink.png", "https://better-default-discord.netlify.app/Icons/Pastel-Black.png", "https://better-default-discord.netlify.app/Icons/Pastel-Gray.png"]
let gradients = ["https://better-default-discord.netlify.app/Icons/Gradient-Red.png", "https://better-default-discord.netlify.app/Icons/Gradient-Orange.png", "https://better-default-discord.netlify.app/Icons/Gradient-Yellow.png", "https://better-default-discord.netlify.app/Icons/Gradient-Green.png", "https://better-default-discord.netlify.app/Icons/Gradient-Indigo.png", "https://better-default-discord.netlify.app/Icons/Gradient-Blue.png", "https://better-default-discord.netlify.app/Icons/Gradient-Violet.png", "https://better-default-discord.netlify.app/Icons/Gradient-Pink.png", "https://better-default-discord.netlify.app/Icons/Gradient-Black.png", "https://better-default-discord.netlify.app/Icons/Gradient-Gray.png"]

let pfpURL
let WebhookName
let WebhookURL
let PFPType = "totallyRandom"

let messageMaxLength = 2000;
let messageWarningLength = 1750;

URLInput.addEventListener("change", () => {
    WebhookURL = URLInput.value;
    localStorage.setItem("WebhookURL", URLInput.value);
})

NameInput.addEventListener("change", () => {
    WebhookName = NameInput.value;
    localStorage.setItem("WebhookName", NameInput.value);
})

PFPTypeSelector.addEventListener("input", () => {

    PFPType = PFPTypeSelector.value;

})

MessageInput.addEventListener("input", () => {

    let len = MessageInput.value.length;

    if (len < messageWarningLength) {
        MessageInputLabel.innerHTML = "message";
    } else {
        MessageInputLabel.innerHTML = `message (${messageMaxLength - len})`;
    }

})

function randomizePFP() {
    
    let randomPick = Math.floor(Math.random() * 4)
    
    if (PFPType === "totallyRandom") {

        if (randomPick === 0) {
            pfpURL = defaultPFPs[Math.floor(Math.random() * defaultPFPs.length)];
        } else if (randomPick === 1) {
            pfpURL = solidColours[Math.floor(Math.random() * solidColours.length)];
        } else if (randomPick === 2) {
            pfpURL = pastelColours[Math.floor(Math.random() * pastelColours.length)];
        } else if (randomPick === 3) {
            pfpURL = gradients[Math.floor(Math.random() * gradients.length)];
        }
    } else if (PFPType === "default") {
        pfpURL = defaultPFPs[Math.floor(Math.random() * defaultPFPs.length)];
    } else if (PFPType === "custom_solidColours") {
        pfpURL = solidColours[Math.floor(Math.random() * solidColours.length)];
    } else if (PFPType === "custom_pastelColours") {
        pfpURL = pastelColours[Math.floor(Math.random() * pastelColours.length)];
    } else if (PFPType === "custom_gradients") {
        pfpURL = gradients[Math.floor(Math.random() * gradients.length)];
    } 

    lastPFPURL = pfpURL
    
    var favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    
    favicon.href = pfpURL;
    PFPImage.src = pfpURL;
    
}

function init() {
    
    WebhookURL = localStorage.getItem("WebhookURL");
    WebhookName = localStorage.getItem("WebhookName");

    randomizePFP();
    
    NameInput.value = WebhookName;
    URLInput.value = WebhookURL;
    MessageInput.value = "";
    
}

SendButton.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("POST", WebhookURL);
    
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        username: WebhookName,
        avatar_url: pfpURL,
        content: MessageInput.value
    }
    
    request.send(JSON.stringify(params));
})

RandomButton.addEventListener("click", () => {
    randomizePFP();
})

window.onload = init;