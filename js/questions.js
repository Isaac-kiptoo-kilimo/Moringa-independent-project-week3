
const my_answers = []

questions.slice().map((question, index) => {
    my_answers.push({quiz_id: question.id, answer_id: null})
})

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
                questions         <div class="answers">                 
                    ${answers}
                </div>
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

renderAllQuestions()