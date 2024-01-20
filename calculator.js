class Calculator {
    constructor(color, shape, hasScreen) {
        this.color = color;
        this.shape = shape;
        this.hasScreen = hasScreen;
    }

    add = (a, b) => a + b;
    subtract = (a, b) => a - b;
    multiply = (a, b) => a * b;
    divide = (a, b) => a / b;
}

let calc = new Calculator('black', 'square', true)
