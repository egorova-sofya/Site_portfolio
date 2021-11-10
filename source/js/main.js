import slider from "./modules/slider";
import form from "./modules/form";
import nav from "./modules/nav-mobile";
window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let state = {};

  slider(".slider_item", ".slider_button--left", ".slider_button--right");

  form(state);

  nav();

  window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 500);
  };
});
