const questionAnswer = document.getElementsByClassName('box');

for (let i = 0; i < questionAnswer.length; i++) {
    questionAnswer[i].addEventListener('click', function (){
        this.classList.toggle('active');
    });
};