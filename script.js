localStorage.setItem("level", 0);
if (!localStorage.getItem("level")) {
}
console.log(localStorage.getItem("level") + "уровень");
let form = document.forms.answer_form;
form.user_answer.oninput = check;

let heading = document.getElementById("heading");
let bingo = document.getElementById("bingo");
let question = document.getElementById("question");

let heading_array = [
  "Привет, Даша",
  "Запрыгнула!",
  "Заголовок два",
  "Заголовок три",
];
let bingo_array = [
  'Меня зовут Робоконь3000, я самый первый компьютер во вселенной. <img src="https://cs3.livemaster.ru/zhurnalfoto/f/4/2/151006082219.jpeg" alt = "Фото робоконя" width = "100%"> Это моё самое старое фото.Некогда объяснять, прыгай прямо на самокат!',
  "Хорошая у вас планета. Всё тихо и спокойно, парки кругом, растения.        Давай просто погуляем",
  "",
];
let question_array = [
  'напиши "запрыгнула" без кавычек если запрыгнула без кавычек',
  'Хотя постойте-ка. Некоторые растения выглядят странно! <img src="img/tree-min.jpg" alt = "Дерево бонсай" width = "100%" /> Проверь сад Чувильдина, сколько странных деревьев ? Их число подскажет тебе первую часть их настоящего названия, а вторая означает что они любят покушать.Однажды они уже расплодились, об этом есть книга. Напиши её название',
  "",
  "",
  "",
];

heading.innerHTML = heading_array[0];
bingo.innerHTML = bingo_array[0];
question.innerHTML = question_array[0];

function makeStep() {
  let level = localStorage.getItem("level");
  level++;
  console.log(level + "уровень");
  localStorage.setItem("level", level);
  heading.innerHTML = heading_array[level];
  bingo.innerHTML = bingo_array[level];
  question.innerHTML = question_array[level];
}

function check() {
  let user_answer = form.user_answer.value;
  let level = localStorage.getItem("level");
  if (user_answer.toLowerCase() == "запрыгнула" && level <= 0) {
    makeStep();
  }
  if (user_answer.toLowerCase() == "день триффидов" && level <= 1) {
    makeStep();
  }
  if (user_answer.toLowerCase() == "3" && level <= 2) {
    makeStep();
  }
}
