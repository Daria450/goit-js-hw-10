// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector(".form"),
}


const params = {
    state: refs.form.elements.state,
    delay: refs.form.elements.delay,
}



refs.form.addEventListener("submit", (e) => {

    e.preventDefault();
    params.state = e.currentTarget.elements.state;
    params.delay = e.currentTarget.elements.delay;

    function createPromise(delay, state) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === 'fulfilled') {
                    resolve(delay);
                } else {
                    reject(delay);
                }
            }, delay);
        })

    }

    const promise = createPromise(params.delay.value, params.state.value);

    // console.log(promise);
    promise
        .then(delay => {
            iziToast.show({
                title: '✅ OK',
                message: `Fulfilled promise in ${delay}ms`,
                backgroundColor: '#59a10d',
                messageColor: '#fff',
                titleColor: '#fff',
                position: 'topRight',
                messageSize: '16px',
            })
        })
        .catch(delay => {
            iziToast.show({
                title: 'X Error',
                message: `Rejected promise in ${delay}ms`,
                backgroundColor: '#ef4040',
                messageColor: '#fff',
                titleColor: '#fff',
                position: 'topRight',
                messageSize: '16px',
            })
        })

    refs.form.reset();
});







