var hero=document.querySelectorAll('a[href*="#hero"]'),aboutUs=document.querySelectorAll('a[href*="#about_us"]'),aboutProduct=document.querySelectorAll('a[href*="#about_product"]'),advantage=document.querySelectorAll('a[href*="#advantage"]'),getEvent=function(t){var e=!0,r=!1,o=void 0;try{for(var a,n=function(){var t=a.value;t.addEventListener("click",(function(e){e.preventDefault();var r=t.getAttribute("href").substr(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})}))},u=t[Symbol.iterator]();!(e=(a=u.next()).done);e=!0)n()}catch(t){r=!0,o=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw o}}};getEvent(hero),getEvent(aboutUs),getEvent(aboutProduct),getEvent(advantage);
//# sourceMappingURL=index.27e0a818.js.map