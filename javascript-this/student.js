/* exported student */
var student = {
  firstName: 'Markus',
  lastName: 'Doan-Le',
  subject: 'Python',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var intro = 'Hello, my name is ' + this.firstName + ' ' +
    this.lastName + ' and I am studying ' + this.subject + '.';
    return intro;
  }
};
