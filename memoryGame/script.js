function getBlackNumbers() {
  let btns = document.querySelectorAll("button");
  let numbers = [];
  
  btns.forEach(function(btn) {
    if (btn.style.background === 'black') {
      numbers.push(btn.innerText);
    }
  })
  
  return numbers;
}

function addButton(i) {
  let colors = ['salmon', 'skyblue', 'lightgreen', 'orange'];
  let btn = document.createElement("button");
  btn.innerText = i;
  btn.style.color = colors[i%colors.length];
  btn.style.background = colors[i%colors.length];
  btn.addEventListener('click', function() {
    btn.style.background = "black";
    
    let blackNumbers = getBlackNumbers();
      // [], [1], [1,3], [3,3]

    if (blackNumbers.length == 2 && blackNumbers[0] === blackNumbers[1]) {
      let btns = document.querySelectorAll("button");
      btns.forEach(function(btn) {
        if (btn.style.background === "black")
          btn.style.background = "red";
      });
    }
    else if (blackNumbers.length == 2) {
      let btns = document.querySelectorAll("button");
      btns.forEach(function(btn) {
        if (btn.style.background === "black")
          setTimeout(function() {
            btn.style.background = btn.style.color;            
          }, 1000);

      });
    }
    
  });
  document.body.appendChild(btn);
}

let numbers = [];

for(let i=0; i<20; i++) {
  numbers[i] = Math.floor(i/2);
}

for(let i=0; i<1000; i++) {
  let index1 = Math.floor(Math.random() * numbers.length);
  let index2 = Math.floor(Math.random() * numbers.length);

  let temp = numbers[index1]
  numbers[index1] = numbers[index2]
  numbers[index2] = temp
}

console.log(numbers)


numbers.forEach(function(num) {
  addButton(num);
})