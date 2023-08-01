"use strict";

//selecting the elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submit = document.querySelector(".submit-btn");
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

let isValid = false;

//error message
const errorYear = document.querySelector(".error-year");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");

submit.addEventListener("click", calcDate);

// let currentDate = new Date();

inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid day";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }

  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});

inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid month";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }

  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorMonth.textContent = "";
  }
});

function calcDate() {
  if (isValid) {
    //converting the user input into a birthdate
    let birthDate = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthDate);
    //passing the birthdate and converting it into milliseconds
    let birthdayOBj = new Date(birthDate);
    console.log(birthdayOBj);
    //subtracting the birthdate in milliseconds from the current millisecond
    let age = Date.now() - birthdayOBj;
    console.log(age);
    //changing the millisecond into an actual date
    let ageDate = new Date(age);
    console.log(ageDate);
    //subtracting the actual date
    let ageYear = ageDate.getUTCFullYear() - 1970; //the 1970 is to get the actual age of the perosn if it is
    // not there it would show how many years has passed since 1970
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getDate() - 1;
    ///displaying everythin
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYear;
  } else {
    alert("error");
  }
}
