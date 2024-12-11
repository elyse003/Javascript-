function
myFunction
(
a
)
{

return typeof a;
console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction('string'));
console.log(myFunction(['array']));
}
function
myFunction
(
a, n
)
{

return a[n-1];
console.log(myFunction('abcd',1));
console.log(myFunction('zyxbwol',5));
console.log(myFunction('gfedcba',3));

}
function
myFunction
(
    a
)
{
    return a.slice(3);
    console.log(myFunction('abcdef'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
}

function
myFunction
(
str
)
{

return str.slice(-3);
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
}