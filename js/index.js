const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const controlLink = document.querySelectorAll('.controls a');

/// change title

 
let i = 0, j =1 ,intervalId;

const intervalFn = () => {
    intervalId = setInterval(() => {
        carousel.style.rotate =`-${++i * 90}deg`;
        
         document.querySelector('.slide.active').classList.remove(".active");
         const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
         activeSlide.classList.add(".active");
         
         document.querySelector('a.active').classList.remove(".active");
         const controlLink = document.querySelector(`.controls a:nth-child(${j})`);
         controlLink.classList.add('active');
         j === 4 && (j = 0);
    }, 2000);
}
intervalFn();

controlLink.forEach(controls => {
    controls.addEventListener("click", ()=>{
        clearInterval(intervalId)
        carousel.style.rotate = `-${(i - j + Number(controls.dataset.index))*90}deg`;
        
        document.querySelector('.active.slide').classList.remove('active');
        const activeSlide = document.querySelector(`.slide:nth-child(${controls.dataset.index})`)
        
        activeSlide.classList.add('active');
        document.querySelector('a.active').classList.remove('active');
        controls.classList.add('active');
        
       
    })
});

carousel.addEventListener('mouseenter', ()=>{
   clearInterval(intervalId);
   console.log("paused");
});

carousel.addEventListener( 'mouseleave', ()=>{
  intervalFn();
   console.log("play");
});

// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
 










