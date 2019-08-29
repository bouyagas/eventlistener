(function() {
  console.log('Up and running');

  document.addEventListener('click', function() {
    let mainTitle = document.querySelector('.title');
    mainTitle.style.visibility = 'hidden';
  });

  let posL1 = 0;
  let posL2 = 0;
  let posL3 = 0;

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 49) {
      let image1 = document.querySelector('.img1');
      posL1 += 15;
      image1.style.marginLeft = posL1 + 'px';
      console.log(posL1);
      if (posL1 > 600) {
        alert('Player 1 won!!!!!!!!!!');
      }
    }
  });

  setTimeout(function() {
    let image2 = document.querySelector('.img2');
    posL3 += 800;
    image2.style.marginLeft = posL3 + 'px';
    if (posL3 > 600) {
      alert(' Player 1 and Player 2 lose!!!!!!!!!!!!');
    }
  }, 10000);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 50) {
      let image3 = document.querySelector('.img3');
      posL2 += 15;
      image3.style.marginLeft = posL2 + 'px';
      console.log(posL2);
      if (posL2 > 600) {
        alert('Player 2 won!!!!!!!!!!');
      }
    }
  });
})();
