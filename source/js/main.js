import slider from "./modules/slider";
import form from "./modules/form";
window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let state = {};

  slider(".slider_item", ".slider_button--left", ".slider_button--right");

  // form(state);
});
