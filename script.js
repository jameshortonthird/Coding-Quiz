var startSection = document.getElementById("js-start-section")
var quizSection = document.getElementById("js-quiz-section")
var endSection = document.getElementById("js-end-section")
var startButton = document.getElementById("js-start-quiz")

var questions = [
    {
        text: "This is question 1",
        choices: ["a", "b", "c"],
        answer: "a"
    }
]


startButton.addEventListener("click", function (){
   console.log("start-button-clicked")
   quizSection.classList.remove("is-hidden")
   startSection.classList.add("is-hidden")

   
})