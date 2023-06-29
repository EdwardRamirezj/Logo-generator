const {shape, Circle, Triangle, Square} = require ('./shapes.js')

describe('generateLogo', () => {
describe('Triangle', () => {
    it ('should return a triangle', () => {
        const shape = new Triangle();
        shape.setColor('green');
        expect(shape.render()).toEqual (`<polygon height = "100%" width = "100%" points="150, 18 244, 182 56, 182" style="fill:blue;" />`)
    });
});

describe('Square', () => {
    it ('should return a red square', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<rect x="50" y="20" width="150" height="150" style="fill:red;" />`)
    });
});

describe('Circle', () => {
    it ('should return a circle ', () => {
        const shape = new Circle();
        shape.setColor('purple');
        expect(shape.render()).toEqual (`<polygon height = "100%" width = "100%" points="150, 18 244, 182 56, 182" style="fill:purple;" />`)
    });
})
});


