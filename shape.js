class shape{
    draw(){};
}
class rectangle extends shape{
    constructor(){
        super();
        this.type = "RECTANGLE";
    }
    draw(){
        console.log("Inside rectangle object");
    }
}
class square extends shape{
    constructor(){
        super();
        this.type = "SQUARE";
    }
    draw(){
        console.log("Inside square object");
    }
}
class shapefactory{
    assign(ObjectName){
            switch(ObjectName){
                case "RECTANGLE": return new rectangle();
                case "SQUARE": return new square();
                default: return {};
            }
    }
}
sf = new shapefactory();
shape1 = sf.assign("RECTANGLE");
shape2 = sf.assign("SQUARE");
shape1.draw();
shape2.draw();