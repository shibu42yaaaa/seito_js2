const question = '次のうち、すぐ取り壊すことが条件で作られたものはどれ？';
const answers = [
    'ニューヨークの自由の女神像',
    'パリのエッフェル塔',
    'ブリュッセルの小便小僧',
    '上野の西郷隆盛像'
];

const correct = 'パリのエッフェル塔';

//ボタンのアクション
const $button = document.getElementsByTagName('button');
// クイズの問題文、選択肢の定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question

  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex]
    buttonIndex++;
  }
}
setupQuiz();

//クリックのリファクタリング
const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解です');
  } else {
    window.alert('不正解です。。');
  }
};

// ボタンがクリックされたら正誤判定
$button[0].addEventListener('click', (e) =>{
    clickHandler(e);
});

$button[1].addEventListener('click', (e) =>{
    clickHandler(e);
});

$button[2].addEventListener('click', (e) =>{
    clickHandler(e);
});

$button[3].addEventListener('click', (e) =>{
    clickHandler(e);
});
