let homeScore = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let homeCount = 0
let guestCount = 0

function homeAddOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeAddTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homeAddThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestAddOne() {
    guestCount += 1
    scoreGuest.textContent = guestCount
}

function guestAddTwo() {
    guestCount += 2
    scoreGuest.textContent = guestCount
}

function guestAddThree() {
    guestCount += 3
    scoreGuest.textContent = guestCount
}

function resetHome() {
    homeCount = 0
    homeScore.textContent = homeCount
}

function resetGuest() {
    guestCount = 0
    scoreGuest.textContent = guestCount
}