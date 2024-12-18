//document.write('<p> 2 x 0 = 0 </P>');
//document.write('<p> 2 x 1 = 2 </P>');
//document.write('<p> 2 x 2 = 4 </P>');
//document.write('<p> 2 x 3 = 6 </P>');
//document.write('<p> 2 x 4 = 8 </P>');
//document.write('<p> 2 x 5 = 10 </P>');
//document.write('<p> 2 x 6 = 12 </P>');
//document.write('<p> 2 x 7 = 14 </P>');
//document.write('<p> 2 x 8 = 16 </P>');
//document.write('<p> 2 x 9 = 18 </P>');
//document.write('<p> 2 x 10 = 20 </P>');

// for(let i=1;i<=10;i++){
//     document.write(`<p> ${i} </p>`);
// }
// for(let i=2;i<21;i+=2){
//     document.write(`<p> ${i} </p>`);
// }

// let result;
// for(let i=0; i<=10; i++){
//    result = 2 * i;
//    document.write(`<p>2 X ${i} = ${result} </p>`);
// }
// for(let i=0; i<=10; i++){
//     document.write(`<p>2 X ${i} = ${2*i} </p>`);
//  }

// function multiTable(){
//     let num = prompt("Please enter the table number");
//     let result = 0;
    
//     document.write(`<h1> Table of ${num} </h1>`);
    
//     for(let i=0; i<=10; i++){
//         result = num * i
//         document.write(`<p>${num} X ${i} = ${result} </p>`);
//      }
// }

//arrays
let students = ["Vonde", "Derrick","Christian","Nick","Tom","Brandon","Christopher","Anthony","Eduardo"];
let ages = [32,33,45,23,20,30,40,28,22];

//display on the console
// console.table(students);
// console.table(ages);
//change info
// students[5]="Brandon Merle";
// ages[8]=20;

// console.table(students);
// console.table(ages);

for(let i=0;i<9;i++){
    document.getElementById("students").innerHTML+=`<tr> 
    <td>${i+1}</td>
    <td>${students[i]}</td>
    <td>${ages[i]} </td>
    </tr>`;
}
