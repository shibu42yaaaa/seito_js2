const quiz = [
  {
    question: '次のうち、すぐ取り壊すことが条件で作られたものはどれ？',
    answers: [
        'ニューヨークの自由の女神像',
        'パリのエッフェル塔',
        'ブリュッセルの小便小僧',
        '上野の西郷隆盛像'
    ],
    correct: 'パリのエッフェル塔'
  },{
    question: '次の歴代首相のうち、参議院議員の経験がある人は誰？',
    answers: [
        '中曽根康弘',
        '海部俊樹',
        '橋本龍太郎',
        '宮沢喜一'
    ],
    correct: '宮沢喜一'

  },{
    question: '1945年の大晦日に放送された、紅白歌合戦の前身であるラジオ番組のタイトルはどれ？',
    answers: [
        '紅白歌謡選手権',
        '紅白大音楽会',
        '紅白音楽試合',
        '紅白歌唱大戦'
    ],
    correct: '紅白音楽試合'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;




const correct = 'パリのエッフェル塔';

//ボタンのアクション
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢の定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
}
setupQuiz();

//クリックのリファクタリング
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解です');
  } else {
    window.alert('不正解です。。');
  }

  quizIndex++;

  if(quizIndex < quizLength){
  // 問題数まだある
  setupQuiz();
  } else {
  // 問題数がもうない
  window.alert('終了！');
  }
};

let handlerIndex = 0;

while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
});
    handlerIndex++;
}

