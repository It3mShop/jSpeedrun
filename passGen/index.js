let chars = `1234567890-arstgmneioxcdvzkhQWFPBJLUY:ARSTGMNEIOXCDVZKH<>,.!@#\$%^&\\*()`
let length_el = document.getElementById("length_el")
let num_el = document.getElementById("pass_num_el")

function setLength() {
    return length_el.value
}

function setNumberOfPasswords () {
    return num_el.value
}

function generatePasswords() {
    let length = setLength()
    let NumberOfPasswords = setNumberOfPasswords()

    for (let num = 1; num <= NumberOfPasswords; ++num) {
        let cur_pas = ``
        for (let passIndex = 0; passIndex < length; ++passIndex)
            cur_pas += chars[ Math.floor( Math.random() * chars.length ) ]

        document.getElementById(`password${num}`).textContent = cur_pas
        document.getElementById(`password${num}`).hidden = false
    }
}

function savepass (id) {
    let copy = document.getElementById(`password${id}`)

    navigator.clipboard.writeText(copy.value)
    alert(`copied pass num: ${id}`)
}