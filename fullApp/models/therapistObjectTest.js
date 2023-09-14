let therapist= {
    name:"",
    cost: 0,
    workingSchedule:{
        Monday:[{
            start:120,
            end:180,
            nameOfTask:""
        }],
        Tuesday:[],
        Wednesday:[],
        Thursday:[],
        Friday:[],
        Saturday:[],
        Sunday:[],

    }
}


// Encontrar la tarea de la que va despues

function addEventToTherapist(day,start, end, nameOfTask, ){
    // Implement anti-error measures
    // start < end
    // end < maxTimeOfTheDay
    for (let i=0 ; i< therapist.workingSchedule[day].length; i++ ){
        if (start> therapist.workingSchedule[day][i].start){
            if (end < therapist.workingSchedule[day][i+1]){
                therapist.workingSchedule[day].splice(i, 0, {start: start, end: end, nameOfTask: nameOfTask})
                return "completed"
            }
            return "occupied"
        }
    }
    //Means that the task would be the last one 
    therapist.workingSchedule[day].push({start:start, end:end, nameOfTask:nameOfTask})
}

function removeTask(nameOfTask){

}

function clearTime(start,end){
    // Should remove the tasks that are between the start and end
}

function modifyTask(nameOfTask){

}

function sortTasks(day){
    // Should not be used but just in case
}

function swithTasks(nameOfTask1, nameOfTask2){

}

function moveTask(nameOfTask, start){

}

function getDurationOfTask(nameOfTask){

}
function getAvailableTimes(day){

}

function blockDay(day){

}

function blockWeekend(){

}

