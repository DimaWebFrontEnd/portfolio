import "./main.scss";
/* import Home from "./home"

const H = new Home();
H.createElemAboutMe()
 */


 /* || Burger Button */

/* function burgerButton() {
   const burgerBtn = document.querySelector(".header__burger");
   const nav = document.querySelector("nav");
   const main = document.querySelector(".home");

   function pressBurgerBtn() {
      nav.classList.toggle("active")
      main.classList.toggle("active")
      document.querySelector(".header__burger--line-top").classList.toggle("pressed");
      document.querySelector(".header__burger--line-centr").classList.toggle("pressed");
      document.querySelector(".header__burger--line-bottom").classList.toggle("pressed");
      
   }
   
   burgerBtn.addEventListener("click", pressBurgerBtn);
}

burgerButton(); */


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

/* || Projects Block With IntersectionObserver */

function projects() {
   const cards = document.querySelectorAll(".projects__site");

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (!entry.isIntersecting) return
         entry.target.classList.toggle("show", entry.isIntersecting);
      })
   })

   cards.forEach(card => {
      observer.observe(card)
   })
   //console.log(cards)
}
projects()

/* || Technologies I Use Block With IntersectionObserver */

function tech() {
   const cards = document.querySelectorAll(".tech__in");

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (!entry.isIntersecting) return
         entry.target.classList.toggle("show", entry.isIntersecting);
      })
   })

   cards.forEach(card => {
      observer.observe(card)

   })
}
tech()

/* || Contacts Block With IntersectionObserver */

function contactsObserve() {
   const cards = document.querySelectorAll("[data-contact]");

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (!entry.isIntersecting) return
         entry.target.classList.toggle("show", entry.isIntersecting);
      })
   })

   cards.forEach(card => {
      observer.observe(card)

   })
}
contactsObserve()



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
   /* const img = document.querySelector(".pictures img") */
   const imgs = document.querySelectorAll(".pictures__bg");
   const nav = document.querySelector("nav");
   const main = document.querySelector(".home");

   const burgerBtn = document.querySelector(".header__burger");

   /* || Burger Button */
   function pressBurgerBtn() {
      nav.classList.toggle("active");
      main.classList.toggle("active");
      document.querySelector(".header__burger--line-top").classList.toggle("pressed");
      document.querySelector(".header__burger--line-centr").classList.toggle("pressed");
      document.querySelector(".header__burger--line-bottom").classList.toggle("pressed");
   }
   
   burgerBtn.addEventListener("click", pressBurgerBtn);

   let i = 0;

  



   // Background Images On Scroll
   window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      
      if (offset < 600) {
         imgs.forEach(img => {img.classList.remove("isActive")});
         imgs[0].classList.add("isActive");
         liElements.forEach(elem => elem.classList.remove("active"));
         liElements[0].classList.add("active");

      }
      if (offset > 600) {
         imgs.forEach(img => {img.classList.remove("isActive")});
         imgs[1].classList.add("isActive");
         liElements.forEach(elem => elem.classList.remove("active"));
         liElements[1].classList.add("active");
      }
      if (offset > 1400) {
         imgs.forEach(img => {img.classList.remove("isActive")});
         imgs[2].classList.add("isActive");
         liElements.forEach(elem => elem.classList.remove("active"));
         liElements[2].classList.add("active");
      }
      if (offset > 2200) {
         imgs.forEach(img => {img.classList.remove("isActive")});
         imgs[3].classList.add("isActive");
         liElements.forEach(elem => elem.classList.remove("active"));
         liElements[3].classList.add("active");
      }
    
   })

   // Previuos Button
   function prevBtnVisability() {
      if (i < 1) {
         prevBtn.setAttribute("style", "display: none;")
      } else {
         prevBtn.setAttribute("style", "display: block;")
      }

   }
   prevBtnVisability();

   // Next Button
   function nextBtnVisability() {
      if (i > 2) {
         nextBtn.setAttribute("style", "opacity: 0.5")
      } else {
         nextBtn.setAttribute("style", "opacity: 1;")
      }
   }
   nextBtnVisability();

   // Remove Active Li
   function removeActiveLi() {
      liElements.forEach(elem => elem.classList.remove("active"));
   }

 

   liElements.forEach((element, index) => {
      element.addEventListener("click", (e) => {
         i = index;
      
         //pressBurgerBtn() 
         
         removeActiveLi();
         e.target.classList.add("active");
         blocks.forEach(block => {block.classList.remove("active")});
         blocks[index].classList.add("active");
         imgs.forEach(img => {img.classList.remove("isActive")});
         imgs[index].classList.add("isActive");

         prevBtnVisability();
         nextBtnVisability()
      })
   })

   
   // Next Block
   function nextBlock() {
      i++
      if (i > 3) {
         i = 3;
      }
      //img.src = i === 0 ? "img/home.webp" : i === 1 ? "img/projects.webp" : i === 2 ? "img/tech.webp" : i === 3 ? "img/contact.webp" : "img/home.webp";
      blocks.forEach(block => {block.classList.remove("active")});
      blocks[i].classList.add("active");
      liElements.forEach(elem => elem.classList.remove("active"));
      liElements[i].classList.add("active");
      imgs.forEach(img => {img.classList.remove("isActive")});
      imgs[i].classList.add("isActive");
      prevBtnVisability();
      nextBtnVisability();
   }

   // Previous Block
   function prevBlock() {
      i--;
      //img.src = i === 0 ? "img/home.webp" : i === 1 ? "img/projects.webp" : i === 2 ? "img/tech.webp" : i === 3 ? "img/contact.webp" : "img/home.webp";
      blocks.forEach(block => {block.classList.remove("active")});
      liElements.forEach(elem => elem.classList.remove("active"));
      blocks[i].classList.add("active");
      liElements[i].classList.add("active");
      imgs.forEach(img => {img.classList.remove("isActive")});
      imgs[i].classList.add("isActive");
      prevBtnVisability();
      nextBtnVisability();
   }

   nextBtn.addEventListener("click", nextBlock)
   prevBtn.addEventListener("click", prevBlock)

  

}

nextPrevBlocks()