// Ищем кнопку
const btn = document.querySelector(".btn");

// Обработчик клик
btn.addEventListener("click", () => {
  // Ищем ширину и высоту экрана
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  //   Выводим результат
  alert(`Размер экрана равен ${screenWidth} на ${screenHeight} пикселей`);
});
