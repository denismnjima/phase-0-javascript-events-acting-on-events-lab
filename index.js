// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
  
    // Move left only if it's greater than 0
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left, 10);
  
    // Move right only if it's less than 360
    if (left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }
  