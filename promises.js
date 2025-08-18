//promises helps to reduce waiting time 

let pizza = new Promise((resolve,reject)=>{
    let isShopOpen = true;
    if(isShopOpen)
    {
        resolve("pizza is ready");
    }
    else{
        reject("Shop closed");
    }
});

pizza.then(result =>console.log(result)) // message we want to print 
.catch(error=>console.log(error));