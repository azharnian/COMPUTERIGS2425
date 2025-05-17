import {cat} from "./cat.js"

export const checkKeyDown = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'z')
        {
            cat.sleep();
        } else if (e.key === 'n')
        {
            cat.default();
        } else if (e.key === 'd')
        {
            cat.moveRight();
        } else if (e.key === 'a')
        {
            cat.moveLeft();
        } else if (e.key === 's')
        {
            cat.moveDown();
        }
    })
}