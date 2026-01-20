let totalAmount=0;
//Adding 500 to the bill
totalAmount+=500;
//Adding 1200 to the bill
totalAmount+=1200;
//Applying 200 discount to the bill
totalAmount-=200;
//Applying 18% gst for the bill 
let gst=totalAmount*0.18;
totalAmount+=gst
//Total amount is below
console.log("Final bill amount:",totalAmount);