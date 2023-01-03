const question = '次のうち、すぐ取り壊すことが条件で作られたものはどれ？';
const answers = [
    'ニューヨークの自由の女神像',
    'パリのエッフェル塔',
    'ブリュッセルの小便小僧',
    '上野の西郷隆盛像'
];

const correct = 'パリのエッフェル塔';

document.getElementById('js-question').textContent = question

//ボタンのアクション
const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0]
$button[1].textContent = answers[1]
$button[2].textContent = answers[2]
$button[3].textContent = answers[3]

// ボタンがクリックされたら正誤判定
$button[0].addEventListener('click', () =>{
    if(correct === $button[0].textContent){
      window.alert('正解です');
    } else {
        window.alert('不正解です。。');
    }
});

$button[1].addEventListener('click', () =>{
    if(correct === $button[1].textContent){
      window.alert('正解です');
    } else {
        window.alert('不正解です。。');
    }
});

$button[2].addEventListener('click', () =>{
    if(correct === $button[2].textContent){
      window.alert('正解です');
    } else {
        window.alert('不正解です。。');
    }
});

$button[3].addEventListener('click', () =>{
    if(correct === $button[3].textContent){
      window.alert('正解です');
    } else {
        window.alert('不正解です。。');
    }
});

