
    class shape{
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}
class Triangle extends shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Circle extends shape {
    render() {
        return `<circle cx="150" cy="120" r="80" fill="${this.color}"/>`
    }
}
class Square extends shape {
    render() {
        return `<rect x="50" y="45" width="200" height="200" fill="${this.color}"/>`
    }
}

function logoGenerator(response){
  const { shape, shapeColor, text, textcolor} = response
  let logoshape;
  switch (shape) {
    case 'circle':
      logoshape = new Circle(shapeColor);
      break;
    case 'triangle':
      logoshape = new Triangle(shapeColor);
      break;
    case 'square':
      logoshape = new Square(shapeColor);
      break;
    default:
      logoshape = new shape(shapeColor);
      break;
  }
  logoshape.setColor(shapeColor);
  const shapeEl =logoshape.render();
  return `
  <svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  
  ${shapeEl} fill="${shapeColor}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>


  </svg>
  `
}

module.exports = {shape,Circle, Square, Triangle, logoGenerator,};