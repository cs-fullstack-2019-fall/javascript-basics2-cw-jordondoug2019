var myNAme= ("My Name is : ");
var realName= ("Jordon DOuglas ");
console.log ( myNAme + realName );
alert( myNAme + realName );

var balance1 = prompt("What is your balance?");
var newBalance= parseInt(balance1)- 10;
alert( "You lost $10. Your new balance is " + newBalance);

var numGrade= prompt("Enter your number grade");
var exCred= prompt("ENter your extra credit");
var gradeCred= (parseInt(numGrade) + (parseInt(exCred)));
alert(gradeCred);

var balance= prompt ("What is your balance?");
var deduction= prompt( "How much do yu want to deduct?");
var balDeduct= (parseInt(balance)- (parseInt(deduction)));
alert(balDeduct)