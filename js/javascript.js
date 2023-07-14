let desc = document.getElementById("description");
let inst = document.getElementById("instructions");
let faq = document.getElementById("faq");
let down = document.getElementById("download");
let news = document.getElementById("news");

document.getElementById("descriptionTrigger").addEventListener("click", triggerDescription);
function triggerDescription() {
    desc.classList.remove("hidden");
    inst.classList.add("hidden");
    faq.classList.add("hidden");
    down.classList.add("hidden");
    news.classList.add("hidden");
}

document.getElementById("instructionsTrigger").addEventListener("click", triggerInstructions);
function triggerInstructions() {
    desc.classList.add("hidden");
    inst.classList.remove("hidden");
    faq.classList.add("hidden");
    down.classList.add("hidden");
    news.classList.add("hidden");
}

document.getElementById("faqTrigger").addEventListener("click", faqDescription);
function faqDescription() {
    desc.classList.add("hidden");
    inst.classList.add("hidden");
    faq.classList.remove("hidden");
    down.classList.add("hidden");
    news.classList.add("hidden");
}

document.getElementById("downloadTrigger").addEventListener("click", triggerDownload);
function triggerDownload() {
    desc.classList.add("hidden");
    inst.classList.add("hidden");
    faq.classList.add("hidden");
    down.classList.remove("hidden");
    news.classList.add("hidden");
}

document.getElementById("newsTrigger").addEventListener("click", triggerNews);
function triggerNews() {
    desc.classList.add("hidden");
    inst.classList.add("hidden");
    faq.classList.add("hidden");
    down.classList.add("hidden");
    news.classList.remove("hidden");
}