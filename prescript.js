(function(){{let o=[`Character: Elira Windwhisper
Action: Arrived in the city of Frostholme
Date: 2023-09-08 19:54:11`,`Character: Arion Stormseeker
Action: Defeated a dragon in Sunfire Plains
Date: 2023-09-08 21:10:30`,`Character: Selene Nightshade
Action: Discovered a hidden treasure in Darkwood Forest
Date: 2023-09-08 21:25:47`,`Character: Gavric Ironfist
Action: Arrived in the city of Skyreach
Date: 2023-09-08 21:40:12`,`Character: Freya Lightbringer
Action: Travelled through the region of Stormcliff Heights
Date: 2023-09-08 22:05:19`,`Character: Eamon Shadowcloak
Action: Escaped from prison in Golden Fields
Date: 2023-09-08 22:15:43`,`Character: Lyra Moonshadow
Action: Travelled through the region of Moonshade Vale
Date: 2023-09-08 20:50:56`,`Character: Thalor Swiftblade
Action: Travelled through the region of Moonshade Vale
Date: 2023-09-08 20:47:43`,`Character: Seraphina Flameheart
Action: Arrived in the city of Sundew
Date: 2023-09-08 22:30:00`,`Character: Orion Starweaver
Action: Travelled through the region of Crystal Lake
Date: 2023-09-08 22:45:21`],a=0,n=0,t=100,d=10,i=1e3,e="",r=null,l=()=>{let c=document.getElementById("htmlText-1");c&&(a<o[n].length?(e+=o[n].charAt(a),c.innerHTML=e.replace(/\n/g,"<br>"),a++,r=setTimeout(l,t)):r=setTimeout(h,i))},h=()=>{let c=document.getElementById("htmlText-1");c&&(a>0?(e=e.substring(0,a-1),c.innerHTML=e.replace(/\n/g,"<br>"),a--,r=setTimeout(h,d)):(n=(n+1)%o.length,setTimeout(l,i)))},m=()=>{r&&clearTimeout(r),a=0,e="",setTimeout(()=>{document.getElementById("htmlText-1")&&l()},500)};document.addEventListener("nav",m),typeof window.addCleanup=="function"&&window.addCleanup(()=>{r&&clearTimeout(r)}),document.readyState==="complete"||document.readyState==="interactive"?m():window.addEventListener("DOMContentLoaded",m)}})(),(function(){var o=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",a=localStorage.getItem("theme")??o;document.documentElement.setAttribute("saved-theme",a);var n=t=>{let d=new CustomEvent("themechange",{detail:{theme:t}});document.dispatchEvent(d)};document.addEventListener("nav",()=>{let t=()=>{let e=document.documentElement.getAttribute("saved-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("saved-theme",e),localStorage.setItem("theme",e),n(e)},d=e=>{let r=e.matches?"dark":"light";document.documentElement.setAttribute("saved-theme",r),localStorage.setItem("theme",r),n(r)};for(let e of document.getElementsByClassName("darkmode"))e.addEventListener("click",t),window.addCleanup(()=>e.removeEventListener("click",t));let i=window.matchMedia("(prefers-color-scheme: dark)");i.addEventListener("change",d),window.addCleanup(()=>i.removeEventListener("change",d))})})(),(function(){var o=!1,a=n=>{let t=new CustomEvent("readermodechange",{detail:{mode:n}});document.dispatchEvent(t)};document.addEventListener("nav",()=>{let n=()=>{o=!o;let t=o?"on":"off";document.documentElement.setAttribute("reader-mode",t),a(t)};for(let t of document.getElementsByClassName("readermode"))t.addEventListener("click",n),window.addCleanup(()=>t.removeEventListener("click",n));document.documentElement.setAttribute("reader-mode",o?"on":"off")})})();
