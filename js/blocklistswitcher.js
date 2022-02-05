const selectActiveSwitch = () => {
    if(selectedDisplayStyle === 'list'){
        listSwitch.classList.add('active-switch')
        blockSwitch.classList.remove('active-switch')
        renderAllQuestions()
    }
    else if(selectedDisplayStyle === 'block'){
        listSwitch.classList.remove('active-switch')
        blockSwitch.classList.add('active-switch')
        renderSingleQuestion(1)
    }
}

selectActiveSwitch()

const onClickSelectActiveSwitch = (switchname) => {
    console.log('clicked', switchname)
    selectedDisplayStyle = switchname
    selectActiveSwitch()
}