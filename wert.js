const fav = document.getElementById("first")
const dashboard = document.getElementById("second")
const chek = document.getElementById("checky")
const check = document.querySelectorAll(".checky")
const dash = document.getElementById("dashy")
const dash2 = document.querySelectorAll(".dash")
const options = document.getElementById("selects")
const today = document.getElementById("big-bro-boss")
const closes = document.getElementById("close")
const middle = document.getElementById("middle")
const middle2 = document.getElementById("middle-bro")
const middle3 = document.getElementById("middle-bro2")
const left = document.getElementById("lefft")
const right = document.getElementById("right")
const timme = document.getElementById("time")


options.addEventListener("click", (e) => {
    if (options.value == "overdue") {
        middle2.style.display = "none"
        middle3.style.display = "block"
    }
    if (options.value == "all-task") {
        middle2.style.display = "block"
        middle3.style.display = "block"
    }
    if (options.value == "on-going") {
        middle2.style.display = "block"
        middle3.style.display = "none"
    }
    if (options.value == "completed") {
        middle3.style.display = "none"
        middle2.style.display = "none"

        // if (e.nextElementSibling.nextElementSibling.value = "completed") {
        //     e.nextElementSibling.nextElementSibling.style.color = "blue"
        // }
    }
})






setInterval(() => {
    const time2 = new Date().getMinutes()
    const time3 = new Date().getHours()
    const time = new Date().getSeconds()
    const sec = `0${time}`
    const min = `0${time2}`
    const hour = `0${time3}`

    if (time < 10) {
        // console.log(`${time3}:${time2}:${sec}`);
        timme.textContent = `${time3}:${time2}:${sec}`
    }
    else if (time2 <  10) {
        timme.textContent = `${time3}:${min}:${time}`
    }
    else if (time3 <  10) {
        timme.textContent = `${hour}:${time}:${time}`
    }
    else{
        // console.log(`${time3}:${time2}:${time}`)
        // timme.textContent = `Time:  ${time3}:${time2}:${time}`
    }
    
}, 1000);

closes.addEventListener("click", function (params) {
    this.style.marginLeft = "-10px"
    // this.style.marginBottom = "80%"
    this.classList.toggle("close2")
    left.classList.toggle("leftt")
    left.classList.toggle("close")
    right.classList.toggle("close4")
    middle.classList.toggle("close3")
})

check.forEach((e) => {
    if (e.nextElementSibling.nextElementSibling.textContent == "overdue") {
        e.disabled = true
        e.nextElementSibling.style.textDecoration = "line-through"
        e.nextElementSibling.style.color = "gray"
        document.querySelectorAll(".datee2").forEach((p) => {
            p.textContent = "failed!"
        })
    }
    e.addEventListener("click", function (params) {
        e.disabled = true
        this.style.accentColor = "green"
        this.nextElementSibling.style.textDecoration = "line-through"
        this.nextElementSibling.nextElementSibling.style.backgroundColor = "#04bb04"
        this.nextElementSibling.nextElementSibling.textContent = "completed"
    })

})

fav.addEventListener("click", function (params) {
    fav.nextElementSibling.classList.toggle("fav-u")
    fav.nextElementSibling.nextElementSibling.classList.toggle("fav-u")
})

dashboard.addEventListener("click", function (params) {
    this.nextElementSibling.classList.toggle("fav-u")
    this.nextElementSibling.nextElementSibling.classList.toggle("fav-u")
    this.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("fav-u")
})

console.log(dash2);

// document.querySelector(".leftt").addEventListener("click", function (params) {
//     alert()
// })
// const day = new Date().getDate()
// const month = new Date().getMonth() + 1
// const year = new Date().getFullYear()

// console.log(`${day}/${month}/${year}`);

// setInterval(() => {
//     const time2 = new Date().getMinutes()
//     const time3 = new Date().getHours()
//     const time = new Date().getSeconds()
//     const sec = `0${time}`
//     const min = `0${time2}`
//     const hour = `0${time3}`

//     if (time < 10) {
//         console.log(`${time3}:${time2}:${sec}`);
//         timme.textContent = `${time3}:${time2}:${sec}`
//     }
//     else if (time2 <  10) {
//         timme.textContent = `${time3}:${min}:${time}`
//     }
//     else if (time3 <  10) {
//         timme.textContent = `${hour}:${time}:${time}`
//     }
//     else{
//         console.log(`${time3}:${time2}:${time}`)
//         timme.textContent = `Time:  ${time3}:${time2}:${time}`
//     }
    
// }, 1000);

