document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('button');
  const vitez1 = document.getElementById('vitez1');
  const vitez2 = document.getElementById('vitez2');
  const obr1 = document.getElementById('obr1');
  const obr2 = document.getElementById('obr2');

  
  const beats = {
    0: [1, 3],
    1: [2, 4], 
    2: [0, 3], 
    3: [1, 4], 
    4: [0, 2]  
  };

  button.onclick = () => {
    let remiza;
    do {
      vitez1.innerHTML = "Hráč 1";
      vitez2.innerHTML = "Hráč 2";

      const hrac1 = Math.floor(Math.random() * 5);
      const hrac2 = Math.floor(Math.random() * 5);

      obr1.src = hrac1 + ".png";
      obr2.src = hrac2 + ".png";

      if (hrac1 === hrac2) {
        remiza = true;
        console.log("Remíza.\nSpouštím další hru.");
      } else if (beats[hrac1].includes(hrac2)) {
        vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
        vitez1.style.color = "red";
        vitez2.style.color = "";
        remiza = false;
      } else {
        vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
        vitez2.style.color = "red";
        vitez1.style.color = "";
        remiza = false;
      }
    } while (remiza);
  };
});

