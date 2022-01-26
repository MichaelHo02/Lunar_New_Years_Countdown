# Lunar_New_Years_Countdown

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![](./screenshots/desktop.png)
![](./screenshots/mobile.png)

### Links

- Live Site URL: [See the example from my site](https://michaelho02.github.io/Lunar_New_Years_Countdown/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid
- Javascript

### What I learned

Through this project, I learn to use the `grid` to get all the value of days, hours, minutes, and seconds align to 4 columns. I also study on the usage of grid to make sure the element can be wrap when resize the screen.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 10px;
}
```

I also learn how to use the javascript to control the element by using the `document.selectElementbyID`.

```js
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
```

### Continued development

I want to improve my understanding on the usesage of the `grid` and `javascript`. I also want to learn how to calculate the lunar new year instead of creating a fix array that store the date.

## Author

- Website - [Ho Le Minh Thach (Michael Ho)](https://github.com/MichaelHo02)
- Frontend Mentor - [@MichaelHo02](https://www.frontendmentor.io/profile/MichaelHo02)
