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
    function years() {
        let yearsDifference = now.getFullYear() - inputDate.getFullYear()
        spanYear.innerHTML = yearsDifference + " "
    }
    function months() {
        let yearsDifference = now.getFullYear() - inputDate.getFullYear()
        let monthsDifference = now.getMonth() - inputDate.getMonth()
        if (yearsDifference === 0 && monthsDifference < 0) {
            monthsDifference = 12 - Math.abs(monthsDifference)
        }
        if (yearsDifference > 0 && monthsDifference < 0) {
            monthsDifference = 12 - Math.abs(monthsDifference)
        }
        if (yearsDifference > 0 && monthsDifference < 0) {
            monthsDifference = 12 * (yearsDifference - 1) + (12 - Math.abs(monthsDifference))
        }
        spanMonth.innerHTML = monthsDifference + " "
    }
    function days() {
        let daysDifference = now.getDate()
        spanDay.innerHTML =daysDifference + " "
    }
    years()
    months()
    days()
})
