function noname(a){
    a= a+1;
    function myname()
    {
        return ++a;
    }
    return myname;
}
myFunc = noname(2);
console.log(myFunc())

damn = noname(0);
console.log(damn())

console.log(myFunc())

console.log(damn())