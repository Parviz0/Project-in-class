/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        {
            id: Math.random(),
            name: "Логан" 
        },
        {
            id: Math.random(),
            name: "Лига справедливости"
        },
        {
            id: Math.random(),
            name: "Ла-ла лэнд" 
        },
        {
            id: Math.random(),
            name: "Одержимость" 
        },
        {
            id: Math.random(),
            name: "Скотт Пилигрим против..." 
        }
    ],
    liked: []
};

let genre = document.querySelector('.promo__genre')
let bg = document.querySelector('.promo__bg')
let txt = document.querySelector('.promo__adv-title')
let child = document.querySelectorAll(".imog");
let promo = document.querySelector('.promo__adv')
child.forEach(chil => {
    promo.removeChild(chil);
})

genre.innerHTML = "Драма"
bg.style.backgroundImage = 'url(./img/bg.jpg)'

let form = document.forms.add
let inp = document.querySelector('.adding__input')
let check = document.querySelector('.check')
let btn = document.querySelector('.btn')

check.onchange = () => {
    check.checked = !check.checked
    console.log(check.checked);
}

// form.onsubmit = (event) => {
//     event.preventDefault()

//     if(check == true){
//         console.log(check);
//         movieDB.liked.push(submit( ))
//     }else{
//         console.log(check);
//         movieDB.movies.push(submit( ))
//     }
// }




// function submit() {
//     let user = {}

//     let fm = new FormData(form)

//     fm.forEach((value, key) => {
//         user[key] = value
//     })

//     return user
// }