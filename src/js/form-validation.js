import {clearFields, modalWindow} from "./modal-window";

export const userName = document.getElementById('user-name');
export const userEmail = document.getElementById('user-email');
export const errorReqName = document.getElementById('user-name-req');
export const errorReqEmail = document.getElementById('user-email-req');
export const submitBtn = document.getElementById('submit-btn');

const form = document.getElementById('form');
const loadingBox = document.getElementById('loading');

const onUserNameListener = (eventName) => {
  userName.addEventListener(eventName, (event) => {
    if (event.target.value === '') {
      errorReqName.innerText = 'the field is required*';
      userName.style.backgroundColor = '#FFEEEE';
      submitBtn.disabled = true;
    } else {
      errorReqName.innerText = '';
      userName.style.backgroundColor = '#F2F2F2';
      if (userEmail.value !== '') {
        submitBtn.disabled = false;
      }
    }
  });
};

const onUserEmailListener = (eventName) => {
  userEmail.addEventListener(eventName, (event) => {
    if (event.target.value === '') {
      errorReqEmail.innerText = 'the field is required*';
      userEmail.style.backgroundColor = '#FFEEEE';
      submitBtn.disabled = true;
    } else {
      errorReqEmail.innerText = '';
      userEmail.style.backgroundColor = '#F2F2F2';
      if (userName.value !== '') {
        submitBtn.disabled = false;
      }
    }
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  loadingBox.style.display = 'flex';
  submitBtn.disabled = true;

  setTimeout(() => {
    loadingBox.style.display = 'none';
    submitBtn.disabled = false;
    modalWindow.style.display = 'none';
    clearFields();
  },2000);

   setTimeout(() => {
     alert('Form has been sent. Thank you!');
   }, 2300);
});

onUserNameListener('blur');
onUserNameListener('input');
onUserEmailListener('blur');
onUserEmailListener('input');


