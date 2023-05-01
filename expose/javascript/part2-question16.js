for (const property in statistics) {
    if(property.substring(0,1) == 'r' || statistics[property] % 2 != 0) {
        console.log(statistics[property]);
    }
}