const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft

    if(pipePosition <= 80 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '50px'
        mario.style.marginLeft = '25px'
        
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`
    }
}, 10);

document.addEventListener('keydown', jump)