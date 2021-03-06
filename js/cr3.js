//1st JS-task:

function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    
    
    return (starterPrice+maindishPrice+dessertPrice+beveragePrice);
    
}

var invoiceSum = calculateInvoice(5,11,13,4);

console.log (`Sum:${invoiceSum}`);//Sum: 33 -> check in console


//2nd JS-task

var harumaki=5;
var tonkatsu=14;
var daifuku=4;
var beer=5;

var invoiceMario = calculateInvoice (harumaki,tonkatsu,daifuku,beer);

console.log(`Sum Mario: ${invoiceMario}`);//Sum Mario: 28 ->check in console

