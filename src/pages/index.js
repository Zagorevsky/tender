const usdCbRf = document.querySelector('.sidenav__cbr_usd');

getUsdCbRf = () => {

  fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      return response.json();
    })
    .then((json) => {
      usdCbRf.textContent = json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_USD_LAST')];
    })
    .catch((error) => {
      console.error(error);
    });
}

getUsdCbRf();


