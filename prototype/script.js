let boit=["C2","C3","C1","C2","C2","C3","C1"];
let element ={}; 
for(let i=0; i<boit.length;i++){
    let A= boit[i];
    if(element[A]){
        element[A]++;
    }else{
        element[A]=1
    }
}
console.log(boit.length);
console.log(element);





