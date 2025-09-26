// Part 1: оголошення змінних
let studentName = "Oleksii";
let studentAge = 18;
let isStudying = true;
let favoriteSubject = "Web Technology";
let currentGrade = [80, 90, 100, 76, 86];

// Валідація змінних студента
function validateStudentVariables(name, age, subject, grades) {
  const errors = [];

  if (typeof name !== "string" || name.trim() === "") {
    errors.push("Невірне ім'я студента");
  }

  if (typeof age !== "number" || age < 0 || age > 70) {
    errors.push("Невірний вік студента");
  }

  if (typeof subject !== "string" || subject.trim() === "") {
    errors.push("Невірна улюблена дисципліна");
  }

  if (!Array.isArray(grades) || grades.length === 0) {
    errors.push("Оцінки відсутні або не є масивом");
  } else {
    grades.forEach((grade, i) => {
      if (typeof grade !== "number" || grade < 0 || grade > 100) {
        errors.push(`Оцінка під індексом ${i} некоректна`);
      }
    });
  }

  return errors;
}


let validationErrors = validateStudentVariables(studentName, studentAge, favoriteSubject, currentGrade);

if (validationErrors.length > 0) {
  console.error("Помилки в даних студента:", validationErrors);
} else {
  console.log("Дані студента коректні ✅");
}

// Part 1: Вивід інформації
console.log(`Student Name: ${studentName}\n Student Age: ${studentAge}\n Favourity Subject: ${favoriteSubject}`);
console.log(typeof(isStudying), typeof(favoriteSubject), typeof(currentGrade), typeof(studentName), typeof(studentAge));

// Part 2: Обчислення середнього бала та категорій
let averageGrade = 0;
let temp = 0;

currentGrade.forEach((grade) => {
  temp += grade;
});
averageGrade = temp / currentGrade.length;

console.log("Average Grade:", averageGrade);

let uspish = "";
if (averageGrade >= 90) {
  uspish = "Відмінник";
} else if (averageGrade >= 80 && averageGrade <= 89) {
  uspish = "Хорошист";
} else if (averageGrade >= 60 && averageGrade <= 79) {
  uspish = "Трійочник";
} else if (averageGrade < 60) {
  uspish = "Двійочник";
} else {
  uspish = "Error";
}

let ageCategory = "";
if (studentAge < 18) {
  ageCategory = "Неповнолітній студент";
} else if (studentAge >= 18 && studentAge <= 25) {
  ageCategory = "Молодий студент";
} else if (studentAge > 25) {
  ageCategory = "Зрілий студент";
} else {
  ageCategory = "Некоректно введено дані";
}

// Part 3: Операції зі строками та функція різниці
studentName = "Tkachuk Oleksii";
console.log(studentName);
console.log(`Чи містить "програм" у favouriteSubject: ${favoriteSubject.includes("програм")} `);
console.log(`Нижній регістр: ${studentName.toLowerCase()}, Довжина: ${studentName.length}`);

function vid(grades) {
  if (grades.length === 0) return 0;
  let min = grades[0];
  let max = grades[0];

  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < min) min = grades[i];
    if (grades[i] > max) max = grades[i];
  }
  return max - min;
}

console.log(vid(currentGrade));
studentAge++;
console.log(studentAge);
console.log(`Відсоток успішності: ${averageGrade}%`);

// Вивід на HTML
document.querySelector(".main__information").innerHTML = `
  <h2>Основа інформація</h2>
  <p><b>Ім'я:</b> ${studentName}</p>
  <p><b>Вік:</b> ${studentAge}</p>
  <p><b>Улюблена дисципліна:</b> ${favoriteSubject}</p>
  <p><b>Середній бал:</b> ${averageGrade.toFixed(2)}</p>
  <p><b>Різниця між найвищою та найнижчою оцінкою:</b> ${vid(currentGrade)}</p>
`;

document.querySelector(".main__grades").innerHTML = `
  <h2>Оцінки</h2>
  <p><b>Всі оцінки:</b> ${currentGrade.join(", ")}</p>
  <p><b>Середній бал:</b> ${averageGrade.toFixed(2)}</p>
  <p><b>Різниця між найвищою та найнижчою оцінкою:</b> ${vid(currentGrade)}</p>
`;

document.querySelector(".main__category").innerHTML = `
  <h2>Категорії</h2>
  <p><b>Успішність:</b> ${uspish}</p>
  <p><b>Вікова категорія:</b> ${ageCategory}</p>
`;
