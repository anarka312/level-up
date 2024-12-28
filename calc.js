class Calculator {
    constructor(initialValue = 0) {
      this.currentValue = initialValue;
    }
  
    add(value) {
      this.currentValue += value;
      return this; 
    }
  
    subtract(value) {
      this.currentValue -= value;
      return this; 
    }
  
    multiply(value) {
      this.currentValue *= value;
      return this;
    }
  
    divide(value) {
      if (value === 0) {
        throw new Error("Division by zero!");
      }
      this.currentValue /= value;
      return this; 
    }
  
    reset() {
      this.currentValue = 0;
      return this; 
    }
  
    getResult() {
      return this.currentValue;
    }
  }
  

    const calc = new Calculator(10);
  
    calc.add(5);
    console.log(calc.getResult()); // Вывод: 15
  
    calc.subtract(3);
    console.log(calc.getResult()); // Вывод: 12
  
    calc.multiply(2);
    console.log(calc.getResult()); // Вывод: 24
  
    calc.divide(4);
    console.log(calc.getResult()); // Вывод: 6
  
    calc.reset();
    console.log(calc.getResult()); // Вывод: 0
  
      
