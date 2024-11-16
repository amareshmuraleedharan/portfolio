import "./css/styles.css";
import overviewContent from "./js/overviewContent.json";
import previewContent from "./js/previewContent.json";
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
// over view modal  popup code
// function modalContents() {
//   console.log("Btn clicked");
//   const portfolioOverview = document.getElementById(
//     "portfolio-content-overview",
//   );
//   const portfolioOverviewTemplate = document.getElementById(
//     "content-overview-template",
//   );
//   const overviewImageTemplate = document.getElementById(
//     "overview-image-carousel",
//   );
//   let portpolioContent,
//     images,
//     contentHeading,
//     contentDescription,
//     carouselImages;

//   portpolioContent = portfolioOverviewTemplate.content.cloneNode(true);
//   // carouselImages = overviewImageTemplate.content.cloneNode(true);

//   images = portpolioContent.querySelector("#content-overview-images");
//   contentHeading = portpolioContent.querySelector("#content-overview-title");
//   contentDescription = portpolioContent.querySelector(
//     "#content-overview-discription",
//   );
//   images.innerHTML = "";
//   overviewContent.forEach((data) => {
//     contentHeading.innerHTML = data.title;
//     contentDescription.innerHTML = data.discription;
//     data?.imageContents.forEach((imageSrc, index) => {
//       let carouselImageContainer =
//         overviewImageTemplate.content.cloneNode(true);
//       let carouselImage = carouselImageContainer.querySelector("img");
//       let carouselContainer =
//         carouselImageContainer.querySelector(".carousel-item");
//       carouselImage.setAttribute("src", imageSrc);
//       carouselImage.setAttribute(
//         "alt",
//         imageSrc.split("/").pop().split(".").slice(0, -1).join("."),
//       );
//       if (0 === index) {
//         carouselContainer.classList.add("active");
//       }

//       images.appendChild(carouselImageContainer);
//     });
//   });
//   console.log("iamges", images);
//   portfolioOverview.appendChild(portpolioContent);
// }

//dynamic content  code
function previewContentShow() {
  const portfolioContainer = document.getElementById("portfolio-container");
  const protfolioContentTemplate = document.getElementById(
    "portfolio-item-template",
  );
  // let content2, content3, content;
  // content2 = protfolioContentTemplate.content.cloneNode(true);
  // content3 = protfolioContentTemplate.content.cloneNode(true);
  previewContent.forEach((preview) => {
    console.log("preview", previewContent, preview);
    let content = protfolioContentTemplate.content.cloneNode(true);
    let previewContentShow = content.querySelector("#content-preview");
    // const overviewClick = document.getElementById("overview-click");
    // overviewClick.addEventListener("click", modalContents);
    if (preview.content.media.video) {
      previewContentShow.appendChild(videoContentPrview(preview.content.media));
    }
    if ("" === preview.content.media.video && preview.content.media.image) {
      previewContentShow.appendChild(
        imageContentPreview(preview.content.media.image),
      );
    }

    portfolioContainer.appendChild(content);
  });

  // portfolioContainer.appendChild(content2);
  // portfolioContainer.appendChild(content3);
  // type="video/mp4">
  //   <source src="video.webm" type="video/webm">
  //   <source src="video.ogg" type="video/ogg">
  //
}
function videoContentPrview(src) {
  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.classList.add("img-fluid");
  const type = src.video.substring(src.video.lastIndexOf(".") + 1);
  let source = document.createElement("source");
  switch (type) {
    case "mp4":
      source.type = "video/mp4";
      source.src = src.video;
      break;
    case "ogg":
      source.type = "video/ogg";
      source.src = src.video;
      break;
    case "webm":
      source.type = "video/webm";
      source.src = src.video;
      break;
    default:
      source.type = "";
      source.src = "";
      break;
  }
  video.appendChild(source);
  video.onerror = () => {
    console.log("onerror", src.image);
    video.style.display = "none";
    imageContentPreview(src.image);
  };
  return video;
}
function imageContentPreview(src) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = src.split("/").pop().split(".").slice(0, -1).join(".");
  return img;
}

previewContentShow();
