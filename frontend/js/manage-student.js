document.querySelector('.js-addstudent-btn').addEventListener('click', ()=> {
  document.querySelector('.js-add-student-form').classList.remove('pop-up-hider');
});

document.querySelector('.close-form-btn').addEventListener('click', ()=>{
  document.querySelector('.js-add-student-form').classList.add('pop-up-hider');
})

const addStudentBtn = document.querySelector('.js-forms-btn');
const formModal = document.querySelector('.js-add-student-form');
const studentForm = document.querySelector('js-addstudent-form');

addStudentBtn.addEventListener('click', function(e) {
  e.preventDefault();
  formModal.classList.add('pop-up-hider');
  studentForm.reset();
});