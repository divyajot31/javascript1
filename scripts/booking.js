/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_total_days = 35;
// making an array for all days of the week.
var all_days = [
    document.getElementById("monday"),
    document.getElementById("tuesday"),
    document.getElementById("wednesday"),
    document.getElementById("thursday"),
    document.getElementById("friday")
];
var clear_button = document.getElementById("clear-button");
var halfDayButton = document.getElementById("half");
var fullDayButton = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var total_days = 0;
function clicked (day) {
    if (!day.classList.contains("clicked")){    //using .classlist.contains() 
        day.classList.add("clicked"); 
        total_days = total_days+1;
        totalCost(); //recalculating total cost
    }
}

all_days[0].addEventListener("click", function () {clicked(all_days[0]);});
all_days[1].addEventListener("click", function () {clicked(all_days[1]);});
all_days[2].addEventListener("click", function () {clicked(all_days[2]);});
all_days[3].addEventListener("click", function () {clicked(all_days[3]);});
all_days[4].addEventListener("click", function () {clicked(all_days[4]);});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// using rest function to clear all days
function reset () {
    for (var i = 0; i < all_days.length; i=i+1){  
        all_days[i].classList.remove("clicked");
    }  
    total_days = 0;
    totalCost();   // recalculating total cost.
}
clear_button.addEventListener("click", reset);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfday_service () {
    cost_total_days = 20;
    totalCost();
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
}
halfDayButton.addEventListener("click", halfday_service);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullday_service () {
    cost_total_days = 35;
    totalCost();
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
}
fullDayButton.addEventListener("click", fullday_service);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function totalCost(){
    let totalCost = document.getElementById("calculated-cost");    //setting the calculated-cost to appropriate value.
    totalCost.innerHTML = cost_total_days * total_days;
}