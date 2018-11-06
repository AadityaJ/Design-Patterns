class X{
    XMethod(a, b){
        return a+b;
    }
}
class AdapterXY{
    XMethod(a){
        return new X().XMethod(a, 1);
    }
}
class Y{
    useX(){
        return new AdapterXY().XMethod(1);
    }
}
runner = new Y();
console.log(runner.useX());