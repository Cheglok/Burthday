if (!localStorage.getItem("question")) {
  localStorage.setItem("question", 1);
}
console.log(localStorage.getItem("question"));
let form = document.forms.answer_form;

form.user_answer.oninput = check;
let question = document.getElementById("question");
let bingo = document.getElementById("bingo");
console.log(question);
let question_array = [
  "Давай просто прогуляемся по паркам! Хотя постойте-ка, что это за странные деревья ? Тут картинка",
  "Вопрос два",
  "Вопрос три",
];

function check() {
  let user_answer = form.user_answer.value;
  if (user_answer == "3" || user_answer.toLowerCase() == "три") {
    bingo.innerHTML =
      "Точно, три штуки! Ещё утром было два. Никому не говори, это смертельно опасные хищники, триффиды! Возможно что-то не так с этим миром.";
    question.innerHTML = question_array[1];
    localStorage.setItem("question", 2);
    console.log(localStorage.getItem("question"));
  }
  if (user_answer == "bbb") {
    question.innerHTML = question_array[2];
    localStorage.setItem("question", 3);
    console.log(localStorage.getItem("question"));
  }
}
