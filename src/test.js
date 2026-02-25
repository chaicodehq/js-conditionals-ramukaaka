// function getticketPrice(age, isWeekend) {
//   let ticketPrice;
//   if (typeof age != 'number' || age <0){
//     return -1
//   }
  
//   else if (age<=12){
//     ticketPrice=(8+isWeekend*3);
//   }
//   else if (age>=13 && age <=17){
//     ticketPrice=(12+isWeekend*3);
//   }
//   else if (age>=18 && age <=59){
//     ticketPrice=(15+isWeekend*3);
//   }
//   else {
//     ticketPrice=(10+isWeekend*3);
//   }
  
//   return ticketPrice;
// }


// console.log(getticketPrice(-5,false));



//2ND

// function getTrafficAction(color) {
//     console.log(color);
//  switch(color.toLowerCase()){
    
//   case "green": 
//     console.log('GO');
//     break;
//   case "yellow": 
//     console.log('SLOW DOWN');
//     break;
//   case "red": 
//     console.log('STOP');
//     break;
//   case "flashing red": 
//     console.log('STOP AND PROCEED WITH CAUTION');
//     break;
//   default: 
//   console.log(typeof color);
//     console.log('INVALID SIGNAL');
    
    
//  }
// }
// getTrafficAction("as") 

//3RD 


// function calculateGrade(score, hasExtraCredit) {
//   let ticketPrice;
//   if (score <0 || score>100){
//     return "INVALID";
//   }
//   else if(hasExtraCredit)
//   {
//     score+=5;
//     console.log(score);
//   }
//   let grade;
  
//    if (score=>0 && score<=59){
//     console.log("f");

//      grade =  "F";
//   }
//   else if (score=>60 && score<=69){
    
//     return "D";
//   }
//   else if (score=>70 && score<=79){
//     console.log(score);
//     return "C";
//   }
//   else if (score=>80 && score<=89){
//     console.log(score);
//     return "B";
//   }
//   else {
//     console.log(score);
//     return "A";
//   }
  
//   return grade;
 
// }

// calculateGrade(2, true)

//4rth 
// function getWeatherAdvice(temperature, isRaining) {
  
  
  
//    if (temperature>=35  ){
//     return "Too hot for hiking - stay indoors and hydrate";
//   }
//   else if (temperature>= 25 && isRaining==false ){
//     return "Great weather for hiking - don't forget sunscreen";
//   }
//   else if (temperature>= 25 && isRaining ){
//     return "Warm but rainy - consider indoor activities";
//   }
//   else if (temperature>= 15 && isRaining==false ){
//     return "Perfect hiking weather - enjoy the trails";
//   }
//   else if (temperature>= 15 && isRaining){
//     return "Cool and rainy - bring waterproof gear if hiking";
//   }
//   else if (temperature>= 5 && isRaining==false ){
//     return "Chilly - wear layers for your hike";
//   }
//   else if (temperature>= 5 && isRaining){
//     return "Cold and wet - best to stay indoors";
//   }
 
//   else {
   
//     console.log(isRaining);
//      return "Too cold - stay warm indoors";
//   }
// }
// getWeatherAdvice(15, false)
//7
// function calculateCoffeePrice(size, type, extras = {}) {
    
//  if(size !='small' || size !='medium' || size !='large' || type != "regular" || type != "latte"|| type != "cappuccino"|| type != "mocha"){
 
  
//    return -1;

//  }
//  console.log("1")
//  let price=0.00;
//  switch(size){
//   case "small":
//     price+=3.00;
//     break;
//   case "medium":
//     price+=4.00;
//     break;
//   case "large":
//     price+=5.00;
//     break;
//  }
//  switch(type){
//   case "regular":
//     price+=0.00;
//     break;
//   case "latte":
//     price+=1.00;
//     break;
//   case "cappuccino":
//     price+=1.50;
//     break;
//   case "mocha":
//     price+=2.00;
//     break;
//  }
//  if (extra.whippedCream){
//   price+=0.50
//  } 
//    if (count+= extra.extraShot){
//     price+=0.75
//    }
// console.log(price);
//  return price;
//  }
 
// calculateCoffeePrice("small", 'mocha',  {whippedCream: true, extraShot: true})

//11

// function calculateParkingFee(hours, vehicleType) {
//   if(hours<=0 || vehicleType!="car" && vehicleType!="motorcycle"&& vehicleType!="bus")
//   {
//     return -1;
//   }
//   let result=0;
//   hours=Math.ceil(hours);
//   if(vehicleType=='car'){
//      result = 5+(3*(hours--))
//      result=Math.min(result ,30 );
//      console.log(result,hours)
//   }
//   if(vehicleType=='motorcycle'){
//      result = 3+(2*(hours--));
//      result=Math.min(result ,18 );
//      console.log(result,hours)
//   }
//   if(vehicleType=='bus'){
//      result =10+(7*(--hours));
//      result=Math.min(result ,60 );
//      console.log(result,hours)
//   }
//   return result;
// }

//  calculateParkingFee(2, "bus")

//12
function getSeasonActivity(month, temperature) {
  if(month <1 || month>12) {
    console.log("A");
    return null}
  let plan ={
    season:'',
    activity:''
  };
  if(month == (12||1||2) && temperature>0){
    plan.season='Winter';
    plan.activity='skiing';
    console.log(plan);
    
  }
  else if(month == (12||1||2) && temperature<=0){
    plan.season='Winter';
    plan.activity='ice skating';
    console.log(plan);
  }
  if(month == (3||4||5) && temperature>20){
    plan.season='Spring';
    plan.activity='hiking';
        console.log(plan);

  }
  else if(month == (3||4||5) && temperature<=20){
    plan.season='Spring';
    plan.activity='museum visit';
        console.log(plan);

  }
  if(month == (6||7||8) && temperature>35){
    plan.season='Summer';
    plan.activity='swimming';
    console.log(plan);
  }
  else if(month == (6||7||8) && temperature<=35){
    plan.season='Summer';
    plan.activity='cycling';
    console.log(plan);
    console.log(plan);
  }
  if(month == (9||10||11) && temperature>15){
    plan.season='Autumn';
    plan.activity='nature walk';
  }
  else if(month == (9||10||11) && temperature<=15){
    plan.season='Autumn';
    plan.activity='reading at a cafe';
        console.log(plan);

  }
  return plan;
}

getSeasonActivity(8, 35)