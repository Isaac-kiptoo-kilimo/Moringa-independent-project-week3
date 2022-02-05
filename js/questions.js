const my_answers = []

function populateAnswerSheet(){
    questions.slice().map((question, index) => {
        // console.log(question.id)
        my_answers.push({quiz_id: question.id, answer_id: null})
    })
}

populateAnswerSheet()

function getAnsweredUnanswered(){

    const answered_ = my_answers.filter(a => a.answer_id !== null)
    const uanswered_ = my_answers.filter(a => a.answer_id === null)

    for (let index = 0; index < answered_txt.length; index++) {
        const element = answered_txt[index];
        element.innerHTML = answered_.length
        
    }

    for (let index = 0; index < unanswered_txt.length; index++) {
        const element = unanswered_txt[index];
        element.innerHTML = uanswered_.length
        
    }
}


const selectAnswer = (quiz_id, answer_id) => {
    const ans_ = my_answers.find(ans__ => ans__.quiz_id === quiz_id)
    ans_.answer_id = answer_id
    getAnsweredUnanswered()
}

function escapeHTML(s) {
    let lookup = {
        '&': "&amp;",
        '"': "&quot;",
        '\'': "&apos;",
        '<': "&lt;",
        '>': "&gt;",
    };
    return s.replace( /[&"'<>]/g, c => lookup[c] );
}

const answer = (quiz_id, answer) => {
    const ans = `
        <div class="answer-holder">	
            <input type="radio" name="quiz_${quiz_id}" onclick="selectAnswer(${quiz_id}, ${answer.id})" />
            <label for="" class="answer_label">${escapeHTML(answer.answer)}</label>
        </div>
    `

    return ans
}

const single_question = (question) => {
    let answers = '';
    for(let i = 0; i < question.answers.length; i ++){
        answers += answer(question.id, question.answers[i])
    }

    const quiz_div =   `
            <div class="question">
                <p>${question.id}. ${escapeHTML(question.question)} </p>
                         
                <div class="answers">                 
                    ${answers}
                </div>
            </div>
    `;

    return quiz_div
}

const single_block_question = (question) => {
    let answers = '';
    for(let i = 0; i < question.answers.length; i ++){
        answers += answer(question.id, question.answers[i])
    }

    let next_quiz = null;
    let prev_quiz = null;

    if(question.id === 1){
        prev_quiz = null
    }
    else{
        prev_quiz = question.id - 1
    }

    if(question.id === 20){
        next_quiz = null
    }
    else{
        next_quiz = question.id + 1
    }

    const quiz_div =   `
        <div class="question">
            <p>${question.id}. ${escapeHTML(question.question)} </p>
                    
            <div class="answers">                 
                ${answers}
            </div>
        </div>
        
        <div class="group-buttons">
            <a href="javascript:void(0)" onclick="${prev_quiz && `renderSingleQuestion(${prev_quiz})`}" class="common-btn blue">PREVIOUS QUESTION</a>
            <a href="javascript:void(0)" class="common-btn blue">1/20</a>
            <a href="javascript:void(0)" onclick="${next_quiz && `renderSingleQuestion(${next_quiz})`}" class="common-btn blue">NEXT QUESTION</a>
        </div>
    `;

    return quiz_div

}


function renderAllQuestions(){
    let questions_to_render = ''
    questions.slice().map((question, index) =>{
        questions_to_render += single_question(question)
    })

    questions_holder.innerHTML = questions_to_render
}

function renderSingleQuestion(quiz_id){
    const quizz = questions.find(question => question.id === quiz_id)
    console.log(quizz)
    if(quizz){
        questions_holder.innerHTML = " " + single_block_question(quizz)
    }
    else{
        alert("The questions does not exist")
    }
    // questions_holder.innerHTML = "single question"
}

