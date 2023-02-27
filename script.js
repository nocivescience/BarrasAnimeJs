const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const numberOfElements = 81;
for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}
staggerVisualizerEl.appendChild(fragment);
const staggersAnimation = anime.timeline({
    targets: '.stagger-visualizer div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay: false,
    duration: 600,
    loopComplete: (a) => console.log('end'),
    //update: () => console.log(staggersAnimation.progress)
})
    .add({
    scale: anime.stagger([2.5, 1], { from: 'center', grid: [9, 9] }),
    translateX: anime.stagger([-100, 100]),
    rotate: anime.stagger([-45, 45]),
    easing: 'easeInOutCirc',
    delay: anime.stagger(10, { from: 'center' })
    })
    .add({
    scale: anime.stagger([2.5, 1], { from: 'center', easing: 'easeInOutCirc' }),
    translateX: anime.stagger([-200, 200]),
    translateY: anime.stagger([-200, 200]),
    rotate: 0,
    delay: anime.stagger(1, { from: 'last' })
    })
    .add({
    rotate: anime.stagger(2, { from: 'center', direction: 'reverse', easing: 'easeInSine' }),
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(10, { from: 'center' })
    })
    .add({
    scale: anime.stagger([2, 1], { grid: [9, 9], axis: 'y' }),
    translateY: anime.stagger([-100, 200], { grid: [9, 9], axis: 'y' }),
    rotate: 0,
    delay: anime.stagger(1, { from: 'last' })
    })
    .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    scale: anime.stagger([1.5, .5], { from: 'center' }),
    rotate: anime.stagger([10, -10], { from: 'last' }),
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
    })
    .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    rotate: anime.stagger([-10, 10], { from: 'last' }),
    scale: 1,
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
    })
    .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    rotate: anime.stagger([-10, 10], { from: 'last' }),
    scale: 1,
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
    })
    .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    rotate: anime.stagger([-10, 10], { from: 'last' }),
    scale: 1,
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
    })
    .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    rotate: anime.stagger([-10, 10], { from: 'last' }),
    scale: 1,
    delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
    })
    .add({
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        rotate: anime.stagger([-10, 10], { from: 'last' }),
    })
    .add({
        translateX: 0,
        translateY: 0,
        rotate: 360,
        scale: 1,
        duration: 2000,
        easing: 'easeInOutSine',
        delay: anime.stagger(50, { from: 'center', grid: [9, 9] })
    });
    staggersAnimation.play();