//sometimes we need some of the properties from an object or some vlues from arrays
//destructuring makes this easy to extract properties form arrays and objects and stor them in variables

//===============================================================Objects destructuring

const person = {
  name: "ubaid",
  rollNo: 11,
  gpa: 3.5,
};
//suppose i need the name and roll no
let { name, rollNo } = person;
console.log("Name is: ", name, " and Roll No is: ", rollNo);

//=================================passing to funciton
function printdata({ name, rollNo }) {
  console.log("Name of person is: ", name, " and Roll No is: ", rollNo);
}

printdata(person); // the function will just take name and rollNo

//================================================================================================================
//================================================================Array Destructuring

const studentsMarks = [20, 30, 40, 50];
//suppose i want the marks of first two studnets

const [studnet1marks, student2marks] = studentsMarks;
//it will store the first two marks from the array in the variables repectively

console.log("Student #1 marks : ", studnet1marks); //20
console.log("Student #2 marks : ", student2marks); //30
