import data from "./js/data.json";
/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (0 === window.scrollY) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if ("none" !== window.getComputedStyle(navbarToggler).display) {
        navbarToggler.click();
      }
    });
  });
});

/*  TODO: Dynamic upadation and  handle Dynamic
data alng with Onclick handle for popup*/

const portfolioContainer = document.getElementById("portfolio-container");
const protfolioContentTemplate = document.getElementById(
  "portfolio-item-template",
);
let content2, content3, content;
content = protfolioContentTemplate.content.cloneNode(true);
content2 = protfolioContentTemplate.content.cloneNode(true);
content3 = protfolioContentTemplate.content.cloneNode(true);

portfolioContainer.appendChild(content);
portfolioContainer.appendChild(content2);
portfolioContainer.appendChild(content3);

function modalContents() {
  console.log("Btn clicked");
  const portfolioOverview = document.getElementById(
    "portfolio-content-overview",
  );
  const portfolioOverviewTemplate = document.getElementById(
    "content-overview-template",
  );

  let portpolioContent, images, contentHeading, contentDescription;

  portpolioContent = portfolioOverviewTemplate.content.cloneNode(true);

  images = portpolioContent.querySelector("#content-overview-images");
  contentHeading = portpolioContent.querySelector("#content-overview-title");
  contentDescription = portpolioContent.querySelector(
    "#content-overview-discription",
  );
  contentHeading.innerHTML = data[0].title;
  contentDescription.innerHTML = data[0].discription;
  images.innerHTML = data[0].imageContents.reduce((html, image, i) => {
    return (
      html +
      `<div class="carousel-item ${0 === i ? "active" : ""}">
      <img class="img-fluid rounded mb-5" src="${image}" alt="${image.split("/").pop().split(".").slice(0, -1).join(".")}">
      </div>
      `
    );
  }, "");
  console.log("iamges", images);
  portfolioOverview.appendChild(portpolioContent);
}
const overviewClick = document.getElementById("overview-click");
overviewClick.addEventListener("click", modalContents);
