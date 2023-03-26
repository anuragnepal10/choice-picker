const choicesInput = document.querySelector(".choices__input");
const doubtInput = document.querySelector(".doubt__input");
const tagsEl = document.querySelector(".tags");
const btn = document.querySelector(".btn");
const suggestionEl = document.querySelector(".suggestion");
const suggestionTagEl = document.querySelector(".suggestion__tag");

doubtInput.focus();

choicesInput.addEventListener("keyup", (ev) => {
    if (ev.key == "Enter"){
        ev.preventDefault();
        btn.click();
    } else {
    createTags(ev.target.value);
    }
})

btn.addEventListener("click", ()=>{
    toggleRandom();
})

function createTags(input) {
    const tags = input.split(",").filter((tag) => tag.trim() !== "").map(tag => tag.trim());
    tagsEl.innerHTML = "";
    tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function toggleRandom() {
    const frequency = 100;
    const time = frequency*30;
    const interval = setInterval(pickRandom, frequency);
    setTimeout(() => {
        clearInterval(interval);
    }, time);

    setTimeout(() => {
        const activeTag = document.querySelector(".tag.active");
        suggestionTagEl.innerText = activeTag.innerText;
        suggestionEl.classList.add("show");
    }, time + 500);
}

function pickRandom() {
    const tags = document.querySelectorAll(".tag");
    tags.forEach(tag => {
        tag.classList.remove("active");
    });
    const randTag = tags[Math.floor(Math.random() * tags.length)];
    randTag.classList.add("active")
}

function removeSuggestion() {
    suggestionEl.classList.remove("show");
}