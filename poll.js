// Функция для генерации уникального идентификатора
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Функция для обработки нажатия на кнопку "Submit"
function onSubmitButtonClick() {
  const userInput2 = document.getElementById('userInput').value;
  const sessionId = generateUUID(); // Создаем новый уникальный идентификатор сессии
  const userText2 = [userInput2];

  // Сохраняем данные в localStorage
  localStorage.setItem(sessionId, userText2.join(',,,'));

  // Перенаправляем на страницу newResult с параметром session
  const newResult2Link = document.createElement('a');
  newResult2Link.href = 'newResult.html?session=' + sessionId;
  document.body.appendChild(newResult2Link);
  newResult2Link.click();
}

// Добавляем обработчик события для кнопки "Submit"
document.getElementById('submitButton').addEventListener('click', onSubmitButtonClick);

// Обработчик для кнопки Home
function onHomeButtonClick() {
  const homePageLink = document.createElement('a');
  homePageLink.href = 'index.html';
  document.body.appendChild(homePageLink);
  homePageLink.click();
}

document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);
