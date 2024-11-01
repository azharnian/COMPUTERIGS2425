import { box } from './box.js';

export const checkKeydownEvent = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'd')
            box.moveRight();
        else if (e.key === 'a')
            box.moveLeft();
        else if (e.key === 's')
            box.moveDown();
        else if (e.key === 'w')
            box.moveUp();
        else if (e.key === 'h')
            if (box.isShowed) {
                box.isShowed  = false;
                box.hide();
            } else {
                box.isShowed  = true;
                box.show();
            }
    })

}