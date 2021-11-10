const nav = () => {
  const burger = document.querySelector(".nav_img--mobile"),
    nav = document.querySelector(".nav"),
    links = document.querySelectorAll(".nav_item");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (e.target) {
        nav.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  });

  burger.addEventListener("click", () => {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
      document.body.style.overflow = "";
    } else {
      nav.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  });
};

export default nav;
