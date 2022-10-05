import {errorReqEmail, errorReqName, submitBtn, userEmail, userName} from "./form-validation";

export const modalWindow = document.getElementById('modal-window');
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

const buyStandardBtn = document.getElementById('buy-standard-btn');
const buyPremiumBtn = document.getElementById('buy-premium-btn');
const buyLifetimeBtn = document.getElementById('buy-lifetime-btn');

export const clearFields = () => {
  userName.value = '';
  userEmail.value = '';
  errorReqName.innerText = '';
  errorReqEmail.innerText = '';
  userName.style.backgroundColor = '#F2F2F2';
  userEmail.style.backgroundColor = '#F2F2F2';
  submitBtn.disabled = true;
};

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

const onPlanBtnListener = (btn, plan) => {
  btn.addEventListener('click', (event) => {
    modalWindow.style.display = 'block';
    event.preventDefault();
    plan.checked = true;

    checkBtnsColor();
  });
};

const onBuyBtnListener = (btn, plan) => {
  btn.addEventListener('click', () => {
    modalWindow.style.display = 'block';
    plan.checked = true;

    checkBtnsColor();
  });
};

onPlanBtnListener(lifetimeBtn, lifetimePlan);
onPlanBtnListener(standardBtn, standardPlan);
onPlanBtnListener(premiumBtn, premiumPlan);

onBuyBtnListener(buyLifetimeBtn, lifetimePlan);
onBuyBtnListener(buyStandardBtn, standardPlan);
onBuyBtnListener(buyPremiumBtn, premiumPlan);




