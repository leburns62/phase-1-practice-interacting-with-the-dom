const timerh1 = document.querySelector("h1#counter")
const buttonContainer = document.querySelector("#button-container")
const likesUl = document.querySelector("ul.likes")
const commentForm = document.querySelector("#comment-form")
const commentList = document.querySelector("#list")

let currentNumber = 0
let counterRunning = true
let likedNumbers = {}

commentForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const p = document.createElement("p")
    const input = document.querySelector("#comment-input")
    p.textContent = input.value
    commentList.append(p);
    event.target.reset()
})

buttonContainer.addEventListener("click", (event) => {
    if (event.target.id === "plus") {
        changeCounter(1)
    } else if (event.targer.id === "minus") {
        changeCounter(-1)
    } else if (event.target.id === "pause") {
        changePaused()
    } else if (event.target.id === "heart") {
        updateLikes()
    }
})

function updateLikes() {
    if (likedNumbers[currentNumbers]) {
        const li = document.querySelector(`[data-number="${currentNumber}"]`)
        likedNumbers[currentNumber] += 1
        li.textContent = `The number ${currentNumber} has been liked ${likeNumbers[current]} times`
    } else {
        likedNumbers[currentNumber] = 1
        const li = document.createElement("li")
        li.dataset.number = currentNumber
        li.textContent = `the number ${currentNumber} has been liked 1 time`
        likesUl.append(li)
    }
}

function changePaused() {
    counterRunning = !counterRunning
    document.querySelectorAll("button").forEach((button) => {
        if (button.id !== "pause") {
            button.disabled = !counterRunning
        } else {
            if (counterRunning) {
                button.textContent = "pause"
            } else {
                button.textContent = "resume"
            }
        }
    })
}

function changeCounter(amount) {
    currentNumber = currentNumber + amount
    timerh1.textContent = currentNumber
}

setInterval(() => {
    if (counterRunning) {
        changeCounter(1)
    }
}, 1000)
