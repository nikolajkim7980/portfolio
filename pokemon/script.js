const icons = [
  "https://image.flaticon.com/icons/svg/189/189001.svg",
  "https://image.flaticon.com/icons/svg/188/188987.svg",
  "https://image.flaticon.com/icons/svg/188/188990.svg",
  "https://image.flaticon.com/icons/svg/188/188989.svg",
  "https://image.flaticon.com/icons/svg/188/188993.svg",
  "https://image.flaticon.com/icons/svg/189/189000.svg",
  "https://image.flaticon.com/icons/svg/188/188995.svg",
  "https://image.flaticon.com/icons/svg/188/188997.svg",
];

icons.forEach(icon => {
  let img = document.createElement("img");
  img.src=icon;
  document.body.appendChild(img);
  img.addEventListener('click', function(){
    document.body.removeChild(img)
  })
});

document.querySelectorAll("img").forEach(img => {
    
  img.setTarget = function() {
    this.targetX = Math.floor(Math.random() * window.innerWidth);
    this.targetY = Math.floor(Math.random() * window.innerHeight);
  };
  
  img.move = function() {
    this.style.top = this.top + "px";
    this.style.left = this.left + "px";
    
    if (this.left == this.targetX && this.top == this.targetY) {
      this.setTarget();
    }
    
    if (this.left < this.targetX) {
      this.left++;
    }
    else if (this.left > this.targetX)  {
      this.left--;
    }
    
    if (this.top < this.targetY) {
      this.top++;
    }
    else if (this.top > this.targetY)  {
      this.top--;
    }
    
    requestAnimationFrame(this.move.bind(this));
  }
  
  img.left = Math.floor(Math.random() * window.innerWidth);
  img.top = Math.floor(Math.random() * window.innerHeight);
  img.setTarget();
  
  img.move();
  
  img.addEventListen
  
})
