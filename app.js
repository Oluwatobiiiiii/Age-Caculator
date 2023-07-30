"use strict";

// DOCUMENT QUERY SELECTOR
const inputDay = document.querySelector("#birth-day");
const inputMonth = document.querySelector("#month-day");
const inputYear = document.querySelector("#year-day");
const labelYears = document.querySelector(".years");
const labelMonths = document.querySelector(".months");
const labelDays = document.querySelector(".days");
const arrowBtn = document.querySelector(".arrow");

//cuurent date
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
console.log(currentMonth);
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDate();
const myBirthDay = console.log(currentDay);

const calcDays = (date1, date2) => {
  (Math.round(Math.abs(date2 - date1)) / 1000) * 60 * 60 * 24;
};
const daysPassed = calcDays(currentDate);

// CACULATE YEARS
const myYear = () => {
  return currentYear - Number(inputYear.value);
};

//CACULATE MONTH
const myMonth = () => {
  return currentMonth - Number(inputMonth.value);
};

//CACULATE DAYS
const myDay = () => {
  return currentDay - Number(inputDay.value);
};

//DISPLAY YEARS,MONTH,DAYS
arrowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //SHOW AGE
  myYear();
  console.log(myYear());
  //SHOW MONTH
  myMonth();
  console.log(myMonth());
  //SHOW REMANING DAYS
  myDay();

  if (
    inputDay.value === "" &&
    inputMonth.value === "" &&
    inputYear.value === ""
  )
    console.log("error");
});

//EVENT LISTENER

//FORM VALIDATION
if (inputDay === "" && inputMonth === "" && inputYear === "")
  console.log(erroe);

//IF IT IS IN THE FUTURE RETURN AN ERROR

//1.check if the fiileds are empty

//2.check IF ALL the values enterd are correct
