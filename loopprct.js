// print 1.100 using while dowhile and for
// print same 100.1 using while dowhile and for
// print odd number between 1.100
// print even number between 1.100
// print numbers between 1.100 which are divisible by 5 and 3
// print numbers between 1.100 which are divisible by 5 and 3 and 7

// print 1.100 using while dowhile and for
console.log('print 1.100 using while');

a=1;
while(a<=100){
    console.log(a);
    a++;
}

console.log('print 1.100 using dowhile')

b=1;
do{
    console.log(b);
    b++;
}while(b<=100)

console.log('print 1.100 using for')

for(i=1;i<=100;i++)
{
    console.log(i);
}


// print same 100-1 using while dowhile and for

console.log('print 100-1 using while');

c=100;
while(c>=1){
    console.log(c);
    c--;
}

console.log('print 100-1 using dowhile')

d=100;
do{
    console.log(d);
    d--;
}while(d>=1)

console.log('print 1.100 using for')

for(i=100;i>=1;i--)
{
    console.log(i);
}

console.log('// print odd number between 1.100')
for(i=1;i<=100;i++)
{
    if(i%2 !==0){
        console.log(i);
    }
}

console.log(' print even number between 1.100')

for(i=1;i<=100;i++)
    {
        if(i%2==0){
            console.log(i);
        }
    }

console.log('// print numbers between 1.100 which are divisible by 5 and 3');

for(i=1;i<=100;i++)
{
    if(i%5==0 && i%3==0){
        console.log(i);
    }
}

console.log('// print numbers between 1.100 which are divisible by 5 and 3 and 7')

for(i=1;i<=100;i++)
    {
        if(i%5==0 && i%3==0 && i%7==0){
            console.log(i);
        }
    }
