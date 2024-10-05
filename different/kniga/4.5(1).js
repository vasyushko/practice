function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value1 = +prompt('value', 0); //this.value += +prompt('Сколько нужно добавить?', 0);
        this.value += this.value1;
        return this.value;
    };
  }
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);