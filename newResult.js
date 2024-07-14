// Функция для извлечения параметров из URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    
    queryArray.forEach(query => {
      const pair = query.split('=');
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
  
    return params;
  }
  
  // Получаем текст из параметров URL
  const queryParams = getQueryParams();
  let sessionId = queryParams['session'];
  const userText = localStorage.getItem(sessionId) || '';
  let userText2 = userText.split(',,,').filter(Boolean); // Фильтрация пустых строк
  
  // Сохранение данных в localStorage
  function saveData() {
    localStorage.setItem(sessionId, userText2.join(',,,'));
  }
  
  // Получаем элемент для отображения текста
  const displayTextElement = document.getElementById('displayText');
  
  // Функция для обновления интерфейса и привязки событий
  function updateUI() {
    displayTextElement.textContent = '';
  
    userText2.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'message-container'; // Класс для стилизации
      div.style.border = '1px solid black'; // Добавляем рамку
      div.style.padding = '10px';
      div.style.margin = '5px auto'; // Центрируем рамку
      div.style.width = '300px'; // Уменьшаем ширину рамки
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'space-between';
  
      const textElement = document.createElement('p');
      textElement.textContent = element;
      textElement.style.margin = '0'; // Убираем внешние отступы
      div.appendChild(textElement);
  
      const likeContainer = document.createElement('div');
      likeContainer.style.display = 'flex';
      likeContainer.style.alignItems = 'center';
  
      const likeButton = document.createElement('button');
      likeButton.textContent = 'Like';
      likeButton.style.marginLeft = '10px';
  
      const countElement = document.createElement('span');
      countElement.textContent = ' 0'; // Начальное значение голосов
      countElement.style.marginLeft = '5px';
  
      likeButton.addEventListener('click', () => {
        const currentCount = parseInt(countElement.textContent, 10);
        if (likeButton.classList.contains('liked')) {
          countElement.textContent = ' ' + (currentCount - 1);
          likeButton.classList.remove('liked');
        } else {
          countElement.textContent = ' ' + (currentCount + 1);
          likeButton.classList.add('liked');
        }
      });
  
      likeContainer.appendChild(likeButton);
      likeContainer.appendChild(countElement);
      div.appendChild(likeContainer);
  
      displayTextElement.appendChild(div);
    });
  }
  
  // Проверяем, существует ли элемент с id='displayText'
  if (displayTextElement) {
    updateUI();
  } else {
    console.error('Element with id "displayText" not found');
  }
  
  // Функция для обработки нажатия на кнопку "Submit"
  function onSubmitButtonClick() {
    const userInput2 = document.getElementById('userInput').value;
    userText2.push(userInput2);
    saveData();
  
    const newResult2Link = document.createElement('a');
    newResult2Link.href = `newResult.html?session=${sessionId}`;
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
  