let alien ={
    name:'kaushik',
    tech: 'JS',
    laptop : {
        cpu: 'i7',
        ram: 4,
        brand: 'Asus'
    }
}

for(let key in alien)
{
    console.log(key,alien[key]);
}

for(let key in alien.laptop)
{
    console.log(key,alien.laptop[key])
}


let sum =0
let number = [3,4,5,6] // for of loop

for(let num of number){
   sum+= num;
}
console.log(sum)
