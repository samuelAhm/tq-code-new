window.Webflow ||= [];
window.Webflow.push(() => {

    const priceElement = document.querySelectorAll('.card-price');
    const locale = navigator.language;
    const selectCurrency = <HTMLInputElement>document.getElementById('selectCurrency');
    const setInputValue = function(){
      // eslint-disable-next-line prettier/prettier
      if (locale === 'en-US') {selectCurrency.value ="2"}
      if (locale === 'en-GB') {selectCurrency.value ="1"}
      if (locale === 'en-150') {selectCurrency.value ="3"}
    }
  //set input Value based on User's location
    setInputValue();
    const getPrices = async function (value = 1) {
      try {
        const result = await fetch(
          `https://api.techloq-uat.com/billing-lookup/promotional-pricing?currencyId=${value}`
        );
        const { androidPlanPricing, emailPlanPricing, filteringPlanPricing } =
          await result.json();
        // const data  = await result.json();
        //update android Plan Price.
        priceElement.forEach((el) => {
          if (el.closest('.andriod-month-pane')) {
            el.innerHTML = `<div class="card-price">${androidPlanPricing[2].price.currency.symbol}${androidPlanPricing[2].price.amount}<span class="price-span">/ month</span></div>`;
          }
        });
        priceElement.forEach((el) => {
          if (el.closest('.quarter-tab-pane')) {
            el.innerHTML = `<div class="card-price">${androidPlanPricing[1].price.currency.symbol}${androidPlanPricing[1].price.amount}<span class="price-span">/ quarter</span></div>`;
          }
        });
        priceElement.forEach((el) => {
          if (el.closest('.anual-tab-pane')) {
            el.innerHTML = `<div class="card-price">${androidPlanPricing[0].price.currency.symbol}${androidPlanPricing[0].price.amount}<span class="price-span">/ year</span></div>`;
          }
        });
        //update email plan price
        priceElement.forEach((el) => {
          if (el.closest('.thrdcard')) {
            el.innerHTML = `<div class="card-price">${emailPlanPricing.currency.symbol}${emailPlanPricing.amount}<span class="price-span">/ year</span></div>`;
          }
        });
        //update filterPlan price
        //monthly
        priceElement.forEach((el) => {
          if (el.closest('.month-price-pane')) {
            el.innerHTML = `<div class="card-price">${filteringPlanPricing[2].price.currency.symbol}${filteringPlanPricing[2].price.amount}<span class="price-span">/ month</span></div>`;
          }
        });
        //quarterly
        priceElement.forEach((el) => {
          if (el.closest('.quarter-price')) {
            el.innerHTML = `<div class="card-price">${filteringPlanPricing[1].price.currency.symbol}${filteringPlanPricing[1].price.amount}<span class="price-span">/ quarter</span></div>`;
          }
        });
        //yearly
        priceElement.forEach((el) => {
          if (el.closest('.anual-price-pan')) {
            el.innerHTML = `<div class="card-price">${filteringPlanPricing[0].price.currency.symbol}${filteringPlanPricing[0].price.amount}<span class="price-span">/ year</span></div>`;
          }
        });
      } catch (err) {
        alert(err);
      }
    };
  // selectCurrency.onchange = getPrices(+selectCurrency.value);
  selectCurrency.addEventListener('change', function(){
    getPrices(+selectCurrency.value)
  })
    getPrices(+selectCurrency.value);
});

