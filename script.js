let inputEl2 = document.querySelector(".input-el2")
let inputEl3 = document.querySelector(".input-el3")
let inputEl1 = document.querySelector(".input-el1")
let button = document.getElementById("but")
let spanYear = document.getElementById("span-year")
let spanMonth = document.getElementById("span-month")
let spanDay = document.getElementById("span-day")
let yearsDifference
let monthsDifference
let daysDifference
let resultYears
let resultMonths
let resultDays
let intervalId
function defaultValues() {
    spanDay.innerHTML = 0 
    spanMonth.innerHTML = 0
    spanYear.innerHTML = 0
}
defaultValues()
function incrementCounters() {
    // Update years
    if (yearsDifference < resultYears) {
      yearsDifference++
      spanYear.innerHTML = yearsDifference + " "
    }
  
    // Update months
    if (monthsDifference < resultMonths) {
      monthsDifference++
      spanMonth.innerHTML = monthsDifference + " "
    }
  
    // Update days
    if (daysDifference < resultDays) {
      daysDifference++
      spanDay.innerHTML = daysDifference + " "
    }
  
    // Stop the interval when all counters reach their respective results
    if (yearsDifference === resultYears && monthsDifference === resultMonths && daysDifference === resultDays) {
      clearInterval(intervalId)
    }
  }
  
  button.addEventListener("click", function () {
    let day = inputEl1.value
    let month = inputEl2.value
    let year = inputEl3.value
    let now = new Date()
    let inputDate = new Date(year, month - 1, day)
    yearsDifference = 0
    monthsDifference = 0
    daysDifference = 0
    resultYears = now.getFullYear() - inputDate.getFullYear()
    resultMonths = now.getMonth() - inputDate.getMonth()
    resultDays = now.getDate()
  
    if (now.getMonth() < inputDate.getMonth() || (now.getMonth() === inputDate.getMonth() && now.getDate() < inputDate.getDate())) {
      resultYears--
      resultMonths += 12
    }
  
    if (resultYears === 0 && resultMonths > 0 && now.getDate() < inputDate.getDate()) {
      resultMonths--
    }
    clearInterval(intervalId)
    intervalId = setInterval(incrementCounters, 50)

  })