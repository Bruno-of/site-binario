const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é a representação binária do número decimal 13?",
    answers: [
      { text: "1100", correct: false },
      { text: "1101", correct: true },
      { text: "1110", correct: false},
      { text: "1011", correct: false }
    ]
  },
  {
    question: "Qual é o valor decimal do número binário 1010?",
    answers: [
      { text: "8", correct: false },
      { text: "9", correct: false },
      { text: "10", correct: true },
      { text: "11", correct: false }
    ]
  },
  {
    question: 'Qual é a operação lógica que resulta em 1 somente quando ambos os operandos são 1?',
    answers: [
      { text: 'AND', correct: true },
      { text: 'OR', correct: false },
      { text: 'XOR', correct: false },
      { text: "NOT", correct: false }
    ]
  },
  {
    question: 'Qual é o resultado da operação binária 1011 AND 1100?',
    answers: [
      { text: '1000', correct: true },
      { text: '1010', correct: false },
      { text: '1100', correct: false },
      { text: "1001", correct: false }
    ]
  },
  {
    question: 'Qual é o complemento de 1 em um sistema binário?',
    answers: [
      { text: '1', correct: false },
      { text: '10', correct: true },
      { text: '0', correct: false },
      { text: '11', correct: false }
    ]
  },
  {
    question: 'Qual número binário representa o número decimal 15?',
    answers: [
      { text: '1110', correct: false },
      { text: '1011', correct: false },
      { text: '1111', correct: true },
      { text: '1101', correct: false }
    ]
  },
  {
    question: 'Qual é o resultado da adição binária 1011 + 1101?',
    answers: [
      { text: '10011', correct: false },
      { text: '10111', correct: false },
      { text: '11101', correct: false },
      { text: '10011', correct: true },
    ]
  },
  {
    question: 'Qual é o maior valor decimal que pode ser representado com um byte(8 bits)?',
    answers: [
      { text: '127', correct: false },
      { text: '256', correct: false },
      { text: '1024', correct: false },
      { text: '255', correct: true },
    ]
  },
  {
    question: 'Qual é a representação binaria do numero 2.5?',
    answers: [
      { text: '11.01', correct: false },
      { text: '10.11', correct: false },
      { text: '10.01', correct: false },
      { text: '10.1', correct: true },
    ]
  },
  {
    question: 'Qual é o numero binario correspondente ao numero hexadecimal "A"',
    answers: [
      { text: '1001', correct: false },
      { text: '1011', correct: false },
      { text: '1110', correct: false },
      { text: '1010', correct: true },
    ]
  },
]
