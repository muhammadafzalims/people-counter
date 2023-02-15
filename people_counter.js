let resultMsg = document.getElementById("hd2")
let message = document.getElementById("message")


let count = 0

function incrementi() {
    count = count + 1
    resultMsg.innerText = count

}

function save(){
    count = 0
    message.innerText = message.innerText + resultMsg.innerText + " - "
    resultMsg.innerText = 0
}