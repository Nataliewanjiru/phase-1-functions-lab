let location;

let distanceFromHqInBlocks = (location)=>{
    let scuber= 42;
  if(location > scuber){
    return (location-scuber);
  } else{
    return(scuber-location);
  }
}




let  distanceFromHqInFeet =(location) =>{
  let totalDistance = distanceFromHqInBlocks(location)
  return (totalDistance * 264);
}




let distanceTravelledInFeet = (start, finish) =>{
  if(start > finish){
    return (start-finish)*264;
  } else {
    return (finish -start)*264;
  }
}



let calculatesFarePrice =(start,finish)=>{
    let value = distanceTravelledInFeet(start,finish)
   if(value <= 400) {
    return 0;
   } else if(value >400 && value<=2000){
    return (value - 400) * 0.02;
   } else if (value > 2000 && value <=2500){
     return 25;
   } else{
      return `cannot travel that far`
   }
}

console.log(calculatesFarePrice(528,400))