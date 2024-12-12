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
function
myFunction
(
a
)
{

return a.slice(0,3);
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
}

function
myFunction
(
a
)
{

return a.indexOf("is");
console.log(myFunction("praise"));
console.log(myFunction("risky"));
console.log(myFunction("paris"));
}

function
myFunction
(
a
)
{
 const halfLength = Math.floor(a.length / 2);
  return a.slice(0, halfLength);
console.log(myFunction('abcdefgh'));
console.log(myFunction('1234')); 
console.log(myFunction('gedcba')); 
}
function
myFunction
(
a
)
{
return a.slice(0, -3);
console.log(myFunction('abcdefg')); 
console.log(myFunction('1234')); 
console.log(myFunction('fgedcba')); 
}
function
myFunction
(
a, b
)
{

return  (a * b) / 100;
console.log(myFunction(100, 50));
console.log(myFunction(10, 1));
console.log(myFunction(500, 25));
}