function oddishOrEvenish(n)
{
    let sum;
    for(sum = 0; n > 0;
        sum += n % 10,
        n = parseInt(n / 10));
        console.log(sum)
    
    if(sum % 2 == 0) {
        console.log("Even");
    }

    else {
        console.log("Odd");
    }
    
}
console.log(oddishOrEvenish(4433));