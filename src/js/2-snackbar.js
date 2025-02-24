// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector(".form"),
    fulfilledInp: document.querySelector(".fulfilled"),
    rejectedInp: document.querySelector(".rejected"),
    submitBtn: document.querySelector(".button"),
    delayPr: document.querySelector(".form-number"),
}


const params = {
    state: null,
    delay: null,
}

refs.form.addEventListener("submit", (e) => {

    e.preventDefault();
    if (e.currentTarget.querySelector(".fulfilled").checked) {
        params.state = "fulfilled";
    }
    if (e.currentTarget.querySelector(".rejected").checked) {
        params.state = "rejected";
    }
    params.delay = e.currentTarget.delay.value;

    onSubmitBtnClick(refs.delayPr.value)
});

function onSubmitBtnClick(delay) {

    setTimeout(() => {
        const promise = new Promise((resolve, reject) => {
            if (params.state === "fulfilled") { resolve(`Fulfilled promise in ${delay}ms`); }
            if (params.state === "rejected") { reject(`Rejected promise in ${delay}ms`); }
        });
        promise.then(value => {
            iziToast.show({
                title: '✅ OK',
                message: value,
                backgroundColor: '#59a10d',
                messageColor: '#fff',
                titleColor: '#fff',
                position: 'topRight',
                messageSize: '16px',
            })
        }).catch(value => {
            iziToast.show({
                title: 'X Error',
                message: value,
                backgroundColor: '#ef4040',
                messageColor: '#fff',
                titleColor: '#fff',
                position: 'topRight',
                messageSize: '16px',
            })
        })
        params.state = null;
    }, params.delay)
    params.delay = null;
}

