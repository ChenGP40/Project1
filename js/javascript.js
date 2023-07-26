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

window.addEventListener("load", () => {subpageChanger(); checkForm();})
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

// Download Validation 
function checkForm() {
    let f = document.forms["downloadForm"].elements;
    let cansubmit = true;
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    document.getElementById('submitInfo').classList.remove("disabled");

    for (let i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) {
            cansubmit = false;
            document.getElementById('submitInfo').classList.add("disabled");
        }
        if (!emailInput.value.match(emailPattern)) {
            cansubmit = false;
            document.getElementById('submitInfo').classList.add("disabled");
          }
    }
    document.getElementById('submitInfo').disabled = !cansubmit;
}

function toPCA_PAM50() {
    const link = document.createElement('a');
    link.setAttribute('href', 'pca-pam50.html');
    document.body.appendChild(link);
    link.click();
    link.remove();
}