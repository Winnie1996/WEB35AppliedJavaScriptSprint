// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  //Creating Elements

  const mainHeader = document.createElement("div");
  const date = document.createElement("span");
  const header1 = document.createElement("h1");
  const temperature = document.createElement("span");

  //Adding ClassNames

  mainHeader.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  //Apply Text Content from Above

  // date.textContent = 'MARCH 28, 2020';
  // h1.textContent = 'Lambda Times';
  // temp.textContent = '98 degrees';

  date.textContent = "September 4, 2020";
  header1.textContent = "Sprint Challenge Time";
  temperature.textContent = "Lambda more like Lamb duh ";

  //Adding to the DOM by appending

  //Append
  mainHeader.appendChild(date);
  mainHeader.appendChild(header1);
  mainHeader.appendChild(temperature);

  //Always gotta return
  return mainHeader;
}

//Appending the function into the DOM
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
