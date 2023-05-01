**Part 2 - Question 1**:
On line 12, the code will output 3, this is because it outputs i, which is the counter variable for the for loop that has the keyword var. Since it was declared with var, the code was able to access it and outputted 3 since the loop ended when it reached the length of the input array

**Part 2 - Question 2**:
On line 13, the code will output 150. This is because discountedPrice stores the price with the discount applied. On the last iteration of the for loop, discountedPrice is set to prices[2] * (1-0.5) which is 300 * 0.5 = 150. Since discountedPrice was declared with var, the code was able to access it and output 150. 

**Part 2 - Question 3**:
On line 14, the code will output 150. This is because discountedPrice first stores the price with the discount applied. On the last iteration of the for loop, discountedPrice is set to 150. Then finalPrice is set equal to the value of discountedPrice rounded nearest integer to round the price which is still 150. Since both discountedPrice and finalPrice was declared with var, the code was able to access it and outputted 150.

**Part 2 - Question 4**:
This function returns an array of values that contain the values from the input applied with the discount. In this case, the input values were [100, 200, 300] and the discount is 0.5. The function then returns [50, 100, 150] which is the price of the value with a 0.5 discount. 

**Part 2 - Question 5**:
This code causes an error. This is because on line 12, the code tries to access i, but since it was declared with let, the variable i is only accessible in the block it was declared in which is the for loop. which is why the code returns "ReferenceError: i is not defined"

**Part 2 - Question 6**:
This code causes an error. This is because line 13 tries to access discountedPrice but since discountedPrice was declared with let, it is only accessible in the block it was declared in which is the for loop. Which is why on line 13, it is unable to access discountedPrice and the code outputs "ReferenceError: discountedPrice is not defined"

**Part 2 - Question 7**:
On line 14, the code outputs 150. This is because the variable that is printed was declared with the let keyword and since it was not declared in the for loop, it was able to be accessed on line 14 since its scope is the whole function.

**Part 2 - Question 8**:
The function will return an array [50,100,150] which is the discounted values of the input array [100,200,300]. Although the variables were declared with let, since the discounted variable was declared outside of the for loop, its scope is the entire function so line 16 is able to access the discounted array and return it.

**Part 2 - Question 9**:
This code causes an error. This is because line 11 tries to access i but since the variable i was declared with the let keyword, it is only accessible within its block which is the for loop. Which is why the code causes an error "ReferenceError: i is not defined"

**Part 2 - Question 10**:
On line 12, the code outputs 3. This is because length, which is the variable that is outputted, was declared to be the length of the input array prices and since it has const, it will always be the length of the array.

**Part 2 - Question 11**:
This function will return the array [50,100, 150] which is the discounted prices of the input array [100,200,300]. The reason why this code does not cause an error is because const only prevents reassignment, which is not happening for the discounted array when the code pushes discountedPrice to the array discounted. Also, although the varaible discountedPrice is being reassigned, the for loop for each iteration declares a new discountedPrice variable which is why the code has no errors.

**Part 2 - Question 12a**:
student.name

**Part 2 - Question 12b**:
student['Grad Year']

**Part 2 - Question 12c**:
student.greeting()

**Part 2 - Question 12d**:
student['Favorite Teacher'].name

**Part 2 - Question 12e**:
student.courseLoad[0]

**Part 2 - Question 13a**:
'32': the numeric version of 2 was converted into a string to concatenate it with '3' to create the string '32'

**Part 2 - Question 13b**:
1: since minus only is a mathematical function, the '3' is converted into its numeric value and subtracted by 2 to get 1

**Part 2 - Question 13c**:
3: Since 3 is a numeric value, null is converted into its numeric value which is 0 so the total is 3

**Part 2 - Question 13d**:
'3null': Since '3' is a string, null is converted into its string conversion which is 'null'

**Part 2 - Question 13e**:
4: Since 3 is numeric, true is converted into its numeric value which is 1

**Part 2 - Question 13f**:
0: False is converted into its numeric value since its a math operation and then null is changed to its numeric value of 0

**Part 2 - Question 13g**:
'3undefined': Since 3 is a string, undefined is converted into a string and then concatenated

**Part 2 - Question 13h**:
NaN: Since minus is a math operation '3' is converted to its numeric value which undefined is changed to NaN

**Part 2 - Question 14a**:
true: the string '2' is converted to its numeric value

**Part 2 - Question 14b**:
false: string comparison uses lexicographical order so the first characters are checked and 2 is not lexicographically less than 1

**Part 2 - Question 14c**:
true: the string '2' becomes its numeric value

**Part 2 - Question 14d**:
false: === checks equality without type conversion

**Part 2 - Question 14e**:
false: true becomes its numeric value which is 1 which makes the statement false

**Part 2 - Question 14f**:
true: Boolean conversion makes everything thats not "empty" true, and this conversion is done before checking for equality

**Part 2 - Question 15**:
"==" is the equality operation which checks if two values are equal to each other after type conversion. On the other hand, "===" is strict equality and checks for equality without type conversion.

**Part 2 - Question 17**:
The result will be the array [2,4,6]. This is the result because the callback function which is doSomething waits until the execution of the modifyArray function so when modifyArray is pushing each value, it ensures that the values returned is the array of the input values that are each doubled.

**Part 2 - Question 19**:
The output of the above code is 
1 
4 
3 
2
