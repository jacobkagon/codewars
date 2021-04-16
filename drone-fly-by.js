function flyBy(lamps, drone){
    //find out how the length of the drone 
    //replace the first length of the lamp array with 'o' until the length of the drone
    //array is met
    
    //first I guess find the length of the drone string and set that to a variable
    let droneLength = drone.length;
    if(drone.length > lamps.length) {
      droneLength = lamps.length;
    } 
    
    //now we want to loop through the lamps string and replace each letter with a zero until drone
    //length is met
    
    let lampsArr = lamps.split("");
    for(let i = 0; i < droneLength; i++) {
      lampsArr[i] = 'o';
    }
  
    //turn array back into a string
    return lampsArr.join("")
}