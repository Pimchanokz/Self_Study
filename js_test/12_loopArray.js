//for loop
const array = ['red', 'blue', 'green']

for(var i = 0; i < array.length; i++){
    console.warn(array[i])
}

//for each
array.forEach(e => {
    console.warn(e)
})

//for of
for (const v of array){ //ข้อดีคือสามารถเบรคได้
    if(v === 'blue'){
        // break;
        continue;
    }
    console.warn(v)
}