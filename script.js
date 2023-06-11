let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")
let inputEl3 = document.getElementById("input-el3")
let button = document.getElementById("but")
let spanYear = document.getElementById("span-year")
let spanMonth = document.getElementById("span-month")
let spanDay = document.getElementById("span-day")
button.addEventListener("click", function () {
    let day = inputEl1.value
    let month = inputEl2.value
    let year = inputEl3.value
    let now = new Date()
    let inputDate = new Date(year, month - 1, day)
    yearsDifference = now.getFullYear() - inputDate.getFullYear()
    console.log(yearsDifference)
    monthsDifference = now.getMonth() - inputDate.getMonth()
    console.log(monthsDifference)
    daysDifference = now.getDate()
    console.log(daysDifference)
})
