// 4. Rhombus Pattern

//      *****
//    *****
//   *****
//  *****
// *****



for(i=1;i<=5;i++){
    
    for(k=5;k>i;k--){
        process.stdout.write(' ');
    }
    for(j=1;j<=5;j++){
        process.stdout.write('*');
    }
    console.log();
}