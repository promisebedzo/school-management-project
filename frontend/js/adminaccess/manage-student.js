'use strict'

const addStudent=document.querySelector('#addstudent-button')
const studentForm=document.querySelector('#form-container')
const mainPage=document.querySelector('#adminaccess-student')
addStudent.addEventListener('click',function(){
  mainPage.style.display="none"
studentForm.style.display="block"
  studentForm.style.display = 'flex';
})