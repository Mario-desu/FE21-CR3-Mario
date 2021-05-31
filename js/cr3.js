//1st JS-task:
//Use the prices on your menu to create four variables that you will pass to the function calculateInvoice as arguments. Print the result on the console. 

function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    
    
    return (starterPrice+maindishPrice+dessertPrice+beveragePrice);
    
}

let invoiceSum = calculateInvoice(5,11,13,4);

console.log (`Sum:${invoiceSum}`);//Sum: 33 -> check in console





let harumaki=5;
let tonkatsu=14;
let daifuku=4;
let beer=5;

let invoiceMario = calculateInvoice (harumaki,tonkatsu,daifuku,beer);

console.log(`Sum Mario: ${invoiceMario}`);//Sum Mario: 28 ->check in console


//2nd JS-task:
//Create at least 3 different combinations of different dishes on your menu to calculate the invoice and print it on the console.



//Combi 1
let edamame=4;
let sushi=22;
let kakigori=5;
let calpis=3;

let combi1 = calculateInvoice(edamame,sushi,kakigori,calpis);

console.log(`Sum Combi1: ${combi1}`);//Sum Combi1: 34 ->check in console


//Combi 2

let hiyayakko=4;
let yakitori=10;
let taiyaki=5;
let cappuccino=3;

let combi2 = calculateInvoice(hiyayakko,yakitori,taiyaki,cappuccino)

console.log(`Sum Combi2: ${combi2}`);//Sum Combi2: 22 ->check in Console


//Combi 3


let chawanmushi=5;
let curry=11;
let cake=4;
let matcha=4;

let combi3 = calculateInvoice(chawanmushi,curry,cake,matcha);

console.log(`Sum Combi3: ${combi3}`);//Sum Combi3: 24 ->check in Console




//Bonus task

//3rd task:
/*Create a function studentInvoice that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice. This discount applies to the dishes but NOT the beverages. Print 3 examples of studentInvoice on the console.*/




function studentInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    
    
    return ((starterPrice+maindishPrice+dessertPrice)*0.9+beveragePrice).toFixed(2);// toFixed to round on 2 decimals
  
}

//Student 1 Combi

let invoiceStudent1 = studentInvoice(hiyayakko,tonkatsu,cake,beer);

console.log (`Sum Student1:${invoiceStudent1}`);//Sum Student1: 24.8 ->check in console


//Student 2 Combi

let invoiceStudent2 = studentInvoice(chawanmushi,curry,kakigori,matcha);

console.log (`Sum Student2:${invoiceStudent2}`);//Sum Student2: 22.9 ->check in console


//Student 3 Combi

let invoiceStudent3 = studentInvoice(harumaki,sushi,daifuku,cappuccino);

console.log (`Sum Student3:${invoiceStudent3}`);//Sum Student3: 30.9 ->check in console









