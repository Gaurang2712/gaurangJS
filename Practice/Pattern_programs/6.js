// 6. Mirrored Rhombus Pattern

// *****
//  *****
//   *****
//    *****
//     *****


for(i=1;i<=5;i++){
    
    for(k=1;k<i;k++){
        process.stdout.write(' ');
    }
    for(j=1;j<=5;j++){
        process.stdout.write('*');
    }
    console.log();
}