const timeContainer = document.getElementById('timeContainer')
const createDiv = document.createElement('div')
const christmasImg = document.getElementById('christmasImg')
const christmasTitle = document.getElementById('christmasTitle')
const footerYear = document.getElementById("year")

function createTimeElements() {
    createDiv.style.width = "500px"
    createDiv.style.height = "150px"
    createDiv.style.padding = "5px"
    createDiv.style.border = "solid 5px #FFFF"
    createDiv.style.borderRadius = "10px"
    createDiv.style.fontFamily = "'Berkshire Swash', Arial, Helvetica, sans-serif"
    createDiv.style.color = "#fff"
    createDiv.style.fontSize = "50px"
    createDiv.style.textAlign = "center"
    createDiv.style.userSelect = "none"
    timeContainer.appendChild(createDiv)
}

function currentTime() {
    const currTime = new Date()

    const year = currTime.getFullYear()
    const month = currTime.getMonth()
    const day = currTime.getDate()

    const hours = currTime.getHours()
    const mins = currTime.getMinutes()
    const secs = currTime.getSeconds()

    const timeFormat = `${String(hours).padStart(2, "0")}:${(String(mins).padStart(2, "0"))}:${(String(secs).padStart(2, "0"))}`

    const dayFormat = `${String(year)}-${(String(month + 1).padStart(2, "0"))}-${(String(day).padStart(2, "0"))}`
    
    createDiv.innerHTML = `${dayFormat}<br>${timeFormat}`
}

/*
function currentTime() {
    const currTime = new Date()
    
    const hours = currTime.getHours()
    const mins = currTime.getMinutes()
    const secs = currTime.getSeconds()

    const timeFormat = `${String(hours).padStart(2, "0")}:${(String(mins).padStart(2, "0"))}:${(String(secs).padStart(2, "0"))}`

    createDiv.textContent = timeFormat
}
*/

function christmasDay() {
    const today = new Date();

        // Check if today is Dec 24
        if (today.getMonth() === 11 && today.getDate() === 25) {
            document.body.style.backgroundColor = '#00346fff'
            christmasImg.src = 'images/santa.png';
            christmasTitle.textContent = 'Merry Christmas'
        }
}

createTimeElements()

// Live count
setInterval(currentTime, 1000);

christmasDay()

footerYear.textContent = new Date().getFullYear();
