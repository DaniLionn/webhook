let NameInput = document.getElementById("webhookName")
let URLInput = document.getElementById("webhookURL")
let MessageInput = document.getElementById("messagebox")
let SendButton = document.getElementById("send")
let RandomButton = document.getElementById("randomize")
let PFPImage = document.getElementById("pfp")

let defaultPFPs = ["https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordblue.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordgreen.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordgrey.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordred.png", "https://danilionn.github.io/danis-bot-website/assets/images/webhook-pfps/discordyellow.png"]

let customPFPs = ["https://better-default-discord.netlify.app/Icons/Solid-Red.png", "https://better-default-discord.netlify.app/Icons/Solid-Orange.png", "https://better-default-discord.netlify.app/Icons/Solid-Yellow.png", "https://better-default-discord.netlify.app/Icons/Solid-Green.png", "https://better-default-discord.netlify.app/Icons/Solid-Indigo.png", "https://better-default-discord.netlify.app/Icons/Solid-Blue.png", "https://better-default-discord.netlify.app/Icons/Solid-Violet.png", "https://better-default-discord.netlify.app/Icons/Solid-Pink.png", "https://better-default-discord.netlify.app/Icons/Solid-Black.png", "https://better-default-discord.netlify.app/Icons/Solid-Gray.png", "https://better-default-discord.netlify.app/Icons/Pastel-Red.png", "https://better-default-discord.netlify.app/Icons/Pastel-Orange.png", "https://better-default-discord.netlify.app/Icons/Pastel-Yellow.png", "https://better-default-discord.netlify.app/Icons/Pastel-Green.png", "https://better-default-discord.netlify.app/Icons/Pastel-Indigo.png", "https://better-default-discord.netlify.app/Icons/Pastel-Blue.png", "https://better-default-discord.netlify.app/Icons/Pastel-Violet.png", "https://better-default-discord.netlify.app/Icons/Pastel-Pink.png", "https://better-default-discord.netlify.app/Icons/Pastel-Black.png", "https://better-default-discord.netlify.app/Icons/Pastel-Gray.png", "https://better-default-discord.netlify.app/Icons/Gradient-Red.png", "https://better-default-discord.netlify.app/Icons/Gradient-Orange.png", "https://better-default-discord.netlify.app/Icons/Gradient-Yellow.png", "https://better-default-discord.netlify.app/Icons/Gradient-Green.png", "https://better-default-discord.netlify.app/Icons/Gradient-Indigo.png", "https://better-default-discord.netlify.app/Icons/Gradient-Blue.png", "https://better-default-discord.netlify.app/Icons/Gradient-Violet.png", "https://better-default-discord.netlify.app/Icons/Gradient-Pink.png", "https://better-default-discord.netlify.app/Icons/Gradient-Black.png", "https://better-default-discord.netlify.app/Icons/Gradient-Gray.png"]

let pfpURL

let WebhookURL

URLInput.addEventListener("change", () => {
    WebhookURL = URLInput.value;
    localStorage.setItem("WebhookURL", URLInput.value);
})

function randomizePFP() {
    
    let randomPick = Math.floor(Math.random() * 2)
    
    if (randomPick === 0) {
        pfpURL = defaultPFPs[Math.floor(Math.random() * defaultPFPs.length)];
    } else {
        pfpURL = customPFPs[Math.floor(Math.random() * customPFPs.length)];
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
    
    randomizePFP();
    
    NameInput.value = "";
    URLInput.value = WebhookURL;
    MessageInput.value = "";
    
}

SendButton.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("POST", WebhookURL);
    
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        username: NameInput.value,
        avatar_url: pfpURL,
        content: MessageInput.value
    }
    
    request.send(JSON.stringify(params));
})

RandomButton.addEventListener("click", () => {
    randomizePFP();
})

window.onload = init;
