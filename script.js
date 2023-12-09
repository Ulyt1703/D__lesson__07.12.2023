/* let mainBox = document.querySelector('.box')
mainBox.classList.add('any') */

/* let blok = document.querySelector(".blok")
let number = 115
if(number > 17){
    blok.classList.add("nev")
}
else{
    blok.classList.remove("nev")
} */

let btn = document.querySelector(".btn")
let bestModal = document.querySelector(".best__modal-text-2")
btn.addEventListener("click", function(){
    if(bestModal.className === "best__modal-text-2"){
        bestModal.classList.add("new")
    }
    else{
        bestModal.classList.remove("")
    }
})

let button = document.querySelector(".backdrop")
button.addEventListener("click", function(){
    if(bestModal.className === "best__modal-text-2"){
        bestModal.classList.add("")
    }
    else{
        bestModal.classList.remove("new")
    }
})
