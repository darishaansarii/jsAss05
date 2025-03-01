// ---------------------------------------------CHAPTER 17-19 PDF-----------------------------------------

// Question 01:
let arr=[
    [], 
    []
];

// Question 02:
let matArr=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Question 03:
for(var i=1; i<=10; i++){
    console.log(`${i}\n`); 
}

// Question 04:
var tableNo=+prompt("Enter your desired table number:");
var endNo=+prompt("Enter the number where you want the table to be ended:");

document.write(`<h1>TABLE OF ${tableNo}</h1>`);
for(var i=1; i<=endNo; i++) {
    document.write(`${tableNo} x ${i} = ${tableNo*i}<br>`);
}

// Question 05:
var fruits=["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<fruits.length; i++) {
    console.log(`${fruits[i]}\n`);
}

for(var i=0; i<fruits.length; i++) {
    console.log(`Element at index ${i} is: ${fruits[i]}\n`);
}
document.write("<br>");

// Question 06:
    // a
    document.write("<h3>Counting</h3>");
    for(var i=1; i<=15; i++){
        if(i!=15){
            document.write(`${i}, `);
        }
        else{
            document.write(`${i}.<br>`);
        }
    }

    // b
    document.write("<h3>Reverse Counting</h3>");
    for(var i=10; i>=1; i--){
        if(i!=1){
            document.write(`${i}, `);
        }
        else{
            document.write(`${i}.<br>`);
        }
    }

    // c
    document.write("<h3>Even:</h3>");
    for(var i=0; i<=20; i=i+2){
        if(i!=20){
            document.write(`${i}, `);
        }
        else{
            document.write(`${i}.<br>`);
        }
    }

    // d
    document.write("<h3>Odd</h3>");
    for(var i=1; i<=19; i=i+2){
        if(i!=19){
            document.write(`${i}, `);
        }
        else{
            document.write(`${i}.<br>`);
        }
    }

    // e
    document.write("<h3>Series:</h3>");
    for(var i=2; i<=20; i=i+2){
        if(i!=20){
            document.write(`${i}k, `);
        }
        else{
            document.write(`${i}k.<br>`);
        }
    }

// Question 07:
var A=["cake", "apple pie", "cookie", "chips", "patties"];
var userOrder=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for(var i=0; i<A.length; i++) {
    if(A[i]===userOrder) {
        document.write(`<br>${userOrder} is <b>available</b> at index ${i} in our bakery.<br>`);
        break;
    }
    else {
        document.write(`<br>We are sorry. ${userOrder} is <b>not available</b> in our bakery.<br>`);
        break;
    }
}