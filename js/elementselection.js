const total_txt = document.querySelectorAll('.total-txt')
const answered_txt = document.querySelectorAll('.answered-txt')
const unanswered_txt = document.querySelectorAll('.unanswered-txt')
const score_txt = document.querySelectorAll('.score-txt')

const questions_holder = document.getElementById('questions')
const quiz_form = document.getElementById('quiz-form')

const listSwitch = document.getElementById('list')
const blockSwitch = document.getElementById('block')


const login_holder = document.getElementById('login-holder')
const results_holder = document.getElementById('results-holder')
const body_holder = document.getElementById('body-holder')


const results_percentage = document.getElementById('results-percentage')
const results_comment = document.getElementById('results-comment')

const login_form = document.getElementById("login-form")
const username = document.getElementById('name')
const regNo = document.getElementById('regNo')


let selectedDisplayStyle = "list";

let user = {
    loggedInStatus: false,
    name: '',
    regNo: ''
}