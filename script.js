const quizData = [
  {
    question : "In how many ways can the following prizes be given away to a class of 30 students, first and second in Mathematics, first and second in physics, first in chemistry and first in English ?",
    a: "30!4!",
    b: "(30)^4 x (29)^4",
    c: "[(30)^3]-1",
    d: "(30)^4 x (29)^2",
    correct : "d"
  },
  {
    question : "If two cards are drawn at random from a pack of cards, how many outcomes are possible without replacement?",
    a: "52*52",
    b: "52!",
    c: "52*51",
    d: "52*50",
    correct : "d"
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz(){
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
  answerEls.forEach((answerEl => answerEl.checked = false));

}

function getSelected(){
  let answer

  answerEls.forEach(answerEl => {
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click',() => {
  const answer = getSelected()
  console.log(answer)
})
