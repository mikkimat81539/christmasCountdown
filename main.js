const timeContainer = document.getElementById('timeContainer')
const createDiv = document.createElement('div')

function createElements() {
    createDiv.style.width = "500px"
    createDiv.style.height = "150px"
    createDiv.style.border = "solid 5px #FFFF"
    createDiv.style.borderRadius = "10px"
    timeContainer.appendChild(createDiv)
}


function countdownTimer() {
    const currTime = new Date()
    
    const hours = currTime.getHours()
    const mins = currTime.getMinutes()
    const secs = currTime.getSeconds()

    const timeFormat = `${String(hours).padStart(2, "0")}:${(String(mins).padStart(2, "0"))}:${(String(secs).padStart(2, "0"))}`

    createDiv.textContent = timeFormat;
}

createElements()

// Live count
//setInterval(countdownTimer, 1000);