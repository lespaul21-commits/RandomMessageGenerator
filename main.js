const climbingRoutes = ['Angel\'s Landing', 'El Capitan', 'Long\'s Peak Cables', 'Mt. Whitney East Face'];

let randomMessageIndex = Math.floor(Math.random() * climbingRoutes.length);

let finalMessage = climbingRoutes[randomMessageIndex];

console.log(finalMessage);

