const answers = document.querySelectorAll('.question-box');

answers.forEach((event) => { //calling a function forEach .question-box element 
    event.addEventListener("click", () => {
      if (event.classList.contains("active")) {
        event.classList.remove("active");
      } else {
        event.classList.add("active");
      }
    });
  });