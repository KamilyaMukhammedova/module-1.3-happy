const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const errorReqName = document.getElementById('user-name-req');
const errorReqEmail = document.getElementById('user-email-req');
const submitBtn = document.getElementById('submit-btn');

const onDisabled = (btn) => {
  btn.style.pointerEvents = 'none';
  btn.style.opacity = '0.5';
};

const outDisabled = (btn) => {
  btn.style.pointerEvents = 'yes';
  btn.style.opacity = '1';
};

const onUserNameListener = (eventName) => {
  userName.addEventListener(eventName, (event) => {
    if (event.target.value === '') {
      errorReqName.innerText = 'the field is required*';
      userName.style.backgroundColor = '#FFEEEE';
      onDisabled(submitBtn);
    } else {
      errorReqName.innerText = '';
      userName.style.backgroundColor = '#F2F2F2';
      if (userEmail.value !== '') {
        outDisabled(submitBtn);
      }
    }
  });
};

const onUserEmailListener = (eventName) => {
  userEmail.addEventListener(eventName, (event) => {
    if (event.target.value === '') {
      errorReqEmail.innerText = 'the field is required*';
      userEmail.style.backgroundColor = '#FFEEEE';
      onDisabled(submitBtn);
    } else {
      errorReqEmail.innerText = '';
      userEmail.style.backgroundColor = '#F2F2F2';
      if (userName.value !== '') {
        outDisabled(submitBtn);
      }
    }
  });
};

onUserNameListener('blur');
onUserNameListener('input');
onUserEmailListener('blur');
onUserEmailListener('input');


