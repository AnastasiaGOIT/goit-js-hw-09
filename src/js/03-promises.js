import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let inputDelay = Number(e.target.elements.delay.value);
  let inputStep = Number(e.target.elements.step.value);
  let inputAmount = Number(e.target.elements.amount.value);

  for (let i = 0; i < inputAmount; i += 1) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    inputDelay += inputStep;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
