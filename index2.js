function totalDemeritPoint(speeds) {
    let speedLimit = 70;
    let demeritPoints =0;

    if (speeds <= speedLimit ){
     return "Ok";
    }else{
        demeritPoints = Math.floor(speeds - speedLimit)/5
     }
      if (demeritPoints > 12){
     return "Licence Suspended";
}
}

console.log(totalDemeritPoint(70));


