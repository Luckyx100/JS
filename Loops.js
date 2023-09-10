const Array = ["LuckyK", "Dinesh", "Mahesh", "Aman"];
for (let i = 0; i < 4; i++) {    // or simply use this command "i < Array.length"
    const element = Array[i];
    if ( element == "Dinesh" ) {
        console.log("Don't print after this, cause of break statement");
        break; // continue;       
    }                // "Continue" statement just skips the value if the condition satifies.
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0
while ( i < 9 ) {
    console.log("Value of i is : ", i);
    i++
}