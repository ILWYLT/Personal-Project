const AH = document.querySelector("#about-head");
const HH = document.querySelector("#history-head");
const SRH = document.querySelector("#summon-head");
const SH = document.querySelector("#services-head")
const FH = document.querySelector("#faq-head")

const AT = document.querySelector("#about-text");
const HT = document.querySelector("#history-text");
const SRT = document.querySelector("#summon-text");
const ST = document.querySelector("#services-text");
const FT = document.querySelector("#faq-text");

AH.addEventListener('click', () => {
    AT.classList.add("visible")
    HT.classList.remove("visible")
    SRT.classList.remove("visible")
    ST.classList.remove("visible")
    FT.classList.remove("visible")
})
HH.addEventListener('click', () => {
    AT.classList.remove("visible")
    HT.classList.add("visible")
    SRT.classList.remove("visible")
    ST.classList.remove("visible")
    FT.classList.remove("visible")
})
SRH.addEventListener('click', () => {
    AT.classList.remove("visible")
    HT.classList.remove("visible")
    SRT.classList.add("visible")
    ST.classList.remove("visible")
    FT.classList.remove("visible")
})
SH.addEventListener('click', () => {
    AT.classList.remove("visible")
    HT.classList.remove("visible")
    SRT.classList.remove("visible")
    ST.classList.add("visible")
    FT.classList.remove("visible")
})
FH.addEventListener('click', () => {
    AT.classList.remove("visible")
    HT.classList.remove("visible")
    SRT.classList.remove("visible")
    ST.classList.remove("visible")
    FT.classList.add("visible")
})