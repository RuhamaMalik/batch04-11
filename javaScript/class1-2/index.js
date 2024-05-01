// alert('Hello Ruhama');
// Alert('Hello Ruhama'); // error

// var myMessage = "hello baji";
// alert(myMessage);

// single line comment

/*
Multi
line 
comment
*/

// window.alert("Hello Ruhama Gull")


/////////////////////// Variables

// var username = "Ruhama Gull";

// console.log("Direct message");
// console.log("Hello" , username);
// console.log(username)
// console.log(username);
// console.log(username);
// console.log(username);
// console.log(username);

// document.write("abcd")

// = ---> assignment operator

// var email; // declaration
// email = "abcd@gmail.com"; //initialization / assignment
// console.log(email);

// var description = "my description";
// description = "my updated description"; //reassign
// description = "my updated description 2"
// console.log(description);

// meaning ful variable name 

// var x = "Lavishka";
// var username = "Lavishka";

// premitive data types

// string ""/ ''
// number 0-9
// boolean true/false
// undefine 
// null 0, ''

// var  username = null;

// console.log(username);

// var age = 10;
// age = 11.0 ;
// console.log(age);


// var isLoggedIn = true;
// console.log(isLoggedIn);


// var totalPrice = 0;
// var item1 = 100;
// var item2 = 200;

// totalPrice = totalPrice + item1 + item2  
// console.log(totalPrice);//300

// var item3 = 300;
// totalPrice = totalPrice + item3;

// console.log(totalPrice);


// .. legal

// var variableName;
// var $varN ;
// var _varN;
// var student1;
// var my1student
// var myvar ;

// .. illegal

// var my name;
// var 1student
// var var ;

// var flower = 'Rose';
// console.log(Flower); // error >>>>> case sensitive

///////////// js naming convention

//  var myFirstVar ;            //camelCase
//  var my_first_var;          //snack_case

// var rollNumber = 101;
//  var section = 'A';

/*
Expression: combination of 

*/

// Familiar operators

// var exp1 = 2 + 2; // 4
// var exp2 = 13 -3; // 10
// var exp3 = 5 * 5; // 25
// var exp4 = 25 / 5; // 5
// var exp5 = 10 % 3; // 1

// console.log(exp1);
// console.log(exp2);
// console.log(exp3);
// console.log(exp4);
// console.log(exp5);

/////////////// Unfamiliar operators

// ++ --


// var num1 = 1;
// num1 = num1 + 1;
// num1 = 1 + num;
// console.log(num1); // 2

// var num2 = 1;
// num2 = num2 - 1;
// console.log(num2); // 0

// var num = 1;
// num++; //  post increament / postFix
// ++num; // pre increament / preFix

// .. pre-increament
// var num = 1;

// // console.log(num); // 1

// num = ++num;

// console.log(num); // 2


// // .. post-increament

// var num = 1;
// console.log(num); // 1

// num = num++;
// console.log(num); //

// Example

// var num = 1; // 4
// var result = num++ + num++ + ++num;
//    //      =  1    +  2    +   4

//    console.log(result);
//    console.log(num);


// var value = 5; //
// var result = value + value++ + ++value  - 2;
// //             5   +   5      +   7     - 2

// console.log(result); //15


// var a = 7; // 8
// var b = 4; // 7
// var c = 2; // 3

// var result = ++a - b + c++ + ++b - 6 + ++b + ++b + c;
//               8  - 4 +  2  +  5  - 6 +   6  +  7 + 3

// console.log(result);


///////////////// Decreament (--)

// var num = 2;

// num--;
// --num;

// console.log(num); // 1


// var a = 6; // 5 
// // a = --a;

// a = a-- + a;
// //   6  +  5
// console.log(a); // 11



// var a = 20; //19
// var b = 5; // 3
// var c = 10; // 9

// var result = c +  --b + --b + c-- + --a;
// //           10 +  4  +   3  + 10 +  19  = 46

// console.log("result = " , result);
// console.log("variable a = ", a );
// console.log("variable b = ", b );
// console.log("variable c = ", c );


// var a = 3; //  0
// var b = 7; //  7
// var c = 9; //  9

// var result = ++b - c-- + ++b + --b - --a + a-- - --a + ++c - --b;
// //            8  -  9  +   9 +  8  -   2 +  2  -  0  +   9 -   7

//BODMAS
// console.log(result); //18

// console.log((3 +1) *4);
// console.log(4 * (2 +3) *3); // 4 * 5 * 3 = 17


//////////// cOnCATENATION

// console.log(2 + 2); //4
// console.log("2", 2); // 2 2
// console.log("2" + 2); // 22
// console.log('my age is = ' + 2); // 


// console.log(5 - "2"); // 3

// console.log(1 + 1 + '2' + 6 + 1); // 2261 
// console.log(1 + 1 + '2' + ( 6 + 1) ); // 
//             1 + 1  + '2'  + 7
//                2 + '2'  + 7
//                   '22'  + 7 
//                       227

// var fName = "Ruhama";
// var lastName = "Gull"
// console.log(fName + " " + lastName);


// ASSIGNMENT OPERATORS
// var a = 2;

// a = a+2;
// a += 2;

// a -= 1;
// console.log(a);
