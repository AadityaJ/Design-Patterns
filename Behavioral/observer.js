class testobject{
    constructor(){
        this.a = 1;
        this.b = 2;
    }
    setA(a){this.a = a;}
    setB(b){this.b = b;}
    getContext(){return this;}
}

class example{
    constructor(){
        this.proxytest = new Proxy(new testobject(), {
            set: (object, prop, value) => {
                console.log('Object: ' + JSON.stringify(object) + ' changes ' + prop+ 'to'+ value);
                object.prop = value;
                return true;
            }
        })
    }

    gettestobject(){
        return this.proxytest;
    }
}
run = new example();
testrunner = run.gettestobject();
testrunner.setA(10);
testrunner.setB(20);