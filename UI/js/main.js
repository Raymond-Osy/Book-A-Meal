window.onload = function(){
    var hamburger_close =  document.getElementById("hamburger_close");
    var hamburger_open =  document.getElementById("hamburger_open");
    
    var small_nav =  document.getElementById("small_nav");
    
    hamburger_open.onclick = function(){
        small_nav.style.display = 'block';
        hamburger_open.style.display = 'none';
        hamburger_close.style.display = 'block';
    }
    hamburger_close.onclick = function(){
        small_nav.style.display = 'none';
        hamburger_close.style.display = 'none';
        hamburger_open.style.display = 'block';
    }
};