
// const numberSpan = document.querySelector(".span");
// const substract = document.querySelector(".substract");
// const reset = document.querySelector(".reset");
// const add = document.querySelector(".add");

// numberSpan.style.color = "red"

// substract.addEventListener("click", ()=> {
//     numberSpan.innerHTML--
// });
// reset.addEventListener("click", ()=> {
//     numberSpan.innerHTML = 0
// });
// add.addEventListener("click", ()=> {
//     numberSpan.innerHTML++
// });


const numberSpan = document.querySelector('.span');
const buttons = document.querySelector('.buttons-container');

buttons.addEventListener('click', (ev)=> {
    if(ev.target.classList.contains('substract')){
        numberSpan.innerHTML--
    }
    if(ev.target.classList.contains('reset')){
        numberSpan.innerHTML = 0
    }
    if(ev.target.classList.contains('add')){
        numberSpan.innerHTML++
    }
    setColor();
})

const setColor = ()=> {
    if(numberSpan.innerHTML > 0){
        numberSpan.style.color = 'blue'
    }
    else if(numberSpan.innerHTML < 0){
        numberSpan.style.color = 'gray'

    }
    else{
        numberSpan.style.color = 'red'
    }
}