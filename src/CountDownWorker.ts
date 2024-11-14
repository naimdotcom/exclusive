// countdownWorker.ts
self.onmessage = (event) => {
  let targetDate = event.data.targetDate;
  let timerId = setInterval(() => {
    const now = new Date().getTime();
    let distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(timerId);
      self.postMessage({ finished: true });
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      self.postMessage({ days, hours, minutes, seconds });
    }
  }, 1000);
};
