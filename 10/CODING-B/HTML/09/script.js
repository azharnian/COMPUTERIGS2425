
function multBy2(number)
{
    return number*2;
}

function multBy3(number)
{
    return number*3;
}

function printWithFunction(element, number, callBackFunction)
{
    const el = document.createElement(element);
    el.innerHTML = callBackFunction(number);
    document.body.append(el);
}

console.log(multBy2(10));   // 20
console.log(multBy3(5));    // 15

printWithFunction("p", 100, multBy2);
printWithFunction("h1", 1000, multBy3);

printWithFunction("h3", 500, number => {
    return number * 4;
})

printWithFunction("p", 600, function(number){
    return number * 5;
})