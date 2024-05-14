import { description, role, name } from './src/data.js';

let selectedGenre = document.querySelector('input[name="genre"]:checked').value;
let filteredDescription = ['심연의'];

const upperNickname = document.querySelector('#nickname-upper');
const lowerNickname = document.querySelector('#nickname-lower');
const generateButton = document.querySelector('#generate-button');

// 선택된 장르에 따라 description 필터링
if (selectedGenre === 'etc') {
    filteredDescription = description;
} else {
    filteredDescription = description.filter(item => item[1] === selectedGenre);
}

// 랜덤 숫자 생성

function getRandomValue(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

// 모든 라디오 버튼
let radioButtons = document.querySelectorAll('input[name="genre"]');


// 라디오 버튼 클릭 값 재정의
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    selectedGenre = this.value;
  });
});

// 랜덤 단어 생성

generateButton.addEventListener('click', function() {
    const wordCountElement = document.querySelector('input[name="word-counts"]:checked');
    let isWordCountTwo = wordCountElement ? true : false;

    let randomDescription = getRandomValue(filteredDescription);
    let randomRole = getRandomValue(role);
    let randomName = getRandomValue(name);
    
    let generatedUpperNickname = '';

    if (isWordCountTwo) {
        generatedUpperNickname = `${randomDescription[0]}`;
    } else {
        generatedUpperNickname = `${randomDescription[0]} ${randomRole}`;
    }
    
    upperNickname.innerHTML = generatedUpperNickname;
    lowerNickname.innerHTML = `${randomName}`;
});
