class Clock {
  constructor() {
    this.printTime();
    _tick();
  }

  printTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
  }

  _tick() {
    setInterval(printTime, 1000);
  }

}

const clock = new Clock();
