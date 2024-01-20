function storage(array) {

    let storage = {};


    for (const product of array) {
        
        let [item, price] = product.split(" : ");
        storage[item] = price;
        
    }
    
    let entries = Object.entries(storage);
    let result = Object.fromEntries(entries.sort((a,b) => a[0].localeCompare(b[0])));
    

    let firstLetter = "";

    for (const key in result) {
        
        if(firstLetter !== key[0]){
            firstLetter = key[0];
            console.log(firstLetter);
        }

        console.log(`  ${key}: ${result[key]}`);
    }

}

storage(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

)