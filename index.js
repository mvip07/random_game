let number = document.querySelectorAll("#number")
let input = document.getElementById("display")
let back = document.querySelector("#back")
let ok = document.querySelector("#ok")
let IAgree = document.querySelector("#IAgree")
let NumberOfAttempts = null
let MaxOfNumber = null
let RandomNumber = null
let count = 1

const ChooseRandomNumber = (max) => Math.floor(Math.random() * max)

const AlertFunc = (spanInnerHTML, typeAlert, load) => {
    const alert = document.querySelector('.alert')

    const span = document.createElement('span')
    span.innerHTML = `${spanInnerHTML}`
    alert.append(span)

    alert.classList.add(`show`)
    alert.classList.add(`${typeAlert}`)

    setTimeout(() => {
        alert.classList.remove(`show`)
        alert.classList.remove(`${typeAlert}`)

        if (load) window.location.reload()
      
        let child = document.querySelector('span');
        alert.removeChild(child)
        
    }, 2000)
}

for (let i of number) i.addEventListener("click", () => input.innerText += i.textContent)

back.addEventListener('click', () => {
    input.textContent = input.textContent.slice(0, -1)
})

IAgree.addEventListener('click', () => {
    const card = document.querySelector('.card')
    const modal = document.querySelector('.modal')

    card.classList.remove('blur')
    modal.classList.remove('show')

    NumberOfAttempts = document.querySelector("#NumberOfAttempts").value
    MaxOfNumber = document.querySelector("#MaxOfNumber").value

    RandomNumber = ChooseRandomNumber(Number(MaxOfNumber))
})

ok.addEventListener('click', () => {
    if (NumberOfAttempts != null && MaxOfNumber != null && RandomNumber != null) {
        if (NumberOfAttempts <= 0) {
            AlertFunc(`<strong>You Lose !</strong> Siz men o'ylagan soni topa olmadingiz. Men o'ylagan son ${RandomNumber}`, `alert-danger`, true)
        } if (input.textContent == RandomNumber) {
            AlertFunc(`<strong>You Win !</strong> Siz yutingiz ${count} ta urunishda`, `alert-success`, true)
        } else if (Number(input.textContent) > RandomNumber) {
            AlertFunc(`<strong>You Find !</strong> Sizni kiritgan soningiz katta men o'ylagan sondan. Urunishlar soni ${count} ta`, `alert-warning`, false)
        } else if (Number(input.textContent) < RandomNumber) {
            AlertFunc(`<strong>You Find !</strong> Sizni kiritgan soningiz kichik men o'ylagan sondan. Urunishlar soni ${count} ta`, `alert-warning`, false)
        } 
    }
    count++
    NumberOfAttempts--
    input.textContent = ""
})