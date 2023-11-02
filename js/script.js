let profileButton = document.querySelector(".profile__button");
let blockRectangle = document.querySelector(".rectangle");
let rectangleClose = document.querySelector(".rectangle__closeButton");

// Всплывающее окно
profileButton.addEventListener("click", function (a) {
  blockRectangle.classList.toggle("visibleRectangle"),
    rectangleClose.classList.toggle("visibleRectangle__closeButton");
});

//Закрытие всплывающего окна
rectangleClose.addEventListener("click", function (a) {
  blockRectangle.classList.toggle("visibleRectangle"),
    rectangleClose.classList.toggle("visibleRectangle__closeButton");
});

// Изменение цвета лайков при нажатии
let elementsLike = document.querySelectorAll(".elements__like");

for (let i = 0; i < elementsLike.length; i++) {
  elementsLike[i].addEventListener("click", function (b) {
    elementsLike[i].classList.toggle("visible");
  });
}

// Редактирование профиля
let inputName = document.querySelector(".rectangle__field-1");
let inputHobby = document.querySelector(".rectangle__field-2");
let outputName = document.querySelector(".profile__initials");
let outputHobby = document.querySelector(".profile__description");
let rectangleButton = document.querySelector(".rectangle__button");

rectangleButton.addEventListener("click", function (a) {
  if (inputName.value !== "") {
    if (inputHobby.value !== "") {
      (outputName.textContent = inputName.value),
        (outputHobby.textContent = inputHobby.value),
        blockRectangle.classList.toggle("visibleRectangle"),
        rectangleClose.classList.toggle(
          "visibleRectangle__closeButton"
        );
    }
  }
});

