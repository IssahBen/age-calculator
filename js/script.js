
let form = document.getElementById("form")

let dayerror = document.getElementById("dayerror")
let montherror = document.getElementById("montherror")
let yearerror = document.getElementById("yearerror")
let labels = document.querySelectorAll("label")
let daylabel = document.getElementById("day")
let monthlabel = document.getElementById("month")
let yearlabel = document.getElementById("year")
let after_submit = document.getElementById("after_submit")
let before_submit = document.getElementById("before_submit")
let day_out = document.getElementById("days")
let year_out = document.getElementById("years")
let month_out = document.getElementById("months")





form.addEventListener("submit", process)

function process(e) {
    e.preventDefault()
    inputs = e.target.querySelectorAll("input")
    years = inputs[2]
    months = inputs[1]
    days = inputs[0]

    date = new Date
    current_day = date.getDate()
    current_month = date.getMonth()
    current_year = date.getFullYear()
    console.log(parseInt(days.value))
    console.log(dayerror)
    after_submit.classList.toggle("hidden")
    before_submit.classList.toggle("hidden")

    if (parseInt(days.value) >= 30 || parseInt(days.value) < 1 || days.value.trim() == "") {
        dayerror.classList.toggle("hidden")
        days.classList.toggle("border-red-400")

        daylabel.classList.toggle('text-red-400')
    }

    if (parseInt(months.value) >= 12 || parseInt(months.value) < 1) {
        montherror.classList.toggle("hidden")
        months.classList.toggle("border-red-400")

        monthlabel.classList.toggle('text-red-400')

    }
    if (parseInt(years.value) >= current_year) {
        yearerror.classList.toggle("hidden")
        years.classList.toggle("border-red-400")

        yearlabel.classList.toggle('text-red-400')

    }

    if (dayerror.classList.contains("hidden") && montherror.classList.contains("hidden") && yearerror.classList.contains("hidden")) {
        year_difference = current_year - parseInt(years.value)
        month_difference = Math.abs(months.value - current_month)
        day_difference = Math.abs(days.value - current_day)
        day_out.innerHTML = day_difference
        month_out.innerHTML = month_difference
        year_out.innerHTML = year_difference

    }






}