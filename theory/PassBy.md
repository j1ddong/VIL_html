> In JavaScript, when a function is called, the arguments can be passed in two ways, either pass by value or pass by reference. 
> 
> Primitive data types such as string, number, null, undefined, and boolean, are passed by value while non-primitive data types such as objects, arrays, and functions are passed by reference in Javascript.

# Pass by value

- The function is called by directly passing the <u>value of the variable</u> as an argument. So any changes made inside the function do not affect the original value.

- Parameters passed as arguments create their ****own copy.**** So any changes made inside the function are made to the copied value not to the original value

- The original value and the copied value are independent of each other as they both have a different space in memory

```javascript
let num1 = 70
let num2 = num1 // num2 creates new memory place

console.log(num1) // 70
console.log(num2) // 70

num1 = 40  // it doesn't affect num2

console.log(num1) // 40
console.log(num2) // 70


```

```javascript
function multiplication(tmp) {
    tmp = tmp * 50;
    return tmp;
}
var num = 30;
var result = multiplication(num);
console.log(num); // 30
console.log(result); // 1500

```

# Pass by reference

- Function is called by directly passing the <u>reference/address of the variable</u> as an argument. So changing the value inside the function also change the original value. In JavaScript ****array and Object**** follows pass by reference property.

- parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value.

```javascript
let obj1 = {website: "Scaler Academy"}
let obj2 = obj1;

console.log(obj1)     // {website: "Scaler Academy"}
console.log(obj2)     // {website: "Scaler Academy"}

obj1.website = "Scaler Topics"

console.log(obj1)     // {website: "Scaler Topics"}
console.log(obj2)     // {website: "Scaler Topics"}

```

```javascript
let originalObj = {
name: "Scaler Academy",
rating: 4.5,
topic: "JavaScript"
};

function demo(tmpObj) { 
  tmpObj.rating = 5; 
  console.log(tmpObj.rating); 
} 

console.log(originalObj.rating);    // 4.5
demo(originalObj);             // 5
console.log(originalObj.rating);    //5

```
