// 5.Hollow Rhombus Pattern

//     *****
//    *   *
//   *   *
//  *   *
// *****


for(i=1;i<=5;i++){
    
    for(k=5;k>i;k--){
        process.stdout.write(' ');
    }
    for(j=1;j<=5;j++){
        if(i==2 || i==3 || i==4){
            if(j==2 || j==3 || j==4){
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
    console.log();
}