
const login = () => {
    const name_ = username.value
    const regno = regNo.value

    user.loggedInStatus = true
    user.name = name_
    user.regNo = regno

    displayAfterLogin()
}

const logout = () => {
    user.loggedInStatus = false
    user.name = ''
    user.regNo = ''
}

const displayAfterLogin  = () => {
    login_holder.classList.add('d-none')
    body_holder.classList.remove('d-none')
    populateAnswerSheet()
}

login_form.addEventListener('submit', e => {
    e.preventDefault()
    login()
})