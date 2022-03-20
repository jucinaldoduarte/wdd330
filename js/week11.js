function Countdown(){
    let countDownDate = new Date("Apr 7, 2022 23:59:00").getTime();
    
    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("counterDaySpan").textContent = days;
        document.getElementById("counterHourSpan").textContent = hours;
        document.getElementById("counterMinSpan").textContent = minutes;
        document.getElementById("counterSecSpan").textContent = seconds;

        document.getElementById("counterDayLabel").innerHTML = "days";
        if(days < 2){
            document.getElementById("counterDayLabel").innerHTML = "day";
        }

        document.getElementById("counterHourLabel").innerHTML = "hours";
        if(hours < 2){
            document.getElementById("counterHourLabel").innerHTML = "hour";
        }

        document.getElementById("counterMinLabel").innerHTML = "min";
        document.getElementById("counterSecLabel").innerHTML = "sec";
      
        // If the count down is finished, write some text               
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("soon").textContent = "It is time";          
          document.getElementById("counterDaySpan").textContent = "0";
          document.getElementById("counterHourSpan").textContent = "0";
          document.getElementById("counterMinSpan").textContent = "0";
          document.getElementById("counterSecSpan").textContent = "0";
        }
      }, 1000);
  }

  Countdown();

