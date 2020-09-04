/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
//Doesn't make sense to put it where the HTML says to put it.
const carouselCont = document.querySelector(".header-container");

const carouselCreator = () => {
  //Making Elements
  const carousel = document.createElement("div"),
    leftButton = document.createElement("div"),
    imageOne = document.createElement("img"),
    imageTwo = document.createElement("img"),
    imageThree = document.createElement("img"),
    imageFour = document.createElement("img"),
    rightButton = document.createElement("div");

  //Adding classes and src to images
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  imageOne.src =
    "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  imageTwo.src =
    "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
  imageThree.src =
    "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
  imageFour.src =
    "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  rightButton.classList.add("right-button");

  //Appending
  carousel.appendChild(leftButton);
  carousel.appendChild(imageOne);
  carousel.appendChild(imageTwo);
  carousel.appendChild(imageThree);
  carousel.appendChild(imageFour);
  carousel.appendChild(rightButton);

  //events for buttons
  let slideIndex = 0;

  const showSlides = (number) => {
    slideIndex += number;

    if (slideIndex >= 5) {
      slideIndex = 1;
    }

    if (slideIndex <= 0) {
      slideIndex = 4;
    }

    if (slideIndex === 1) {
      imageOne.style.display = "block";
      imageTwo.style.display = "none";
      imageThree.style.display = "none";
      imageFour.style.display = "none";
    } else if (slideIndex === 2) {
      imageTwo.style.display = "block";
      imageOne.style.display = "none";
      imageThree.style.display = "none";
      imageFour.style.display = "none";
    } else if (slideIndex === 3) {
      imageThree.style.display = "block";
      imageOne.style.display = "none";
      imageTwo.style.display = "none";
      imageFour.style.display = "none";
    } else if (slideIndex === 4) {
      imageFour.style.display = "block";
      imageOne.style.display = "none";
      imageTwo.style.display = "none";
      imageThree.style.display = "none";
    }

    return carousel;
  };

  showSlides(1);

  // leftButton.addEventListener('click', () => {
  //   showSlides(-1);
  // });

  leftButton.addEventListener("click", () => {
    showSlides(-1);
  });

  rightButton.addEventListener("click", () => {
    showSlides(1);
  });

  return carousel;
};

carouselCont.appendChild(carouselCreator());
