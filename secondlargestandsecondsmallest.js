const randno =[]
for(i=0;i<10;i++)
{
    let n = Math.floor((Math.random()*900)+100);
    randno.push(n);
}
console.log(randno)
const b=randno.length;
console.log(b)
var temp =0
for(i=0;i<10;i++){
    for(j=0;j<10-i-1;j++){
        if(randno[j]>randno[j+1]){
                temp=randno[j];
                randno[j]=randno[j+1];
                randno[j+1]=temp;
        }
    }
}
console.log("sorted array",randno)
console.log("second smallest",randno[1])
console.log("second largest",randno[b-2])