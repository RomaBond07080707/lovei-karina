// Переходи між екранами
function goToScreen(number) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const target = document.getElementById(`screen${number}`);
    if (target) target.classList.add('active');
}

// Показуємо перший екран спочатку
window.onload = () => goToScreen(1);

// Надсилання повідомлення у Telegram
function sendMessage() {
    const message = document.getElementById('message').value.trim();
    if (!message) {
        alert("Будь ласка, напиши хоч пару слів 😊");
        return;
    }

    const chatId = '1857442002'; // Твій Telegram ID
    const token = '7926569717:AAFZnOx4SD7340zaR-3xFNGQOOhg8vd3Nco';

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: `Карінка написала тобі: 💌\n\n${message}`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) {
            goToScreen(3);
        } else {
            alert("Сталася помилка при надсиланні 😢");
        }
    })
    .catch(() => {
        alert("Щось пішло не так. Перевір інтернет або API.");
    });
}