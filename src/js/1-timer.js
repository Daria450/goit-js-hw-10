// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const refs = {
    dateTimePicker: document.querySelector("#datetime-picker"),
    timerStartBtn: document.querySelector(".timer-start"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}
let userSelectedDate;
refs.timerStartBtn.classList.add('disabled-button');
refs.timerStartBtn.disabled = true;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate < new Date()) {
            iziToast.show({
                title: 'Error',
                message: 'Please choose a date in the future',
                backgroundColor: '#ef4040',
                messageColor: '#fff',
                titleColor: '#fff',
                position: 'topRight',
                titleSize: '16px',
                messageSize: '16px',
            });
            refs.timerStartBtn.classList.add('disabled-button');
            refs.timerStartBtn.disabled = true;
        }
        else {
            refs.timerStartBtn.classList.remove('disabled-button');
            refs.timerStartBtn.disabled = false;
        }
    },
};




flatpickr(refs.dateTimePicker, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

refs.timerStartBtn.addEventListener("click", onStartClick);
let timerIntervalId = null;

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

function onStartClick() {
    refs.timerStartBtn.classList.add('disabled-button');
    refs.timerStartBtn.disabled = true;
    refs.dateTimePicker.disabled = true;


    timerIntervalId = setInterval(() => {
        let currenntTimeLeft = userSelectedDate - new Date();


        const { days, hours, minutes, seconds } = convertMs(currenntTimeLeft);
        refs.days.textContent = addLeadingZero(days);
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);
        if (convertMs(currenntTimeLeft).days > 99) { refs.days.textContent = convertMs(currenntTimeLeft).daystoString().padStart(3); }

        const timerArray = [days, hours, minutes, seconds];
        if (timerArray.every(value => value === 0)) {
            clearInterval(timerIntervalId);
            refs.timerStartBtn.classList.remove('disabled-button');
            refs.timerStartBtn.disabled = false;
            refs.dateTimePicker.disabled = false;
        }
        if (timerArray.some(value => value < 0)) {
            iziToast.show({
                title: 'Error',
                message: 'Please choose a date in the future',
                backgroundColor: '#ef4040',
                messageColor: '#fff',
                titleColor: '#fff',
                position: 'topRight',
                titleSize: '16px',
                messageSize: '16px',
            });
            refs.timerStartBtn.classList.add('disabled-button');
            refs.timerStartBtn.disabled = true;
        }

    }, 1000);

}