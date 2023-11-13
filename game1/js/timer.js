const timer = document.getElementById('time');
const btn = document.getElementById('btn');

const updateTime1 = () => {
    let time1 = 30;
    const timer1 = setInterval(function(){
    time1--;
    timer.innerHTML = time1;
    if(time1 === 0){
        clearInterval(timer1);
        timer.innerHTML = '30';
    }
    }, 1000)
}
btn.addEventListener('click', updateTime1)




export default timer;







    // const updateTime = () =>{ 
    //     let time = 3;
    // const update = () => {
    //     let seconds = time % 60;
    //     timer.innerHTML = `${seconds}`
    //     time--;
    //     if(time === 0){
    //         clearInterval(seconds);
    //         timer.innerHTML = 'game over'
    //     }
    // }
    // setInterval(update, 1000)
    // }