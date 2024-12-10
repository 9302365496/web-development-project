 //creation
// const prmise=new Promise((resolve, reject)=>  {
//    setTimeout(function(){
//     console.log("async task");
//     resolve();
//    },1000) 
// })
// prmise.then(()=>{
//     console.log("promise consumed");
// })
// prmise.catch(()=>{

// })
const ger=(a,b)=>{
    console.log(a+b);
    
}
const ber=(a,b,bosdika)=>{
bosdika(a,b)
}

ber(1,6,ger)