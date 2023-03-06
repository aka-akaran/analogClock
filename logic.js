
let hr = document.querySelector('#hr') ;
let min = document.querySelector('#min') ;
let sec = document.querySelector('#sec') ;




setInterval(()=>{
    let day = new Date() ;
    let hh = day.getHours()*30 ;
    let mm = day.getMinutes()*6 ;
    let ss = day.getSeconds()*6 ;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)` ;
    min.style.transform = `rotateZ(${mm}deg)` ;
    sec.style.transform = `rotateZ(${ss}deg)` ;
},) ;

