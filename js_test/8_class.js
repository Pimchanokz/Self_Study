class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    greet(){
        console.warn('hello!')
    }

    get color(){
        return this._color
    }

    set color(c){
        this._color = c
    }

    get dimension(){
        return `${this.width} x ${this.height}`
    }

    static area(c){
        return c.width * c.height
    }
}

class Squre extends Rectangle{
    constructor(width){
        super(width,width) //extends ต้องใช้ super
    }
}


const r = new Rectangle(20,10)
// console.warn(r.height,r.width)
// r.greet()

// r.color = 'red'
// console.warn(r.color)
// console.warn(r.dimension)
console.warn(Rectangle.area(r)) //static method ต้องเรียกจาก class

const s = new Squre(50)
console.warn(s.dimension)
console.warn(Squre.area(s))