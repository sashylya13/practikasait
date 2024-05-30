document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
  
    let currentSlide = 0;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    };
  
    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                showSlide(i);
                updateDots(i);
            });
            dotsContainer.appendChild(dot);
        });
    };
  
    function updateDots(index) {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };
  
    createDots();
    showSlide(currentSlide);
  })
  document.getElementById('flightSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form values
    var departure = document.getElementById('departure').value;
    var destination = document.getElementById('destination').value;
    var departureDate = document.getElementById('departureDate').value;
    var returnDate = document.getElementById('returnDate').value;
    var passengers = document.getElementById('passengers').value;
  
    // Do something with the form values (e.g., send a request to the server)
    console.log('Departure:', departure);
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    console.log('Passengers:', passengers);
  });
  
  // login
  

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const documentNumber = document.getElementById('documentNumber').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!name || !lastName || !documentNumber || !phone || !password || !confirmPassword) {
            alert('Все поля обязательны для заполнения.');
            return;
        }

        if (password.length < 7 || !/\d/.test(password) || !/[!*$]/.test(password)) {
            alert('Пароль должен быть не менее 7 символов и содержать цифры и символы !, *, $.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Пароли не совпадают.');
            return;
        }

        // Вывод данных в консоль
        console.log('Имя:', name);
        console.log('Фамилия:', lastName);
        console.log('Номер документа:', documentNumber);
        console.log('Телефон:', phone);
        console.log('Пароль:', password);
        console.log('Повтор пароля:', confirmPassword);

        // Если все проверки пройдены
        alert('Регистрация успешна!');
    });
});

// 
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var phone = document.querySelector(".test-1-fpn").value;
    var password = document.querySelector(".test-1-fps").value;
    
    // Проверка, что поля не пустые
    if (phone.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    // Проверка введенных данных
    if (phone !== "89991234567" || password !== "password12") {
        alert("Invalid phone or password. Please try again.");
        return;
    }
    
    // Успешный вход
    alert("Login successful!");
    // Можно добавить дополнительные действия, например, перенаправление на другую страницу
});
