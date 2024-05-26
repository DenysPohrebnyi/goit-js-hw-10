import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(this.delay.value);
    const state = this.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
                event.target.reset();
            } else {
                reject(delay);
                event.target.reset();
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
        .catch((delay) => {
            console.log(`❌ Rejected promise in ${delay}ms`);
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
});