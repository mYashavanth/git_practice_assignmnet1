fuction prime(x){

let count=0;

for(let i=0;i<=x;i++){
     if(x%i==1){
     	count++;
     }
}
if(count==2){
	console.log('true')
}else{
	console.log('false')
}

}