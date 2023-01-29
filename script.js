var startSection = document.getElementById("js-start-section")
var quizSection = document.getElementById("js-quiz-section")
var endSection = document.getElementById("js-end-section")
var startButton = document.getElementById("js-start-quiz")
var questionChoicesEl = document.getElementById("js-question-choices")
var questionTextEl = document.getElementById("js-question-text")
var currentQuestionIndex = 0

var questions = [
    {
        text: "This is question 1",
        choices: ["monkey", "horse", "cat"],
        answer: "a"
    },
    {
        text: "This is question 2",
        choices: ["car", "house", "lawnn"],
        answer: "a"
    },
    {
        text: "This is question 3",
        choices: ["a","b","c"],
        answer: "a"
    },
    {
        text: "This is question 4",
        choices: ["a","b","c"],
        answer: "a"
    },
    {
        text: "This is question 5",
        choices: ["a","b","c"],
        answer: "a"
    }

]

// [1,2,3,4]
// ["a", "b", "c"]
// [[1,2], [1,2], [1,2]]

// var exampleArr = [1,2,3]
// console.log(exampleArr[1]) // logs 2

// var car = {
//     model: 'Civic',
//     year: 2018,
//     make: 'Honda'
// }

// console.log(car.model) // log 'Civic'

// var carModel = car.model
// console.log(cardModel) // log 'Civic'

startButton.addEventListener("click", function (){
   console.log("start-button-clicked")
   quizSection.classList.remove("is-hidden")
   startSection.classList.add("is-hidden")

renderQuestion()


})

function renderQuestion(){
    questionChoicesEl.innerHTML = "" // clears existing html in question choices container element
    // insert text property from first question object in question array into HTML
    var currentQuestionObj = questions[currentQuestionIndex]
    
    var currentQuestionText = currentQuestionObj.text
    console.log(currentQuestionText); // log "This is question 1"
    questionTextEl.textContent = currentQuestionText;
    
    // create buttons for each choice in first question object and append to HTML
    var currentQuestionChoices = currentQuestionObj.choices

    for (let i = 0; i < currentQuestionChoices.length; i++) {
        var currentChoice = currentQuestionChoices[i];
        // console.log(currentChoice);

        var newButton = document.createElement('button')
        newButton.textContent = currentChoice

        newButton.addEventListener("click",function(e){
            // TODO: Add check if correct button was clicked
            var clickedButtonText = e.target.textContent
            console.log(clickedButtonText);

            // inrecments question index by 1 to render next question
            currentQuestionIndex++
            renderQuestion()
        })

        questionChoicesEl.append(newButton)
    }

}