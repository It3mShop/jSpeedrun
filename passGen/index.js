let chars = `1234567890-arstgmneioxcdvzkhQWFPBJLUY:ARSTGMNEIOXCDVZKH<>,.!@#\$%^&\\*()`
let length_el = document.getElementById("length_el")

let length = 0
function setLength() {
    length = length_el.value
    return length
}

function lenChange() {
    console.log("you change the len val to" + length_el.value)
    setLength()
}


function generatePasswords() {
    let length = setLength()
    console.log(length)
    for (let num = 1; num <= 4; ++num) {
        let tmp_pas = ``
        for (let passIndex = 0; passIndex < length; ++passIndex) {
            tmp_pas += chars[ Math.floor( Math.random() * chars.length ) ]
            //console.log(chars[ Math.floor( Math.random() * chars.length ) ])
        }
        console.log(tmp_pas)
        document.getElementById(`password${num}`).textContent = tmp_pas
        document.getElementById(`password${num}`).hidden = false
        document.getElementById("password1").textContent = tmp_pas
    }
}

function savepass (id) {
    console.log(this)
    let copy = document.getElementById(`password${id}`)
    //copy.select()
    navigator.clipboard.writeText(copy.innerText)
    alert(`copied pass num: ${id}`)
}