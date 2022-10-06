// pattern program

// pyramid with A
// for (var i = 1; i <= 7; i += 2) {
//   for (var j = i; j < 7; j++) {
//     document.write('&nbsp;');
//   }
//   for (var k = 1; k <= i; k++) {
//     if (k % 2 == 0) {
//       document.write('A');
//     } else {
//       document.write('*');
//     }
//   }
//   document.write('<br>');
// }

// pyramid
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 9; j++) {
//     if ((i + j == 6) || (j - i == 4) || (i == 5)) {
//       document.write('*');
//     } else {
//       document.write('&nbsp;&nbsp;');
//     }
//   }
//   document.write('<br>');
// }

// hash pyramid
// for (var i = 1; i <= 6; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write('#');
//   }
//   document.write('<br>');
// }

// for (var i = 1;i <= 3; i++) {
//   for (var j = 1; j <= i;j++) {
//     document.write(j ** i + ' ');
//   }
//   document.write('<br>');
// }


// number pyramid
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write('<br>');
}









