// function distanceFromHqInBlocks(startingPoint) {
//     if (startingPoint > 42) {
//     return startingPoint - 42;
//     } else (startingPoint <= 42)
//         return 42 - startingPoint;
// }

  function distanceFromHqInBlocks(startingPoint) {
      return Math.abs(startingPoint - 42);
  }

function distanceFromHqInFeet(startingPoint) {
    return (distanceFromHqInBlocks(startingPoint)) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

// function calculatesFarePrice(start, destination) {
//     let distance = distanceFromHqInFeet(start, destination);
//     let price = 0;
//     switch (true) {
//         case distance < 400:
//             price = 0;
//             break;
//         case 400 < distance < 2000:
//             price = (distance - 400) * 0.02;
//             break;
//         case 2000 < distance <= 2500:
//             price = 25;
//             break;
//         case distance > 2500:
//             return "cannot travel that far";
//     }
//     return price;
// }

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
//    let price = 0;
    switch (true) {
        case distance > 2500:
            return "cannot travel that far"
        case distance > 2000:
            return 25;
        case distance > 400:
            return (distance - 400) * 0.02;
        default :
            return 0;
    }
}