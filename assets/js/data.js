const qnaList = [
    {
        n: '1',
        q: '보고싶은 영화가 곧 개봉을 한다!',
        a: [
            { answer: '시간은 언제가 좋겠고~ 자리는 여기가 좋겠다!', type: ['infj', 'isfj', 'intj', 'istj', 'enfj', 'esfj', 'entj', 'estj'] },
            { answer: '오! 개봉하면 영화관 가야겠다!', type: ['infp', 'isfp', 'intp', 'istp', 'enfp', 'esfp', 'entp', 'estp'] }
        ]
    },
    {
        n: '2',
        q: '최애 배우의 새로운 연기시도! <br>하지만 내 취향의 영화는 아니다..',
        a: [
            { answer: '그래도 최애 배우인데 봐야지!', type: ['infp', 'infj', 'isfp', 'isfj', 'enfp', 'enfj', 'esfp', 'esfj'] },
            { answer: '내 취향 아니니까 집에서 클립만 찾아보자!', type: ['intp', 'intj', 'istp', 'istj', 'entp', 'entj', 'estp', 'estj'] }
        ]
    },
    {
        n: '3',
        q: '최근에 개봉한 영화가 보고싶어졌다.',
        a: [
            { answer: '친구들아 뭐하니? 영화보러 가자~', type: ['enfp', 'enfj', 'entp', 'entj', 'estp', 'estj', 'esfp', 'esfj'] },
            { answer: '영화는 혼자 봐야지! 혼영이 좋아~', type: ['infp', 'infj', 'intp', 'intj', 'istp', 'istj', 'isfp', 'isfj'] }
        ]
    },
    {
        n: '4',
        q: '친구가 말한다.<br>"나 너무 속상한 일 있었어서<br>기분전환으로 영화 5편 연속으로 봤어."',
        a: [
            { answer: '5편이나?! 무슨 영화가 5편이나 있어?!', type: ['intp', 'intj', 'istp', 'istj', 'entp', 'entj', 'estp', 'estj'] },
            { answer: '헉! 뭐 때문에 속상했어ㅠㅠ', type: ['infp', 'infj', 'isfp', 'isfj', 'enfp', 'enfj', 'esfp', 'esfj'] }
        ]
    },
    {
        n: '5', 
        q: '방금 본 영화가 너무 재밌었다.',
        a: [
            { answer: '기분좋게 왓챠피디아에 별점을 남기고 잠든다', type: ['enfp', 'enfj', 'entp', 'entj', 'infp', 'infj', 'intp', 'intj'] },
            { answer: '과몰입 시작! 영화 정보 검색가보자~', type: ['esfp', 'esfj', 'estp', 'estj', 'isfp', 'isfj', 'istp', 'istj'] }
        ]
    },
    {
        n: '6', 
        q: '영화관에 왔다<br>그런데 보고싶은 영화가 a열만 남아있다.',
        a: [
            { answer: '나중에 또 오기 귀찮으니까 그냥 봐야겠다', type: ['infp', 'isfp', 'intp', 'istp', 'enfp', 'esfp', 'entp', 'estp'] },
            { answer: '문제없다!! 왜냐 이미 예매를 해놨기 때문.', type: ['infj', 'isfj', 'intj', 'istj', 'enfj', 'esfj', 'entj', 'estj'] }
        ]
    },
    {
        n: '7', 
        q: '절절한 짝사랑 영화 속<br>주인공이 상처받고 펑펑 운다.',
        a: [
            { answer: '답답하네.. 운다고 해결이 되냐? 뭐라도 좀 해봐!', type: ['intp', 'intj', 'istp', 'istj', 'entp', 'entj', 'estp', 'estj'] },
            { answer: '과몰입에 울컥ㅠㅠ 주인공이 나고 내가 주인공..', type: ['infp', 'infj', 'isfp', 'isfj', 'enfp', 'enfj', 'esfp', 'esfj'] }
        ]
    },
    {
        n: '8', 
        q: '타임머신이 나오는 SF영화를 보는 당신',
        a: [
            { answer: '나도 언젠간 시간 여행할 수 있겠지? 그러면 그때 뭐하지?', type: ['enfp', 'enfj', 'entp', 'entj', 'infp', 'infj', 'intp', 'intj'] },
            { answer: '말이 안 되지만 일단 보자 이건 영화니까.. 집중 집중!', type: ['esfp', 'esfj', 'estp', 'estj', 'isfp', 'isfj', 'istp', 'istj'] }
        ]
    },
    {
        n: '9', 
        q: '매일밤 파티를 즐기는<br>영화 속 주인공을 본 나는?',
        a: [
            { answer: '보기만 해도 기빨린다..', type: ['infp', 'infj', 'intp', 'intj', 'istp', 'istj', 'isfp', 'isfj'] },
            { answer: '와! 재밌겠다! 나도 같이 놀고 싶다!', type: ['enfp', 'enfj', 'entp', 'entj', 'estp', 'estj', 'esfp', 'esfj'] }
        ]
    },
    {
        n: '10', 
        q: '임종을 눈 앞에 둔<br>주인공에게 주마등이 스쳐 지나간다.',
        a: [
            { answer: '주마등... 주인공 곧 죽겠구만..', type: ['esfp', 'esfj', 'estp', 'estj', 'isfp', 'isfj', 'istp', 'istj'] },
            { answer: '혹시 주마등을 돌아보다가 살아날 방법을 찾게될지도?', type: ['enfp', 'enfj', 'entp', 'entj', 'infp', 'infj', 'intp', 'intj'] }
        ]
    },
    {
        n: '11', 
        q: '007 주인공이 된 당신,<br>작전 수행 중 약간의 차질이 생겼다면?',
        a: [
            { answer: '작전을 세운 적이 없어서 차질이 생길 수 없다..', type: ['infp', 'isfp', 'intp', 'istp', 'enfp', 'esfp', 'entp', 'estp'] },
            { answer: '빠르게 상황 판단 후 B안으로 작전을 변경한다!', type: ['infj', 'isfj', 'intj', 'istj', 'enfj', 'esfj', 'entj', 'estj'] }
        ]
    },
    {
        n: '12', 
        q: '아직 어색한 친구가<br>같이 영화를 보러 가자고 한다.',
        a: [
            { answer: '이번 기회에 친해지자! 영화 보고 같이 얘기하면 재밌겠다', type: ['enfp', 'enfj', 'entp', 'entj', 'estp', 'estj', 'esfp', 'esfj'] },
            { answer: '(좀 어색한데..)미안해 그 영화 같이 보기로 한 사람이 있어ㅠ', type: ['infp', 'infj', 'intp', 'intj', 'istp', 'istj', 'isfp', 'isfj'] }
        ]
    }
]

const infoList = [
    {
        name: 'infp',
        desc: 'infp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'infj',
        desc: 'infj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'isfp',
        desc: 'isfp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'istj',
        desc: 'esfp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'intp',
        desc: 'intp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'intj',
        desc: 'entp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'istp',
        desc: 'istp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'istj',
        desc: 'estp',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'enfp',
        desc: 'infj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'enfj',
        desc: 'enfj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'esfp',
        desc: 'isfj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'esfj',
        desc: 'esfj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'estp',
        desc: 'intj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'estj',
        desc: 'entj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'entp',
        desc: 'istj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    },
    {
        name: 'entj',
        desc: 'estj',
        rec: 'dd',
        good: 'ss',
        bad: 'gg'
    }
]