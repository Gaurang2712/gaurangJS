// 8.Hollow Right Triangle Pattern

// *
// **
// * *
// *  *
// *****


for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        if(i==3){
            if(j==2){
                process.stdout.write(' ');        
            }else{
                process.stdout.write('*');
            }
        }
        else if(i==4){
            if(j==2 || j==3){
                process.stdout.write(' ');        
            }else{
                process.stdout.write('*');
            }
        }
        else{
            process.stdout.write('*');
        }
    }
    console.log()
}

