function capitalizeFirstCharacter(str){
        const newStr = str.charAt(0).toUpperCase() + str.slice(1); 
        return newStr;
}

module.exports = capitalizeFirstCharacter; 