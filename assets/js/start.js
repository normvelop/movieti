const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText, qIdx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var childeren = document.querySelectorAll('.answerList');
        for(let i = 0; i < childeren.length; i++){
            childeren[i].disabled = true
            childeren[i].style.WebkitAnimation = "fadeOut 0.5s";
            childeren[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            for(let i = 0; i < childeren.length; i++){
                childeren[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
    }, false);
}

function addNumber(qIdx) {
    var n = document.querySelector('.number');
    n.innerHTML = qnaList[qIdx].n;
}

function goNext(qIdx){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    addNumber(qIdx);
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
}

function begin(){
    main.style.WebkitAnimation = "fadeOut 0.5s";
    main.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        qna.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 200)
        let qIdx = 0;
        goNext(qIdx);
    }, 200);
}