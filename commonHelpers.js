import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i}from"./assets/vendor-77e16229.js";const r=document.querySelector("button");r.addEventListener("click",p);const s=document.querySelector("#datetime-picker"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let a,u;const y={enableTime:!0,time_24hr:!0,enableSeconds:!0,dateFormat:"Y-m-d H:i:S",defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),r.disabled=!0):(a=t,r.disabled=!1)}};f(s,y);function p(){if(!a){i.error({title:"Error",message:"Please choose a valid date",position:"topRight"});return}r.disabled=!0,s.disabled=!0,S()}function S(){u=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(u),d(0),s.disabled=!1;return}d(t)},1e3)}function d(e){const t=b(e);o.days.textContent=n(t.days),o.hours.textContent=n(t.hours),o.minutes.textContent=n(t.minutes),o.seconds.textContent=n(t.seconds)}function b(e){const c=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:l,minutes:m,seconds:h}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
