let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
let lapBtn = document.getElementById('lap'); 
document.getElementById('hr').innerHTML = "00"; 
document.getElementById('min').innerHTML = "00"; 
document.getElementById('sec').innerHTML = "00";  
let hour = 0; 
let minute = 0; 
let second =0; 
let count = 0; 
let laps = null;
let lapNow = null;
let lap=false;
let l=0;
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 100; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('lapRecord').innerHTML="";
}); 
lapBtn.addEventListener("click",function(){
    lap=true; 
    l++;
    stopWatch(); 
});
function stopWatch() { 
    let hrString = hour; 
    let minString = minute; 
    let secString = second; 
    let countString = count; 
    if (hour < 10) { 
        hrString = "0" + hrString; 
    } 

    if (minute < 10) { 
        minString = "0" + minString; 
    } 

    if (second < 10) { 
        secString = "0" + secString; 
    } 

    if (count < 10) { 
        countString = "0" + countString; 
    } 
    if(lap){
        lapNow="Lap "+l+": "+hrString+":"+minString+":"+secString;
        laps = document.getElementById('lapRecord').innerHTML + lapNow;
        document.getElementById('lapRecord').innerHTML = laps+"<br>";
        lap=false;
    }
    if (timer) { 
        count++; 
  
        if (count == 60) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
  
        
        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        setTimeout(stopWatch, 10); 
    } 
}
