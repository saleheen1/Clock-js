const second = document.querySelector('.second');
const minutes = document.querySelector('.min');
const hour = document.querySelector('.hour');
const hand = document.querySelector('.hand');

setInterval(() => {
    const date = new Date();
    // console.log(date);
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours();

    const minDeg = ((min/60)*360 )+90;
    const secDeg = ((sec/60)*360) +90;
    const hrDeg = ((hr/12)*360) +90;
    
    second.style.transform = `rotate(${secDeg}deg)`;
    minutes.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hrDeg}deg)`;
    
}, 1000);