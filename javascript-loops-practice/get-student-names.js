/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}

/*
1) Get names out of array
2) parse through each object inside of the array
3) retrieve the name
4) add it to other array

PS
1) output array
2)for loop? (to parse through the given array, i < array.length)
3) 2 methods
  a)push(students at i . name)
  b)push (for in loop -> bracket notation)
  */
