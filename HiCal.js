let sortTimeSlots = (timeSlots) =>{
    for(i=0;i<timeSlots.length;i++){
        for(j=1;j<timeSlots.length;j++){
            if(timeSlots[j].startTime < timeSlots[j-1].startTime ){
                temp = timeSlots[j];
                timeSlots[j] = timeSlots[j-1];
                timeSlots[j-1] = temp;
            }
        }
    }

    return timeSlots;
}

let mergeRange = (timeSlots) =>{
    var mergedTimeSlots = [];
    timeSlots = sortTimeSlots(timeSlots);
    var temp = timeSlots[0];

    for(i=1;i<timeSlots.length;i++){
        if(temp.endTime >= timeSlots[i].startTime){
            if(temp.endTime < timeSlots[i].endTime)
                temp.endTime = timeSlots[i].endTime;
        } else{
            mergedTimeSlots.push(temp);
            temp = timeSlots[i];
        }
        if(i==timeSlots.length - 1){
            if(temp.endTime < timeSlots[i].endTime)
                temp.endTime = timeSlots[i].endTime;
            mergedTimeSlots.push(temp);
        }
    }
    return mergedTimeSlots;
}

module.exports = {mergeRange, sortTimeSlots};