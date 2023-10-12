function double(){
    num = []
    for(i=10;i<100;i++){
        const str = i.toString();
        if (str[0] === str[1]){
            num.push(i)
        }
    }
    console.log(num)
}
double()