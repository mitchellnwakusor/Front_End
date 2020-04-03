var dataObject = {  
    data: []
}

dataObject.data.push({
    Principal: 2500,
    time: 1.8,
});
dataObject.data.push({
    Principal: 1000,
    time: 5,
});
dataObject.data.push({
    Principal: 3000,
    time: 1,
});
dataObject.data.push({
    Principal: 2000,
    time: 3,
});




function interstCalculator(arrayinput) {
    var rate = [];
    var interest = [];

    var interestDataObject = {
    interestData: []
    };


    for(let i = 0; i < arrayinput.length; i++){

        if(arrayinput[i].Principal >= 2500 && (arrayinput[i].time > 1 && arrayinput[i].time < 3)){
            rate.push(3);
        }
        if(arrayinput[i].Principal >= 2500 && (arrayinput[i].time >= 3 )){
            rate.push(4);
        }
        if(arrayinput[i].Principal < 2500 || (arrayinput[i].time <=1 )){
            rate.push(2);
        }
        else{
            rate.push(1);
        }     
    }

    for(let i = 0; i < arrayinput.length; i++){
        interest.push((arrayinput[i].Principal * rate[i] * arrayinput[i].time) / 100);
    }

    interestDataObject.interestData.push({
        Principal: dataObject.data[0].Principal,
        rate: rate[0],
        time: dataObject.data[0].time,
        interest: interest[0]
    });
    
    interestDataObject.interestData.push({
        Principal: dataObject.data[1].Principal,
        rate: rate[1],
        time: dataObject.data[1].time,
        interest: interest[1]
    });
    interestDataObject.interestData.push({
        Principal: dataObject.data[2].Principal,
        rate: rate[2],
        time: dataObject.data[2].time,
        interest: interest[2]
    });
    interestDataObject.interestData.push({
        Principal: dataObject.data[3].Principal,
        rate: rate[3],
        time: dataObject.data[3].time,
        interest: interest[3]
    });

    console.log(interestDataObject.interestData);

    return(interestDataObject.interestData);
    

};