const os = require('os');

// Get system uptime
const uptime = os.uptime();
console.log(uptime);

// Get total memory
const totalMemory = os.totalmem();
console.log(totalMemory);

// os.uptime() palauttaa käytettävyyden sekunteina ja os.totalmem() -menetelmä palauttaa muistin kokonaismäärän tavuina.