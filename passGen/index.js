const chars = `1234567890-arstgmneioxcdvzkhQWFPBJLUY:ARSTGMNEIOXCDVZKH<>,.!@#\$%^&\\*()`
const length_el = document.getElementById("length_el")
const num_el = document.getElementById("pass_num_el")
const passwords_el = document.getElementById("passwords")

function generatePasswords() {
    const length = length_el.value
    const numberOfPasswords = num_el.value

    for (let num = 1; num <= numberOfPasswords; ++num) {
        const password_el = generatePassword(num, length)
        passwords_el.appendChild(password_el)
    }
    passwords_el.setAttribute("style", "padding: 30px")
}

function generatePassword(id, len) {
    let cur_pas = ``
        for (let passIndex = 0; passIndex < len; ++passIndex)
            cur_pas += chars[ Math.floor( Math.random() * chars.length ) ]

    const password = createPassField(id)
    password.textContent = cur_pas
    password.value = cur_pas
    password.addEventListener("click", () => savepass(id))

    return password
        
}

function createPassField (id) {
    const password_element = document.createElement('p')
    password_element.setAttribute('id', id)
    return password_element
}

function savepass (id) {
    let copy = document.getElementById(id)
    console.log(copy.value)

    navigator.clipboard.writeText(copy.value)
    alert(`copied pass num: ${id}`)
}