function pf(n){
    let factors=[]
    while(n%2 === 0){
        factors.push(2);
        n=n/2;
    }
    var i=0;
    for(i=3; i <= Math.sqrt(n); i=i+2){
        while(n%i === 0){
            factors.push(i);
            n=n/i;
        }
    }
    if(n>2){
        factors.push(n);
    }
    return factors;
}
let a=56;
const fact = pf(a);
console.log(fact)