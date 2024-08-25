// 3. Hollow Square Pattern with Diagonal

// *****
// ** **
// * * *
// ** **
// *****


for(i=1;i<=5;i++){
    for(j=1;j<=5;j++)
    {
        if(i==2)
        {
            if(j==3){
                process.stdout.write(' ');
            }
            else{
                process.stdout.write('*');
            }
       }
       else if(i==3)
        {
            if(j==2 || j==4){
                process.stdout.write(' ');
            }
            else{
                process.stdout.write('*');
            }
       }

       else if(i==3)
        {
            if(j==3){
                process.stdout.write(' ');
            }
            else{
                process.stdout.write('*');
            }
       }

       else if(i==4)
        {
            if(j==3){
                process.stdout.write(' ');
            }
            else{
                process.stdout.write('*');
            }
       }

       else{
        process.stdout.write('*');
       }

    }
    console.log()
}