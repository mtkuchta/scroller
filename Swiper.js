class Swiper {
    constructor() {
        this.initialX = null;
        this.initialY = null;

        document.addEventListener('touchstart', (e) => this.startTouch(e))
        document.addEventListener('touchmove', (e) => this.touchMove(e))

        this.events = {
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch() {
        event.preventDefault()
        this.initialX = event.touches[0].clientX;
        this.initialY = event.touches[0].clientY;
    }
    touchMove() {

        if (!this.initialX) return
        const currentX = event.touches[0].clientX
        const currentY = event.touches[0].clientY

        const diffX = this.initialX - currentX;
        const diffY = this.initialY - currentY;
        console.log(this.initialX, currentX, diffX);

        if (diffX < 0) {
            document.dispatchEvent(this.events.swipeRight)
        } else if (diffX > 0) {
            document.dispatchEvent(this.events.swipeLeft)
        }

        this.initialX = null;
        this.initialY = null;
    }



}

const swiper = new Swiper();