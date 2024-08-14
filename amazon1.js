
    let nav = document.querySelector('.panel_all');
    let slider = document.querySelector('.slider');
    let slidePera = document.querySelector('#slide_pera');
    let panel = document.querySelector('.panel');
    let body = document.querySelector('body');

    let containerA = document.querySelector(".containerA");
    let navSign = document.querySelector(".nav_signin");
    let navSignData = document.querySelector(".nav_sign_data");

    let sliderContainer = document.querySelector(".slider_container");
    let sliderLogo = document.querySelector('#slider_logo');
    let icon = document.querySelector('#cont_img_icon');
    
    let hoverContainer = document.querySelector('.hover_container');
    let hoverBtn = document.querySelector('.hover_btn');
    let popContainer = document.querySelector('.sign_pop_container');

    let popBtn = document.querySelector('.sign_pop_btn');
    let notch = document.querySelector('.notch');
    let logo = document.querySelector('.logo');

    let navBar = document.querySelector('.nav_bar');
    let searchSelector = document.querySelector('.search_select');
    let searchInput = document.querySelector('.search_input');
    let box1 = document.getElementById('shop_box');

    // window loaded slider

    popBtn.addEventListener('click', function(e){
      containerA.style.cssText = 'widht:100%; height:fit-content; color:black; background:white; left:0; z-index:1; display:flex; top:100px';
    })
    
    // before and after ,load the page,the show and hide the pop msg
    window.addEventListener('load', function(){
    // window.onload = function() {
      popContainer.style.display = 'flex';
      notch.style.display = 'flex';

      setTimeout(function() {
        popContainer.style.display = 'none';
        notch.style.display = 'none';
      }, 2000); // 2000 milliseconds = 2 seconds
    });

// if you want to use dark-light mode then can use easly
    function toggleMode() {
      const darkenMode = document.querySelector('.darken');
      const logo2 = document.querySelector('.logo2');
      const logo = document.querySelector('.logo');
      const currentMode = darkenMode.style.backgroundColor;

      if (currentMode === "black" || currentMode === "") {
        darkenMode.style.backgroundColor = "white";
        darkenMode.style.color = "black";
        navBar.style.backgroundColor = 'black';
        navBar.style.color = 'white';
        logo2.style.display = 'none';
        logo.style.display = 'flex';
        searchSelector.style.backgroundColor = 'white';
        searchSelector.style.color = 'black';
        searchInput.style.backgroundColor = 'white';
        searchInput.style.color = 'black';
        panel.style.backgroundColor = 'black';
        panel.style.color = 'white';
      } else {
        darkenMode.style.backgroundColor = "black";
        darkenMode.style.color = "black";
        navBar.style.backgroundColor = 'white';
        navBar.style.color = 'black';
        logo2.style.display = 'flex';
        logo.style.display = 'none';
        searchSelector.style.backgroundColor = 'black';
        searchSelector.style.color = ' white';
        searchInput.style.backgroundColor = 'black';
        searchInput.style.color = 'white';
        panel.style.backgroundColor = 'white';
        panel.style.color = 'black';
      }
  }
  logo.addEventListener('click', toggleMode());

    // mouse hover slider
    navSign.addEventListener('mouseover', function(e){
     hoverContainer.style.display = 'flex';
     notch.style.cssText = 'display:flex; left:87%; top:8%;widht:25px;height:25px';
     containerA.style.display = 'none';
    })
    navSign.addEventListener('mouseout', function(e){
      hoverContainer.style.display = 'flex';
      notch.style.display = 'flex';
      setTimeout(function(e){
       hoverContainer.style.display = 'none';
       notch.style.display = 'none';
     }, 1000);
    });

    hoverBtn.addEventListener('click', function(e){
      hoverContainer.style.display = 'none';
      containerA.style.cssText = 'widht:100%; height:fit-content; color:black; background:white; left:0; z-index:1; display:flex; top:100px';
    })

    let footer_btn = document.querySelector('.footer1_btn');
    
    footer_btn.addEventListener('click', function(e){
      containerA.style.cssText = 'widht:100%; height:fit-content; color:black; background:white; left:0; z-index:1; display:flex; top:100px';
      
      //for scroll to bottom to top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })

//for scroll to the home page
    let footer2 = document.querySelector('.footer2').addEventListener('click', function(){
      containerA.style.display = 'none';

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })
  
// single click event listener to show slider
      nav.addEventListener('click', function(e) {     
      slider.style.cssText = 'display:flex; top:0; left:0; z-index:1; height:100%;  opacity:1; position:absolute; width:25%; z-index:2;position:fixed';
      sliderContainer.style.cssText = 'display:flex; opacity:0.7;  width:100vw; height:200%; top:0; left:-0.5%; bottom:100%; z-index:1; position:fixed';
      containerA.style.display = 'none';
    });
// Add click event listener to hide slider
      sliderLogo.addEventListener('click', function(e) {
      slider.style.display = 'none';
      sliderContainer.style.display = 'none';
      sliderContainer.style.opacity = '0';
      minimize.style.display = 'none';
    });

// single click event listener to show sign-in slider
      navSign.addEventListener('click', function(e) {     
      containerA.style.cssText = 'widht:100%; height:fit-content; color:black; background:white; left:0; z-index:1; display:flex; top:100px'; 
    });

// Add double click event listener to hide slider
       icon.addEventListener('click', function(e) {
       containerA.style.display = 'none';
    });

    let heroImg1 = document.querySelector('#hero_img1');
    let heroImg2 = document.querySelector('#hero_img2');
    let leftIcon = document.querySelector('.icon1');
    let rightIcon = document.querySelector('.icon2');
    let heroSection = document.querySelector('.hero_section');

    var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change slide every 4 seconds
  }

  let minimize = document.querySelector('.minimize');
    let head = document.querySelector('.heading');
    slider.addEventListener('click', function(e){
        minimize.style.cssText = 'display:flex; left:3%; width:20%; height:90%; position:absolute; z-index:1';

setTimeout(function(e){
    minimize.style.display = 'none';
},3000);
});

// for form submit validation
    form.addEventListener('submit',(event) => {
      event.preventDefault();
      validate();
    });
    
    // for search form fill validation
    function validateForm(){
    let emailVal = document.getElementById('email').value;
    let signButton = document.querySelector('.sign_button1').checked;
    let formControl = document.querySelector('.form-control');
    let form = document.querySelector('.form');
    const emailError = document.getElementById(
      "email-error");

  const atsymbol = emailVal.indexOf("@");
  var dot = emailVal.lastIndexOf('.');

  let isValid = true;

if (emailVal === "" || !emailVal.includes("@")) {
       emailError.textContent =
        "Include dot after @ symbol .";
       emailError.style.color = "red";
      }
   
if(dot === !emailVal.includes(".") || dot === emailVal - 1 || dot <= atsymbol + 3){
        emailError.textContent =
        "Use dot after @  symbol.";
        emailError.style.color = 'red';
      }

if(emailVal === ""){
      emailError.textContent = 'Email cannot be empty';
      emailError.style.color = 'red';
      }

if(!emailError.includes(" ")){
        emailError.textContent = 'Email cannot contain spaces';
        emailError.style.color = 'red';
        isValid = false;
      }
isValid = false;
};


  



 
    
