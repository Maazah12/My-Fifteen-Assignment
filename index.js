// Step 1: Shuru kia ek blank array say
let toDoList = [];

// Step 2: push ka istemal karte hue list ke last main 3 kam shamil kiay
toDoList.push("Task 1: I wake up in the morning.");
toDoList.push("Task 2: Prayer is to be offered.");
toDoList.push("Task 3: I have to get ready for office.");

// Step 3: unshift ka istemal karte hue list k shuru main 2 kam shamil kiay
toDoList.unshift("Task 4: Finish the work.");
toDoList.unshift("Task 5: I'm going to sleep.");

// Step 4: Current state of the toDoList array ko show kia console.log main
console.log("Current toDoList:", toDoList);

// Step 5: pop ka istemal karte hue list se last kam ko hata kar task ko display kia console.log main.
let completedLastTask = toDoList.pop();
console.log("Completed last task:", completedLastTask);

// Step 6: shift ka istemal karte hue list se pehla kam hata kr task ko display kia console.log main.
let completedFirstTask = toDoList.shift();
console.log("Completed first task:", completedFirstTask);

// Step 7: Update to do list ko console.log main dikhaya.
console.log("Updated toDoList:", toDoList);
