// navbar
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
// const navTitle = document.querySelector(".nav-title");
// const navLink = document.querySelectorAll(".nav-link");

const date = document.querySelector("#date");
// add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//     navTitle.classList.add("black");
//     navLink.forEach(function (link) {
//       link.classList.add("black");
//     });
//   } else {
//     navbar.classList.remove("navbar-fixed");
//     navTitle.classList.remove("black");
//     navLink.forEach(function (link) {
//       link.classList.remove("black");
//     });
//   }
// });
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// loader

const loaderContainer = document.querySelector(".loader-container");
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

window.addEventListener("DOMContentLoaded", function () {
  loader.classList.add("hide");
  loader.classList.add("hide-loader");
  loaderContainer.classList.add("hide");
  content.classList.remove("hide");
});

// slider

const members = [
  {
    img: "./imgs/akshat.JPG",
    name: "Akshat Khandelwal",
    role: "Captain",
    text: `Hi! I'm Akshat Khandelwal, a junior at Dublin High School. My passion for robotics and engineering has led to me receiving the honor to be the captain of team 5327A. For the past two seasons, I have been on a Worlds qualifying team, and I am confident that 5327A can qualify to World's if not win it this year.`,
  },
  {
    img: "./imgs/user.jpeg",
    name: "Urmil ",
    role: "Driver",
    text: `Hello, my name is Urmil and I was the former captain of 5327A for tipping point. I have a strong passion for robotics and seeing that I am one of the upperclassmen who knows a lot about robotics, I hope to pass this knowledge down to the rest of the team. In my free time, I also like to hang out with friends, and go to the gym.`,
  },
  {
    img: "./imgs/anit.jpg",
    name: "Anit Annadi",
    role: "programmer",
    text: `Hello, my name is Anit Annadi and I am a junior. Last year, I was on team 5327S as a builder. This year, I am a programmar for team 5327A. I am excited to program our driver control, autonomous, and skills.`,
  },
  {
    img: "./imgs/elliot.jpg",
    name: "Elliot Leow ",
    role: "Programmer",
    text: `Hi, my name is Elliott Leow, and I am a senior at Dublin High School. I have been in Gael Force Robotics for the past two years, and I was on 5327U and 5327A previously. This year, I hope to aid the team in programming to qualify for the World Championships in May.`,
  },
  {
    img: "./imgs/user.jpeg",
    name: "Siddarth Ajay",
    role: "Programmer",
    text: `Hi my name is Siddharth Ajay and I'm a senior at DHS. I am a programmer on 5327A and have been doing robotics for 2 years already as a member of 5327S and 5327V. I'm excited for the Spin Up season and to make our way to the World Championship.`,
  },
  {
    img: "./imgs/rushil.jpg",
    name: "Rushil Yadavalli",
    role: "build lead / CAD",
    text: `My name is Rushil Yadavalli, and I am a junior. Last season, I was part of 5327V, and am excited to contribute to 5327A's success this year. I will be helping with build and CAD.`,
  },
  {
    img: "./imgs/dhriti.jpg",
    name: "Dhriti Kamat",
    role: "builder",
    text: `Hi my name is Dhriti and I’m a rising senior at Dublin High School. I’ve been in GFR for 3 years and joined 5327S in my sophomore year to learn more about robotics.  I joined 5327A because the team is very hardworking and I believe we can consistently improve our bot to win worlds.`,
  },
  {
    img: "./imgs/akhil.jpg",
    name: "Akhil Kona",
    role: "builder",
    text: `Hello, my name is Akhil Kona, and I am a Junior at Dublin High School this year. I have been in Gael Force robotics since my freshman year. I have been interested in robotics for a long time now and I am trying to gain as much knowledge and experience as I can.`,
  },
  {
    img: "./imgs/jayden.jpg",
    name: "Jaden Musset",
    role: "builder",
    text: `Hey, my name is Jayden Musset. I am a sophomore at Dublin High. As a member of 5327A, I strive to advance my knowledge of robotics and engineering while exposing myself to various ideas, builds, and design techniques to hopefully become a captain of this competition. I can’t wait to be part of this years team.`,
  },
  {
    img: "./imgs/kevin.jpg",
    name: "Kevin Geng",
    role: "builder",
    text: `My name is Kevin Geng, and I am an sophomore who was on the 5327A robotics team during the Tipping Point Season. Half the fun of robotics is implementing creative ideas to help 'solve' the unique game. The other half is getting to bond with your fellow peers. I am looking forward to an incredible year with my team.`,
  },
];

const container = document.querySelector(".member-container");
const nextBtn = document.querySelector(".member-next-btn");
const prevBtn = document.querySelector(".member-prev-btn");
// if length is 1 hide buttons
if (members.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let teamMembers = [...members];
if (members.length === 2) {
  teamMembers = [...members, ...members];
}
container.innerHTML = teamMembers
  .map((member, slideIndex) => {
    const { img, name, role, text } = member;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === teamMembers.length - 1) {
      position = "last";
    }
    if (members.length <= 1) {
      position = "active";
    }
    return `<article class="member ${position}">
  <img src=${img} class="member-img" alt="${name}"/>
  <h4 class="member-name">${name}</h4>
  <p class="member-role">${role}</p>
  <p class="member-text">
   ${text}
  </p>
 </article>`;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
