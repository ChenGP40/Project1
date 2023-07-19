// Changing between subpages (side navigation)
const desc = document.getElementById("description");
const inst = document.getElementById("instructions");
const faq = document.getElementById("faq");
const down = document.getElementById("download");
const news = document.getElementById("news");

let allClasses = [desc, inst, faq, down, news];

var submitHash = ""

function hideAll() {
allClasses.forEach(function(el) {
  el.classList.add("hidden")
})
}

document.getElementById("descriptionTrigger").addEventListener("click", () => {hideAll(); triggerDescription();})
function triggerDescription() {
    desc.classList.remove("hidden");
    window.location.hash = "#descriptionPage"
}

document.getElementById("instructionsTrigger").addEventListener("click", () => {hideAll(); triggerInstructions();})
function triggerInstructions() {
    inst.classList.remove("hidden");
    window.location.hash = "#instructionsPage"
}

document.getElementById("faqTrigger").addEventListener("click", () => {hideAll(); triggerFaq();})
function triggerFaq() {
    faq.classList.remove("hidden");
    window.location.hash = "#faqPage"
}

document.getElementById("downloadTrigger").addEventListener("click", () => {hideAll(); triggerDownload();})
function triggerDownload() {
    down.classList.remove("hidden");
    window.location.hash = "#downloadPage"
}

document.getElementById("newsTrigger").addEventListener("click", () => {hideAll(); triggerNews();})
function triggerNews() {
    news.classList.remove("hidden");
    window.location.hash = "#newsPage"
}

window.addEventListener("load", subpageChanger())
function subpageChanger() {
    let hash = window.location.hash;
    if(hash == "") {
        triggerDescription();
    } else if(hash == "#descriptionPage") {
        triggerDescription();
    } else if(hash == "#instructionsPage") {
        triggerInstructions();
    } else if(hash == "#faqPage") {
        triggerFaq();
    } else if(hash == "#downloadPage") {
        triggerDownload();
    } else {
        triggerNews();
    }
}

// Download Validation - CHANGE TO JUST ONE BUTTON
let downloadBtn = document.getElementById("downloadBtn")

document.getElementById("downloadBtn").addEventListener("mouseover", enableBtn())
function enableBtn() {

}


window.addEventListener("load", fileDownloadTrigger())
function fileDownloadTrigger() {
    if(blank) {
        var submitHash = "submitted";
    } else {
        var submitHash = ""
    }
}

down.classList.remove("disabled");