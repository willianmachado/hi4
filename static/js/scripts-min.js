window.addEventListener("DOMContentLoaded",(e=>{const t=function(){const e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))};t(),document.addEventListener("scroll",t);document.body.querySelector("#mainNav")&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74});const n=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map((function(e){e.addEventListener("click",(()=>{"none"!==window.getComputedStyle(n).display&&n.click()}))})),$((function(){function e(){setTimeout((function(){$("#effect").removeAttr("style").hide().fadeIn()}),1e3)}$("#button").on("click",(function(){return function(){const t=$("#effectTypes").val();let n={};"scale"===t?n={percent:50}:"transfer"===t?n={to:"#button",className:"ui-effects-transfer"}:"size"===t&&(n={to:{width:200,height:60}}),$("#effect").effect(t,n,500,e)}(),!1}))}))}));