const modalWindow = document.getElementById('modal-window');
const closeBtn = document.getElementById('close-modal-btn');
const openBtnMain = document.getElementById('open-modal-btn-main');
const standardPlan = document.getElementById('standard');
const premiumPlan = document.getElementById('premium');
const lifetimePlan = document.getElementById('lifetime');
const standardBtn = document.getElementById('standardBtn');
const premiumBtn = document.getElementById('premiumBtn');
const lifetimeBtn = document.getElementById('lifetimeBtn');
const checkIconStandard = document.getElementById('check-icon-standard');
const checkIconPremium = document.getElementById('check-icon-premium');
const checkIconLifetime = document.getElementById('check-icon-lifetime');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const errorReqName = document.getElementById('user-name-req');
const errorReqEmail = document.getElementById('user-email-req');

const checkBtnsColor = () => {
  if (lifetimePlan.checked) {
    lifetimeBtn.style.backgroundColor = '#FF9209';
    lifetimeBtn.style.color = '#FFFF';
    checkIconLifetime.style.color = '#FFFF';

    standardBtn.style.backgroundColor = 'transparent';
    standardBtn.style.color = '#0278ED';
    checkIconStandard.style.color = 'transparent';

    premiumBtn.style.backgroundColor = 'transparent';
    premiumBtn.style.color = '#FF5437';
    checkIconPremium.style.color = 'transparent';
  } else if (standardPlan.checked) {
    lifetimeBtn.style.backgroundColor = 'transparent';
    lifetimeBtn.style.color = '#FF9209';
    checkIconLifetime.style.color = 'transparent';

    standardBtn.style.backgroundColor = '#0278ED';
    standardBtn.style.color = '#FFFF';
    checkIconStandard.style.color = '#FFFF';

    premiumBtn.style.backgroundColor = 'transparent';
    premiumBtn.style.color = '#FF5437';
    checkIconPremium.style.color = 'transparent';
  } else if (premiumPlan.checked) {
    lifetimeBtn.style.backgroundColor = 'transparent';
    lifetimeBtn.style.color = '#FF9209';
    checkIconLifetime.style.color = 'transparent';

    standardBtn.style.backgroundColor = 'transparent';
    standardBtn.style.color = '#0278ED';
    checkIconStandard.style.color = 'transparent';

    premiumBtn.style.backgroundColor = '#FF5437';
    premiumBtn.style.color = '#FFFF';
    checkIconPremium.style.color = '#FFFF';
  }
};

const clearFields = () => {
  userName.value = '';
  userEmail.value = '';
  errorReqName.innerText = '';
  errorReqEmail.innerText = '';
  userName.style.backgroundColor = '#F2F2F2';
  userEmail.style.backgroundColor = '#F2F2F2';
};

closeBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  clearFields();
});

window.addEventListener('click', (event) => {
  if (event.target === modalWindow) {
    modalWindow.style.display = 'none';
    clearFields();
  }
});

openBtnMain.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  lifetimePlan.checked = true;

  checkBtnsColor();
});

lifetimeBtn.addEventListener('click', (event) => {
  modalWindow.style.display = 'block';
  event.preventDefault();
  lifetimePlan.checked = true;

  checkBtnsColor();
});

standardBtn.addEventListener('click', (event) => {
  modalWindow.style.display = 'block';
  event.preventDefault();
  standardPlan.checked = true;

  checkBtnsColor();
});

premiumBtn.addEventListener('click', (event) => {
  modalWindow.style.display = 'block';
  event.preventDefault();
  premiumPlan.checked = true;

  checkBtnsColor();
});

document.getElementById('buy-standard-btn').addEventListener('click', () => {
  modalWindow.style.display = 'block';
  standardPlan.checked = true;

  checkBtnsColor();
});

document.getElementById('buy-premium-btn').addEventListener('click', () => {
  modalWindow.style.display = 'block';
  premiumPlan.checked = true;

  checkBtnsColor();
});

document.getElementById('buy-lifetime-btn').addEventListener('click', () => {
  modalWindow.style.display = 'block';
  lifetimePlan.checked = true;

  checkBtnsColor();
});



