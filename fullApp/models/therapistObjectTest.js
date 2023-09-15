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

    },
    addtask:function(day,start, end, nameOfTask, ){
        // Implement anti-error measures
        // start < end
        // end < maxTimeOfTheDay
        // check that there isnt a task with the same name
        for (let i=0 ; i< this.workingSchedule[day].length; i++ ){
            if (start> this.workingSchedule[day][i].start){
                if (end < this.workingSchedule[day][i+1]){
                    this.workingSchedule[day].splice(i, 0, {start: start, end: end, nameOfTask: nameOfTask})
                    return "completed"
                }
                return "occupied"
            }
        }
        //Means that the task would be the last one 
        this.workingSchedule[day].push({start:start, end:end, nameOfTask:nameOfTask})
    },
    removeTask:function(nameOfTask, day){
        for (let i=0; i< this.workingSchedule[day].length ; i++){
            if (this.workingSchedule[day][i].nameOfTask===nameOfTask){
                this.workingSchedule[day].splice(i,1)
                return "task deleted"
            }
        }
        return 'task not found'
    },
    getTasksInCertainTime: function(start,end, day){
        let ans=[]
        for (let i=0 ; i<this.workingSchedule[day].length; i++){
            if (this.workingSchedule[day][i].end <=start){
                continue
            }
            else if(this.workingSchedule[day][i].end>=start){
                 continue   
            }
            ans.push(this.workingSchedule[day][i])
        }
        return ans
    },
    deleteTasksInCertainTime:function(start,end,day){
        let deletedTasks=[]
        for (let i=0 ; i<this.workingSchedule[day].length; i++){
            if (this.workingSchedule[day][i].end <=start){
                continue
            }
            else if(this.workingSchedule[day][i].end>=start){
                 continue   
            }
            deletedTasks.push(this.workingSchedule[day].splice(i,1)[0])
        }
    },
    switchTasks: function(nameOfTask1, day1, nameOfTask2,day2){
        let index1= this.workingSchedule[day1].findIndex((obj)=> obj.nameOfTask === nameOfTask1)
        let index2= this.workingSchedule[day2].findIndex((obj)=> obj.nameOfTask === nameOfTask2)
        if (index1== -1){
            return "Didnt found the task: "+ nameOfTask1
        }
        if (index2== -1){
            return "Didnt found the task: "+ nameOfTask2
        }
        this.workingSchedule[day1][index1].nameOfTask= nameOfTask2
        this.workingSchedule[day2][index2].nameOfTask= nameOfTask1
        return 'Succesfully changed the tasks'
    },
    sortTasks:function(day){
        // Should not be used but just in case
    },
    modifyTasks:function(nameOfTask1, nameOfTask2){
   
    },
    getFreeHours: function(day){
        let minutesInDay=1440
        let allDayRange= [...Array(minutesInDay).keys()]
        let busyHours= []
        this.workingSchedule[day].forEach(element => {
           let startOfRange= element.start
           let endOfRange= element.end
           busyHours.push({startOfRange:startOfRange, endOfRange:endOfRange})
        });
        let originalLength=allDayRange.length
        
        busyHours.forEach(element=>{
            let newLength= allDayRange.length
            let newStartOfRange= element.startOfRange -(originalLength-newLength)
            let newEndOfRange= element.endOfRange - (originalLength - newLength) 
            allDayRange.splice(newStartOfRange, newEndOfRange)
        })
        let freeHours=[]
        let currentStart= arr[0]
        let currentEnd=start[0]
        for (let i=1 ; i<allDayRange.length ; i++){
            if (allDayRange[i]== currentEnd + 1 ){
                currentEnd=arr[i]
            }
            else{
                freeHours.push({start:currentStart, end: currentEnd})
                currentStart=currentEnd= allDayRange[i]
            }
        }
        freeHours.push({start:currentStart, end: currentEnd})
        return freeHours
    },
    getIndexOfTask: function(nameOfTask, day){
        for(let i=0 ; i<this.workingSchedule[day].length ; i++){
            if (this.workingSchedule[day].nameOfTask == nameOfTask){
                return i
            }
        }
        return "task not found" 
    },
    getDurationOfTask: function(nameOfTask, day){
        let indexOfTask=this.getIndexOfTask(nameOfTask, day)
        let start= this.workingSchedule[day][indexOfTask].start
        let end= this.workingSchedule[day][indexOfTask].end
        return end-start
    },
    convertMinutesToHoursAndMinutes: function (minutes) {
        if (typeof minutes !== 'number' || isNaN(minutes) || minutes < 0) {
          return 'Invalid input';
        }
      
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
      
        let result = '';
        if (hours > 0) {
          result += `${hours} hour`;
          if (hours > 1) {
            result += 's'; // Plural form
          }
        }
      
        if (remainingMinutes > 0) {
          if (result.length > 0) {
            result += ' '; // Add space if hours were included
          }
          result += `${remainingMinutes} minute`;
          if (remainingMinutes > 1) {
            result += 's'; // Plural form
          }
        }
        return result;
      }       
}


