
function getMyAnswer(question_id){

    const ans_from_my_answers = my_answers.find(ans_from => ans_from.quiz_id === question_id)  
    // console.log(ans_from_my_answers)
    return ans_from_my_answers
}

function calculatePercentageAndComment(correct_questions_count){

    const percentage = Math.round(correct_questions_count / 20 * 100)
    let comment = {
        color_: '',
        message: '' 
    }
    if(percentage < 80){
        retake_.classList.remove('d-none')
    }
    if(percentage > 79){
        comment.message = 'You passed'
        comment.color_ = 'success'
    }
    else if(percentage > 49){
        comment.message = 'Fairly passed'
        comment.color_ = 'fair'
    }
    else{
        comment.message = 'You failed'
        comment.color_ = 'poor'
    }

    return {
        percentage, comment
    }

}


function calculateScore(){
    let correct = 0;
    let incorrect = 0;
    const questions_copy = questions.slice()

    for (let i = 0; i < questions_copy.length; i++) {
        const question_ = questions_copy[i];
        const correct_ans = question_.answers.find(quiz_ans => quiz_ans.correct === true)

        getMyAnswer(question_.id)

        if(getMyAnswer(question_.id).answer_id === correct_ans.id){
            correct += 1;
        }
        else{
            incorrect += 1;
        }
    }

    return {
        correct, incorrect
    }

}

quiz_form.addEventListener('submit', e => submitForGrading(e) )

function submitForGrading(e){
    e.preventDefault()

    const answered_ = my_answers.filter(a => a.answer_id !== null)
    const unanswered_ = my_answers.filter(a => a.answer_id === null)


    // if(unanswered_.length > 0 ){
    //     alert("You have not answered all the questions")
    // }
    // else{
        const score = calculateScore()
        const output = calculatePercentageAndComment(score.correct)

        results_holder.classList.remove('d-none')
        body_holder.classList.add('d-none')

        results_percentage.innerHTML = `${output.percentage}%`
        results_comment.innerHTML = output.comment.message
        results_comment.classList.add(output.comment.color_)

        for (let index = 0; index < score_txt.length; index++) {
            const element = score_txt[index];
            element.innerHTML = score.correct 
        }
    // }
}


function retake(){
    // my_answers = []
    body_holder.classList.remove('d-none')
    results_holder.classList.add('d-none')
    populateAnswerSheet()
}