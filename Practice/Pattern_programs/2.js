/*2. Hollow Square Pattern

*****
*   *
*   *
*   *
*****

 */



for(let i=1;i<=5;i++){
    if(i>1 && i<5){
        process.stdout.write('*   *');
    }
    else{
        for(j=1;j<=5;j++){
             process.stdout.write('*');
        }
    }
    console.log()
}