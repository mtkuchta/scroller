class Scroller {
    constructor() {
        this.sections = [...document.querySelectorAll('section')]

        this.currentSectionIndex = this.sections.findIndex(this.isScrolledIntoView);
        this.navItems = document.querySelectorAll('.navigation');
        this.isThrotlled = false;
        this.findActiveNavItem();
        this.navigation();
    }

    listenScroll() {

        if (this.isThrotlled) return;
        this.isThrotlled = true;

        setTimeout(() => {
            this.isThrotlled = false;
        }, 800)

        const test = event.deltaY;
        const direction = event.deltaY > 0 ? 1 : -1;

        this.scroll(direction)
    }


    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemLeft = rect.left;
        const elemRight = rect.right;

        const isVisible = (elemLeft >= 0) && (elemRight <= window.innerWidth)
        return isVisible;

    }


    scroll(direction) {
        if (direction === -1) {
            const isFirstSection = this.currentSectionIndex === 0;
            if (isFirstSection) return
        } else if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        }

        this.currentSectionIndex = this.currentSectionIndex + direction;
        this.scrollToSection();
    }

    scrollToSection() {
        this.findActiveNavItem();
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    }

    navigation() {
        this.navItems.forEach((item, index) => item.addEventListener('click', () => {
            this.currentSectionIndex = index;
            this.scrollToSection();
        }))

    }

    findActiveNavItem() {

        this.navItems.forEach((item, index) => {
            if (index === this.currentSectionIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })

    }
}