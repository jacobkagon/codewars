function toTime(seconds) {
    //code here
      
      let hours;
      let minutes;
      let time;
      
     if(seconds % 3600 === 0) {
       hours = seconds / 3600;
       minutes = 0;
     } else if(seconds > 3600) {
       time = seconds / 3600
       hours = parseInt(time);
       let newMins = time - Math.floor(time)
       minutes = parseInt(newMins * 60);
     } else {
       minutes =  Math.round(seconds / 60)
       hours = 0;
     }
      
      
      console.log(time);
    return `${hours} hour(s) and ${minutes} minute(s)`
    }