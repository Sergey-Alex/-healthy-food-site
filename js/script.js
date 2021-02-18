import tabs from './modules/tabs';
import modale from './modules/modale';
import timer from'./modules/timer';
import calc from'./modules/calc';
import cards from'./modules/cards';
import forms from'./modules/forms';
import slider from'./modules/slider';
import {openModal} from './modules/modale'
window.addEventListener('DOMContentLoaded', ()=>{
    const modalTimerId = setTimeout(()=> openModal('.modal', modalTimerId), 50000)
    tabs();
    timer();
    modale('[data-modal]', '.modal', modalTimerId);
    cards();
    calc();
    forms();
    slider();

});
