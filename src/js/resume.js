import "../css/styles.css";
import "../css/resume-style.css";
import profileResume from "../assets/img/profile_pic.jpg";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";

const profile = document.getElementById("profile-resume");
profile.alt = "profile";
profile.src = profileResume;
window.addEventListener("load", (event) => {
  console.log("pdf genrate");
  const options = {
    margin: 0,
    filename: "Amaresh-Muraleedharan-resume.pdf", //name the output file
    image: {
      type: "jpeg", //image type
      quality: 100,
    },
    html2canvas: {
      scale: 1.75,
    },
    jsPDF: {
      unit: "px",
      format: "a4",
      orientation: "portrait", // pdf orientation
    },
  };

  // $('.btn-download').click(function(e){     // class for download button
  //   e.preventDefault();
  const element = document.getElementById("resume"); //id for content area
  // html2pdf().from(element).set(options).save();
  // });
});
