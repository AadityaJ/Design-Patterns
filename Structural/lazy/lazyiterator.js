class lazyIterable{
    constructor(array){
        this.array = array;
    }
    lazyFilter(condition){
        this.condition = condition;
        this.contextPointer = 0;
    }
    next(){
        while(1){
            const currentValue = this.array[this.contextPointer];
            if(this.condition(currentValue)){
                this.contextPointer++;
                return currentValue;
            }else{
                if(this.contextPointer == this.array.length){
                    return null;
                }else{
                    this.contextPointer ++;
                }
            }
        }
    }
}

const even = new lazyIterable([1,2,3,4]);
even.lazyFilter(x => x%2==0);
console.log(even.next());
console.log(even.next());