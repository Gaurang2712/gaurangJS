/*	30. Heart Pattern

  *****     *****
 *******   *******
********* *********
*******************
 *****************
  ***************
   *************
    ***********
     *********
      *******
       *****
        ***
         *
 */

//  *****     *****
// *******   *******
//********* *********

//*******************
// *****************
//  ***************
//   *************
//    ***********
//     *********
//      *******
//       *****
//        ***
//         *
let a=19;

     process.stdout.write('  *****     *****')
     console.log()
     process.stdout.write(' *******   *******')
     console.log()
     process.stdout.write('********* *********')
     console.log()
     process.stdout.write('**** I ❤ Y O U ***')
     console.log()
    for (let x = 1; x <= 10; x++) { // x = 1,2,3,4,5

        for (let z = 1; z<x; z++){  // space = 1
          process.stdout.write(' ');
          
        }
        for (let y=a ; y >= x; y--) {  // 19,16,
          process.stdout.write('*');
        }
        a--
        console.log();
      }