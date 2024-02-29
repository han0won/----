gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let hotelsSection = document.querySelector('#hotels'),
    hotelsContainer = document.querySelector('#hotels-wrap'),
    tween;
document.querySelectorAll('.anchor').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetElem = document.querySelector(e.target.getAttribute('href')),
            y = targetElem;
        if (targetElem && hotelsContainer.isSameNode(targetElem.parentElement)) {
            let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
                totalMovement = (hotels.length - 1) * targetElem.offsetWidth;
            y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        gsap.to(window, {
            scrollTo: {
                y: y,
                autoKill: false,
            },
            duration: 1,
        });
    });
});


const hotels = gsap.utils.toArray('#hotels-wrap .hotel');
tween = gsap.to(hotels, {
    xPercent: -100 * (hotels.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '#hotels-wrap',
        pin: true,
        start: 'top top',
        scrub: 1,
        snap: {
            snapTo: 1 / (hotels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
        },
        end: () => '+=' + (hotelsContainer.offsetWidth - innerWidth),
    },
});
