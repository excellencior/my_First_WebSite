var student1 = {Name: "Apu", Department:"Computer Science", Roll:334496};
var student2 = {Name:"Sushmi", Department:"Computer Science", Roll:334486};
console.log(student2);
// extracting and changing values
var student_name = student1.Name;
console.log(student_name);
var student_roll = student1["Roll"];
console.log(student_roll);

student2.favourite_number = 3; // Adding an extra information
console.log(student2);