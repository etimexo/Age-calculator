let inputEl2 = document.querySelector(".input-el2")
let inputEl3 = document.querySelector(".input-el3")
let inputEl1 = document.querySelector(".input-el1")
let tDay = document.querySelector(".tday")
let tMonth = document.querySelector(".tmonth")
let tYear = document.querySelector(".tyear")
let pDay = document.querySelector(".pday")
let pMonth = document.querySelector(".pmonth")
let pYear = document.querySelector(".pyear")
let button = document.getElementById("but")
let spanYear = document.getElementById("span-year")
let spanMonth = document.getElementById("span-month")
let spanDay = document.getElementById("span-day")
let now = new Date()
let yearsDifference
let monthsDifference
let daysDifference
let resultYears
let resultMonths
let resultDays
let intervalId
function defaultValues() {
    spanDay.innerHTML = "-- " 
    spanMonth.innerHTML = "-- "
    spanYear.innerHTML = "-- "
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

  inputEl1.addEventListener("input", function() {
    let day = parseInt(inputEl1.value)
  
    // Check if the day value is valid
    if (isNaN(day) || day < 1 || day > 31) {
      inputEl1.classList.add("invalid")
      tDay.classList.add("wrong-day")
      pDay.innerHTML = "must be a valid date"
      pDay.classList.add("pday")
      disableButton();
    } else {
      // Valid day input
      inputEl1.classList.remove("invalid")
      tDay.classList.remove("wrong-day")
      pDay.innerHTML = ""
      pDay.classList.remove("pday")
      enableButtonIfValidInput();
    }
  })
  
  // Repeat the same process for inputEl2 and inputEl3
  inputEl2.addEventListener("input", function() {
    let month = parseInt(inputEl2.value)
  
    // Check if the month value is valid
    if (isNaN(month) || month < 1 || month > 12) {
      inputEl2.classList.add("invalid")
      tMonth.classList.add("wrong-month")
      pMonth.innerHTML = "Must be a valid month"
      pMonth.classList.add("pmonth")
      disableButton();
    }
    else {
      // Valid month input
      inputEl2.classList.remove("invalid")
      tMonth.classList.remove("wrong-month")
      pMonth.innerHTML = ""
      pMonth.classList.remove("pmonth")
      enableButtonIfValidInput();
      let day = parseInt(inputEl1.value);
    if (!isNaN(day) && (day < 1 || day > getDaysInMonth(month))) {
      inputEl1.classList.add("invalid")
      tDay.classList.add("wrong-day")
      pDay.innerHTML = "Must be a valid date"
      pDay.classList.add("pday")
      disableButton();
    } else {
      // Valid day input
      inputEl1.classList.remove("invalid")
      tDay.classList.remove("wrong-day")  
      pDay.innerHTML = ""
      pDay.classList.remove("pday")
      enableButtonIfValidInput();
    }
    }
  })
  function getDaysInMonth(month) {
    const thirtyOneDaysMonths = [1, 3, 5, 7, 8, 10, 12]
    return thirtyOneDaysMonths.includes(month) ? 31 : 30;
  }
  function enableButtonIfValidInput() {
    if (!inputEl1.classList.contains("invalid") && !inputEl2.classList.contains("invalid") && !inputEl3.classList.contains("invalid")) {
      enableButton();
    }
  }
  inputEl3.addEventListener("input", function() {
    let year = parseInt(inputEl3.value)
    let currentYear = new Date().getFullYear()
    // Check if the year value is valid
    if (isNaN(year)) {
      inputEl3.classList.add("invalid")
      tYear.classList.add("wrong-year")
    } 
    else if (year > currentYear) {
      inputEl3.classList.add("invalid")
      tYear.classList.add("wrong-year")
      pYear.innerHTML = "Must be in the past"
      pYear.classList.add("pyear")
    } else {
      // Valid year input
      inputEl3.classList.remove("invalid")
      tYear.classList.remove("wrong-year")
      pYear.innerHTML = ""
      pYear.classList.remove("pyear")
    }
  })
  
  button.addEventListener("click", function () {
    let day = inputEl1.value
    let month = inputEl2.value
    let year = inputEl3.value

    if (day.trim() === "" || month.trim() === "" || year.trim() === "") {
      pYear.innerHTML = "This field is required"
      pDay.innerHTML = "This field is required"
      pMonth.innerHTML = "This field is required"
      inputEl3.classList.add("invalid")
      tYear.classList.add("wrong-year")
      inputEl2.classList.add("invalid")
      tMonth.classList.add("wrong-month")
      inputEl1.classList.add("invalid")
      tDay.classList.add("wrong-day")
      return null
    }

    let inputDate = new Date(year, month - 1, day)
    let currentDate = new Date()
    yearsDifference = 0
    monthsDifference = 0
    daysDifference = 0
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return;
    }
    resultYears = currentDate.getFullYear() - inputDate.getFullYear()
    resultMonths = currentDate.getMonth() - inputDate.getMonth()
    resultDays = currentDate.getDate()
    if (currentDate < inputDate) {
      resultYears--
      resultMonths += 12
    }
  
    if (currentDate.getDate() < inputDate.getDate()) {
      resultMonths--
      
    }
    if (currentDate.getDate() < inputDate.getDate()) {
      resultMonths--
    }
        clearInterval(intervalId)
        intervalId = setInterval(incrementCounters, 25)
    })