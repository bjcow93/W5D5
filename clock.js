class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this._incrementSeconds();
    this.printTime();
  }

  _incrementSeconds() {
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    } else {
      this.seconds += 1;
    }
  }

  _incrementMinutes() {
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    } else {
      this.minutes += 1;
    }
  }

  _incrementHours() {
    if (this.hours === 24) {
      this.hours = 0;
    } else {
      this.hours += 1;
    }
  }

}

const clock = new Clock();
