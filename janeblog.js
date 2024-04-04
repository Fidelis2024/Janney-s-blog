let holder = document.getElementById('holder');
let img_container = document.getElementById('img_container');
var img_holder = document.getElementById('img_holder');
function onload() {
    holder.style.display = 'block';
    img_container.style.display = 'none'
    img_holder.style.display = 'none'
    
}
//calling the function 'onload'
function run() {
    setTimeout(() => {
        onload()
    }, 5000);
    
}
function openMenu() {
    document.getElementById('Menu').style.display = 'block';
  
  }
  
  function closemenu() {
    document.getElementById('Menu').style.display = 'none';
  
  }
  function favorite(x){
    x.classList.toggle('fa')
   }
       
   
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}