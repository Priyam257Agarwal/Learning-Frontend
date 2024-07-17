
//Number-1 Sort an Array of Numbers
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Sample input
  let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  console.log(sortArray(arr)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

  // Number -2 Sort an Array of Strings by Length
  function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  // Sample input
  let arr = ["apple", "banana", "cherry", "date"];
  console.log(sortByLength(arr)); // Output: ["date", "apple", "banana", "cherry"]

  //number -3 Sort an Array of Objects by a Property -In this case Let's say by age

  function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
  }
  
  // Sample input
  let arr = [
    { name: "John", age: 25 },
    { name: "Jane", age: 20 },
    { name: "Jim", age: 30 }
  ];
  console.log(sortByAge(arr)); // Output: [{ name: "Jane", age: 20 }, { name: "John", age: 25 }, { name: "Jim", age: 30 }]


  // Number -4 Sort an Array of Numbers in Descending Order

  function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  // Sample input
  let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  console.log(sortArrayDescending(arr)); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]


  // Number -5 Sort an Array of Dates
  function sortDates(arr) {
    return arr.sort((a, b) => new Date(a) - new Date(b));
  }
  
  // Sample input
  let arr = ["2024-01-01", "2023-01-01", "2022-01-01", "2021-01-01"];
  console.log(sortDates(arr)); // Output: ["2021-01-01", "2022-01-01", "2023-01-01", "2024-01-01"]