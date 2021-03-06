//1st JS-task:

function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    
    
    return (starterPrice+maindishPrice+dessertPrice+beveragePrice);
    
}

var invoiceSum = calculateInvoice(5,11,13,4);

console.log (`Sum:${invoiceSum}`);//Sum: 33 -> check in console


//2nd JS-task:

var harumaki=5;
var tonkatsu=14;
var daifuku=4;
var beer=5;

var invoiceMario = calculateInvoice (harumaki,tonkatsu,daifuku,beer);

console.log(`Sum Mario: ${invoiceMario}`);//Sum Mario: 28 ->check in console


//3rd task:

//Combi 1
var edamame=4;
var sushi=22;
var kakigori=5;
var calpis=3;

var combi1 = calculateInvoice(edamame,sushi,kakigori,calpis);

console.log(`Sum Combi1: ${combi1}`);//Sum Combi1: 34 ->check in console

//Combi 2

var hiyayakko=4;
var yakitori=10;
var taiyaki=5;
var cappuccino=3;

var combi2 = calculateInvoice(hiyayakko,yakitori,taiyaki,cappuccino)

console.log(`Sum Combi2: ${combi2}`);//Sum Combi2: 22 ->check in Console

//Combi 3

var chawanmushi=5;
var curry=11;
var cake=4;
var matcha=4;

var combi3 = calculateInvoice(chawanmushi,curry,cake,matcha);

console.log(`Sum Combi3: ${combi3}`);//Sum Combi3: 24 ->check in Console


//Bonus task



function studentInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    
    
    return ((starterPrice+maindishPrice+dessertPrice)*0.9+beveragePrice).toFixed(2);// toFixed to round on 2 decimals
  
}

//Student 1 Combi

var invoiceStudent1 = studentInvoice(hiyayakko,tonkatsu,cake,beer);

console.log (`Sum Student1:${invoiceStudent1}`);//Sum Student1: 24.8 ->check in console

//Student 2 Combi

var invoiceStudent2 = studentInvoice(chawanmushi,curry,kakigori,matcha);

console.log (`Sum Student2:${invoiceStudent2}`);//Sum Student2: 22.9 ->check in console

//Student 3 Combi

var invoiceStudent3 = studentInvoice(harumaki,sushi,daifuku,cappuccino);

console.log (`Sum Student3:${invoiceStudent3}`);//Sum Student3: 30.9 ->check in console









