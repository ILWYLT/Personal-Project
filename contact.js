const qHead = document.querySelectorAll(".qHead");

qHead.forEach( head =>{
    head.addEventListener('click', () => {
        head.firstElementChild.classList.toggle('rotate');
        head.nextElementSibling.classList.toggle('close')
    });
});