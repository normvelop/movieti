const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];

function calResult() {
    var pointArray = [
        { name: "infp", value: 0, key: 0 },
        { name: "infj", value: 0, key: 1 },
        { name: "isfp", value: 0, key: 2 },
        { name: "isfj", value: 0, key: 3 },
        { name: "intp", value: 0, key: 4 },
        { name: "intj", value: 0, key: 5 },
        { name: "istp", value: 0, key: 6 },
        { name: "istj", value: 0, key: 7 },
        { name: "enfp", value: 0, key: 8 },
        { name: "enfj", value: 0, key: 9 },
        { name: "esfp", value: 0, key: 10 },
        { name: "esfj", value: 0, key: 11 },
        { name: "estp", value: 0, key: 12 },
        { name: "estj", value: 0, key: 13 },
        { name: "entp", value: 0, key: 14 },
        { name: "entj", value: 0, key: 15 },
    ]
    for (let i = 0; i < endPoint; i++) {
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++){
            for(let k = 0; k < pointArray.length; k++){
                if(target.type[j] === pointArray[k].name){
                    pointArray[k].value += 1;
                }
            }
        }
    }

    var resultArray = pointArray.sort(function (a, b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });
    console.log(resultArray);
    let resultWord = resultArray[0].key;
    return resultWord;
}

function setResult(){
    let point = calResult();

    const resultNamedesc = document.querySelector('.nameDesc');
    resultNamedesc.innerHTML = infoList[point].namedesc;

    const resultName = document.querySelector('.name');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('.resultImg');
    var imgURL = './assets/image/image-' + point + '.png';
    resultImg.alt = point;
    resultImg.src = imgURL;
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

    const recommend = document.querySelector('.recommend');
    recommend.innerHTML = infoList[point].rec;

    var goodmatimg = document.createElement('img');
    const goodimgDiv = document.querySelector('.goodmatimg');
    const goodimgsrc = infoList[point].goodimg;
    var goodimgURL = './assets/image/image-' + goodimgsrc + '.png';
    goodmatimg.alt = goodimgsrc;
    goodmatimg.src = goodimgURL;
    goodimgDiv.appendChild(goodmatimg);

    const goodmatchingnamedesc = document.querySelector('.goodmatnamedesc');
    goodmatchingnamedesc.innerHTML = infoList[point].gooddesc;

    const goodmatname = document.querySelector('.goodmatname');
    goodmatname.innerHTML = infoList[point].good;

    var badmatimg = document.createElement('img');
    const badimgDiv = document.querySelector('.badmatimg');
    const badimgsrc = infoList[point].badimg;
    var badimgURL = './assets/image/image-' + badimgsrc + '.png';
    badmatimg.alt = badimgsrc;
    badmatimg.src = badimgURL;
    badimgDiv.appendChild(badmatimg);

    const badmatchingnamedesc = document.querySelector('.badmatnamedesc');
    badmatchingnamedesc.innerHTML = infoList[point].baddesc;

    const badmatching = document.querySelector('.badmatname');
    badmatching.innerHTML = infoList[point].bad;

}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 250)
    })

    setResult();
}

function addAnswer(answerText, qIdx, idx){
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
            select[qIdx] = idx;
            for(let i = 0; i < childeren.length; i++){
                childeren[i].style.display = 'none';
            }
            goNext(++qIdx);
        },250)
    }, false);
}

function addNumber(qIdx) {
    var n = document.querySelector('.number');
    n.innerHTML = qnaList[qIdx].n;
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    addNumber(qIdx);
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
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
        }, 250)
        let qIdx = 0;
        goNext(qIdx);
    }, 250);
}