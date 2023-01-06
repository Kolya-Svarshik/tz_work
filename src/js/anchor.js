const hero = document.querySelectorAll('a[href*="#hero"]');
const aboutUs = document.querySelectorAll('a[href*="#about_us"]');
const aboutProduct = document.querySelectorAll('a[href*="#about_product"]');
const advantage = document.querySelectorAll('a[href*="#advantage"]');

const getEvent = (data) => {
  for (let anchor of data) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

getEvent(hero);
getEvent(aboutUs);
getEvent(aboutProduct);
getEvent(advantage);
