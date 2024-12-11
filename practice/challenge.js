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