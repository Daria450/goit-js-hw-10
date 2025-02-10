// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    fulfilledInp: document.querySelector(".fulfilled"),
    rejectedInp: document.querySelector(".rejected"),
    submitBtn: document.querySelector(".button"),
    delayPr: document.querySelector(".form-number"),
}

refs.submitBtn.addEventListener("click", (e) => { e.preventDefault(); onSubmitBtnClick(refs.delayPr.value) });

function onSubmitBtnClick(delay) {

    const promise = new Promise((resolve, reject) => {

        if (refs.fulfilledInp.checked) {
            setTimeout(() => {
                resolve(
                    iziToast.show({

                        title: '✅ OK',
                        message: ` Fulfilled promise in ${delay}ms`,
                        backgroundColor: '#59a10d',
                        messageColor: '#fff',
                        titleColor: '#fff',
                        position: 'topRight',
                        messageSize: '16px',
                    })
                );
            }, delay)
        }
        if (refs.rejectedInp.checked) {
            setTimeout(() => {
                reject(
                    iziToast.show({
                        title: 'X Error',
                        message: `Rejected promise in ${delay}ms`,
                        backgroundColor: '#ef4040',
                        messageColor: '#fff',
                        titleColor: '#fff',
                        position: 'topRight',
                        messageSize: '16px',
                    })
                );
            }, delay)
        }
    });
}
