const timeContainer = document.getElementById('timeContainer')
const createDiv = document.createElement('div')

function createElements() {
    createDiv.style.width = "500px"
    createDiv.style.height = "150px"
    createDiv.style.padding = "15px"
    createDiv.style.border = "solid 5px #FFFF"
    createDiv.style.borderRadius = "10px"
    createDiv.style.fontFamily = "'Berkshire Swash', Arial, Helvetica, sans-serif"
    createDiv.style.color = "#FFF"
    createDiv.style.fontSize = "70px"
    createDiv.style.textAlign = "center"
    timeContainer.appendChild(createDiv)
}


function clockTracker() {
    const currTime = new Date()
    
    const hours = currTime.getHours()
    const mins = currTime.getMinutes()
    const secs = currTime.getSeconds()

    const timeFormat = `${String(hours).padStart(2, "0")}:${(String(mins).padStart(2, "0"))}:${(String(secs).padStart(2, "0"))}`

    createDiv.textContent = timeFormat
}

createElements()

// Live count
setInterval(clockTracker, 1000);