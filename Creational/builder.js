class x{
    constructor(){
        this.a = '';
        this.b = '';
    }
}
class xBuilder{
    constructor(){
        this.xObject = new x();
    }
    setA(a){
        this.xObject.a = a;
        return this;
    }
    setB(b){
        this.xObject.b = b;
        return this;
    }
    build(){
        return this.xObject;
    }
}
xTester = new xBuilder().setA('a').build();
console.log(xTester);