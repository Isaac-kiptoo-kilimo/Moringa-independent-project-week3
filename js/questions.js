const questions_holder = document.getElementById('questions')
const my_answers = []

questions.slice().map((question, index) => {
    my_answers.push({quiz_id: question.id, answer_id: null})
})

const selectAnswer = (quiz_id, answer_id) => {
    const ans_ = my_answers.find(ans__ => ans__.quiz_id === quiz_id)
    ans_.answer_id = answer_id
    console.log(my_answers)
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
    // console.log(answer)
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


function renderAllQuestions(){
    let questions_to_render = ''
    questions.slice().map((question, index) =>{
        // console.log(index, question)
        questions_to_render += single_question(question)
    })

    questions_holder.innerHTML = questions_to_render
}

renderAllQuestions()