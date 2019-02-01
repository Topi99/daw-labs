document.addEventListener('DOMContentLoaded', event => {
  const artsCont = document.querySelector('.articulos');
  const payment = document.querySelector('.pay');
  const art1 = document.querySelector('#a1');
  const art2 = document.querySelector('#a2');
  const art3 = document.querySelector('#a3');
  const qarte1 = document.querySelector('#qarte1');
  const qarte2 = document.querySelector('#qarte2');
  const qarte3 = document.querySelector('#qarte3');
  let qart1 = 5, qart2 = 5, qart3 = 5;
  let arts = 0;
  let pay = 0;
  let iva = 0;

  const updateArtsCont = () => {
    artsCont.innerHTML = `Artículos: ${arts}`;
  }

  const updatePayment = value => {
    iva += value * 0.16;
    pay += value + iva;
    payment.innerHTML = `Total: $${pay.toFixed(2)}MXN (IVA Incluido de $${iva.toFixed(2)}MXN)`;
  }

  const addArt = (qty, val, qart, qarte) => {
    if(!qart) {
      alert('Ya no hay ejemplares disponibles de éste artículo.');
      return qart;
    }

    arts += qty;
    qart -= qty;
    updateArtsCont();
    updatePayment(val);
    qarte.innerHTML = `Disponibles: ${qart}`;

    return qart;
  }

  updateArtsCont();
  updatePayment(0);
  
  art1.addEventListener('click', e => qart1 = addArt(1, 35495, qart1, qarte1));

  art2.addEventListener('click', e => qart2 = addArt(1, 49346, qart2, qarte2));

  art3.addEventListener('click', e => qart3 = addArt(1, 9857, qart3, qarte3));
});
