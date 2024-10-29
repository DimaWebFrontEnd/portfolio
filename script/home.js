/* import "./main.scss"; */
/* import Home from "./home"

const H = new Home();
H.createElemAboutMe()
 */

/* || Burger Button */

function burgerButton() {
   const burgerBtn = document.querySelector(".header__burger");
   
   function pressBurgerBtn() {
      document.querySelector(".header__burger--line-top").classList.toggle("pressed");
      document.querySelector(".header__burger--line-centr").classList.toggle("pressed");
      document.querySelector(".header__burger--line-bottom").classList.toggle("pressed");
   }
   
   burgerBtn.addEventListener("click", pressBurgerBtn);
}

burgerButton();



/* || Contact me */ 

function contactMe() {
   const contactMeBtn = document.querySelector(".home__title--btn");
   const modale = document.querySelector(".home__description--contactme");
   const closeBtn = document.querySelector(".home__description--icon");
   const menu = document.querySelector(".home__description--menu");
   
   const openMenu = () => {
      modale.classList.add("active");
      menu.classList.add("active");
   }
   const closeMenu = () => {
      modale.classList.remove("active");
      menu.classList.remove("active");
   }

   window.addEventListener("click", e => {
      if(e.target === modale) {
         modale.classList.remove("active");
         menu.classList.remove("active");
      } 
   })
   
   closeBtn.addEventListener("click", closeMenu);
   contactMeBtn.addEventListener("click", openMenu);
}

contactMe();



/* || NAVBAR */

/* function naVbarAnim() {
   const liElements = document.querySelectorAll("nav li");
      
   function removeActiveLi() {
      liElements.forEach(elem => elem.classList.remove("active"));
   }

   function isActive(e) {
      removeActiveLi()
      e.target.classList.add("active")
   }

   liElements.forEach(element => element.addEventListener("click", isActive))
}

naVbarAnim() */

/* || Switch Between Blocks */

function nextPrevBlocks() {
   const blocks = document.querySelectorAll(".block");
   const nextBtn = document.querySelector(".next");
   const prevBtn = document.querySelector(".previous");
   const liElements = document.querySelectorAll("nav li");
   let i = 0;

   function prevBtnVisability() {
      if (i < 1) {
         prevBtn.setAttribute("style", "display: none;")
      } else {
         prevBtn.setAttribute("style", "display: block;")
      }

   }
   prevBtnVisability()

   function nextBtnVisability() {
      if (i > 2) {
         nextBtn.setAttribute("style", "opacity: .4")
      } else {
         nextBtn.setAttribute("style", "opacity: 1;")
      }
   }
   nextBtnVisability()

   function removeActiveLi() {
      liElements.forEach(elem => elem.classList.remove("active"));
   }

 

   liElements.forEach((element, index) => {
      element.addEventListener("click", (e) => {
         i = index;
         removeActiveLi()
         e.target.classList.add("active")
         blocks.forEach(block => {block.classList.remove("active")});
         blocks[index].classList.add("active");
         prevBtnVisability();
         nextBtnVisability()
      })
   })

   

   function nextBlock() {
      i++
      if (i > 3) {
         i = 3;
      }
      blocks.forEach(block => {block.classList.remove("active")});
      liElements.forEach(elem => elem.classList.remove("active"));
      blocks[i].classList.add("active");
      liElements[i].classList.add("active");
      prevBtnVisability();
      nextBtnVisability();
   }

   
   function prevBlock() {
      i--;
      blocks.forEach(block => {block.classList.remove("active")});
      liElements.forEach(elem => elem.classList.remove("active"));
      blocks[i].classList.add("active");
      liElements[i].classList.add("active");
      prevBtnVisability();
      nextBtnVisability();
   }

   nextBtn.addEventListener("click", nextBlock)
   prevBtn.addEventListener("click", prevBlock)

  

}

nextPrevBlocks()