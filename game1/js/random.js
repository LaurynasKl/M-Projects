const box = document.getElementById('box');
const btn = document.getElementById('btn');
const score = document.getElementById('score');
const restart = document.getElementById('restart');
const points = document.getElementById('points');

const updateTime = () => {
    let time = 30;
const update = setInterval(function() {
    time--;
    box.style.top = Math.floor(Math.random() * 487) + 'px';
    box.style.left = Math.floor(Math.random() * 775) + 'px';
    if(time === 0){
        clearInterval(update);
        score.style.display = 'block';
        restart.style.display = 'block';
        points.style.display = 'block';
    }
}, 1000)
}
btn.addEventListener('click', updateTime)


restart.addEventListener('click', function(){
    score.style.display = 'none';
    restart.style.display = 'none';
    points.style.display = 'none';
})

export default box;