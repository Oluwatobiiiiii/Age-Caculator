# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Form Validation and error handling
Got a beter understanding of dates

```js
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

## Author

- Frontend Mentor - [Oluwatobiiiiii](https://www.frontendmentor.io/profile/Oluwatobiiiiii)
- Twitter - [@Oluwatobicodes](https://twitter.com/Oluwatobicodes?t=eq1K7J7NM0g61KL-M178sA&s=09)
