//jshint eversion:6

// console.log(module);

module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate(){

    const today = new Date();
    const currentDay = today.getDay();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

function getDay(){

    const today = new Date();
    
    
    const options = {
        weekday: "long",
       
    };

   return today.toLocaleDateString("en-US", options);
}

console.log(module.exports);