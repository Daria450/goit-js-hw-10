import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const l={form:document.querySelector(".form"),fulfilledInp:document.querySelector(".fulfilled"),rejectedInp:document.querySelector(".rejected"),submitBtn:document.querySelector(".button"),delayPr:document.querySelector(".form-number")},e={state:null,delay:null};l.form.addEventListener("submit",t=>{t.preventDefault(),t.currentTarget.querySelector(".fulfilled").checked&&(e.state="fulfilled"),t.currentTarget.querySelector(".rejected").checked&&(e.state="rejected"),e.delay=t.currentTarget.delay.value,s(l.delayPr.value)});function s(t){setTimeout(()=>{new Promise((r,i)=>{e.state==="fulfilled"&&r(`Fulfilled promise in ${t}ms`),e.state==="rejected"&&i(`Rejected promise in ${t}ms`)}).then(r=>{o.show({title:"✅ OK",message:r,backgroundColor:"#59a10d",messageColor:"#fff",titleColor:"#fff",position:"topRight",messageSize:"16px"})}).catch(r=>{o.show({title:"X Error",message:r,backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",position:"topRight",messageSize:"16px"})}),e.state=null},e.delay),e.delay=null}
//# sourceMappingURL=2-snackbar.js.map
