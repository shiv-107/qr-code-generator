const btn=document.querySelector(".button");
const imgEle=document.getElementById("qr-img");
const boxEle=document.getElementById("img-box");

const inputEle=document.getElementById("qr-text");

btn.addEventListener("click",()=>{
    const text=inputEle.value;
 imgEle.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text;

boxEle.classList.add("show-img");

})