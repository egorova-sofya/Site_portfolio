const slider=()=>{const e=document.querySelector(".slider_button--left"),t=document.querySelector(".slider_button--right");e.addEventListener("click",(function(){n(l-=1)})),t.addEventListener("click",(function(){n(l+=1)}));let l=1;function n(e){let t=document.getElementsByClassName("slider_item");e>t.length&&(l=1),e<1&&(l=t.length);for(let e of t)e.style.display="none";t[l-1].style.display="block"}n(l)};slider();
//# sourceMappingURL=script.js.map