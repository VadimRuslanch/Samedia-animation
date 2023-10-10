const menuItemsElement = document.querySelectorAll('.menu__item');
const menu = document.querySelector('.menu')
const menuList = document.querySelectorAll('.menu__item')
const greenLeaf = document.querySelector('#green-leaf');
const brownLeaf = document.querySelector('#brown-leaf')

const firstMenuElement = menu.querySelector('#animation-first-position')
const secondMenuElement = menu.querySelector('#animation-second-position')
const thirdMenuElement = menu.querySelector('#animation-third-position')
const fourthMenuElement = menu.querySelector('#animation-fourth-position')

let allstep = 0;

// Анимация листочка
menuList.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const step = 4;
        const stepMove = [0, 4, 8, 12, 16]
        const greenLeafPositionX = greenLeaf.offsetLeft;
        const brownLeaffPositionX = brownLeaf.offsetLeft;

        const moveLeaf = (item) => {
            if (item) {
                allstep = allstep + step;
                greenLeaf.style.left = `${greenLeafPositionX + step}px`;
                brownLeaf.style.left = `${brownLeaffPositionX - step}px`;
            } else {
                allstep = allstep - step;
                greenLeaf.style.left = `${greenLeafPositionX - step}px`;
                brownLeaf.style.left = `${brownLeaffPositionX + step}px`;
            }
        };

        if (e.target == firstMenuElement && allstep < stepMove[1]) {
            moveLeaf(true);
        } else if (e.target == firstMenuElement && allstep > stepMove[0]) {
            moveLeaf(false);
        };

        if (e.target == secondMenuElement && allstep < stepMove[2]) {
            moveLeaf(true);
        } else if (e.target == secondMenuElement && allstep > stepMove[1]) {
            moveLeaf(false);
        };

        if (e.target == thirdMenuElement && allstep < stepMove[3]) {
            moveLeaf(true);
        } else if (e.target == thirdMenuElement && allstep > stepMove[2]) {
            moveLeaf(false);
        };

        if (e.target == fourthMenuElement && allstep < stepMove[4]) {
            moveLeaf(true);
        } else if (e.target == fourthMenuElement && allstep > stepMove[3]) {
            moveLeaf(false);
        };
    })
})

// Возвращение анимации в исходное положение
menu.addEventListener('mouseleave', () => {
    allstep = 0;
    greenLeaf.removeAttribute('style');
    brownLeaf.removeAttribute('style');
});