// Student 1
let student1_name = "Baris";
let student1_surname = "Yalcin";
let student1_dob = "1996";
let student1_grade1 = 70;
let student1_grade2 = 80;
let student1_grade3 = 95;


// Student 2
let student2_name = "Name";
let student2_surname = "Surname";
let student2_dob = "1997";
let student2_grade1 = 40;
let student2_grade2 = 50;
let student2_grade3 = 50;

// Age Calculation
let currentYear = new Date().getFullYear();
let student1_age = currentYear - parseInt(student1_dob);
let student2_age = currentYear - parseInt(student2_dob);

// Grade Calculation
let student1_avg = (student1_grade1 + student1_grade2 + student1_grade3) / 3;
let student2_avg = (student2_grade1 + student2_grade2 + student2_grade3) / 3;

console.log(student1_name + " " + student1_surname);
console.log(student1_age);
console.log(parseFloat(student1_avg));
console.log(student1_avg >= 50);

console.log(student2_name + " " + student2_surname);
console.log(student2_age);
console.log(parseFloat(student2_avg));
console.log(student2_avg >= 50);



