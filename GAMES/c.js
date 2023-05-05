class Game {
    constructor() {
        this.startButton = document.querySelector('.iBtn')
        this.allButtons = [...document.querySelectorAll('.button')]        
        this.currentButton = undefined
        this.currentButtonPositions = undefined
        this.color = undefined
        this.buttonBgColor = '#fff'
        this.isPlaying = false
        this.defaultLives = 10
        this.lives = this.defaultLives
        this.statusEl = document.querySelector('.message')
        this.liveEl = document.querySelector('.live')
        this.messages = {
            start: 'Find the right button!',
            veryhot: 'This place is getting hot!!!',
            hot: 'You almost there buddy!',
            almosthot: 'I don\'t feel anything yet',
            almostcold: 'Maybe try another one',
            cold: 'This is getting cold',
            verycold: 'C\'mon dude, really?',
            finished: 'Bingo, you made it!',
            sorry: 'Noooo! Wanna try again?'
        }
    }

    changeMessage(message) {
        this.statusEl.textContent = message
    }

    calculate(e, top, left) { 
        if(this.lives === 0 || !this.isPlaying) {           
            return
        }
        
        let calcY = Math.abs(top - this.currentButtonPositions.currentYPos)
        let calcX = Math.abs(left - this.currentButtonPositions.currentXPos)
        let calcMax = Math.max(calcX, calcY)
        let buttonSize = this.currentButtonPositions.size

        if(calcMax === 0){
            this.isPlaying = false
            this.changeMessage(this.messages.finished)
            this.currentButton.style.background = '#FF0000'
            this.startButton.style.display = 'inline-block'
            return
        } else if(calcMax === buttonSize) {
            this.changeMessage(this.messages.veryhot)
            this.color = 'FF4F4F'
        } else if(calcMax === buttonSize * 2) {
            this.changeMessage(this.messages.hot)
            this.color = 'F2F501'
        } else if(calcMax === buttonSize * 3) {
            this.changeMessage(this.messages.almosthot)
            this.color = 'E2FFF7'
        } else if(calcMax === buttonSize * 4) {
            this.changeMessage(this.messages.almostcold)
            this.color = 'B7DFFF'
        } else if (calcMax === buttonSize * 5) {
            this.changeMessage(this.messages.cold)
            this.color = '68BDFF'
        } else if (calcMax >= buttonSize * 6) {
            this.changeMessage(this.messages.verycold)
            this.color = '008FFF'
        }

        e.target.style.background = `#${this.color}`

        this.lives--      
        this.liveEl.textContent = this.lives
        if(this.lives === 0) {
            this.isPlaying = false
            this.changeMessage(this.messages.sorry)
            this.startButton.style.display = 'inline-block'
        }

    }

    init() {
        this.changeMessage(this.messages.start)

        if(!this.isPlaying) {
            this.lives = this.defaultLives
            this.liveEl.textContent = this.lives
            this.isPlaying = true
            this.startButton.style.display = 'none'
        }

        this.currentButton = this.allButtons[this.generateRandomBetween(64)]
        this.currentButtonPositions = {
            currentXPos: this.currentButton.getBoundingClientRect().left,
            currentYPos: this.currentButton.getBoundingClientRect().top,
            size: this.currentButton.getBoundingClientRect().width
        }

        this.allButtons.forEach(button => {
            button.style.background = this.buttonBgColor
            button.addEventListener('click', (e) => {
                this.calculate(e, e.target.getBoundingClientRect().top, e.target.getBoundingClientRect().left)
            })
        })
    }

    generateRandomBetween(maxNum) {
        return Math.floor(Math.random() * maxNum + 1)
    }
}


document.querySelector('.iBtn').addEventListener('click', () => {
    new Game().init()
})

