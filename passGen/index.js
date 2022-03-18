const chars = `1234567890-arstgmneioxcdvzkhQWFPBJLUY:ARSTGMNEIOXCDVZKH<>,.!@#\$%^&\\*()`
const length_el = document.getElementById("length_el")
const num_el = document.getElementById("pass_num_el")
const passwords_el = document.getElementById("passwords")

function generatePasswords() {
    const length = length_el.value
    const NumberOfPasswords = num_el.value

    for (let num = 1; num <= NumberOfPasswords; ++num) {
        const password_el = generatePassword(num, length)
        passwords_el.appendChild(password_el)
    }
    passwords_el.hidden="true"
}

function generatePassword(id, len) {
    let cur_pas = ``
        for (let passIndex = 0; passIndex < len; ++passIndex)
            cur_pas += chars[ Math.floor( Math.random() * chars.length ) ]

    const password = createPassField(id)
    password.innerText = cur_pas
    password.addEventListener("click", () => savepass(id))
    return password
        
}

function createPassField (id) {
    const password_element = document.createElement('p')
    password_element.setAttribute('id', id)
    return password_element
}

function savepass (id) {
    let copy = document.getElementById(`password${id}`)

    navigator.clipboard.writeText(copy.value)
    alert(`copied pass num: ${id}`)
}