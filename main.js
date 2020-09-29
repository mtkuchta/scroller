document.addEventListener('DOMContentLoaded', function () {
    const scroller = new Scroller();

    document.addEventListener('wheel', (e) => scroller.listenScroll(e))

    document.addEventListener('swipeLeft', () => scroller.scroll(1))
    document.addEventListener('swipeRight', () => scroller.scroll(-1));

    document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            case 39:
                return scroller.scroll(1)
            case 37:
                return scroller.scroll(-1)
        }

    })


})