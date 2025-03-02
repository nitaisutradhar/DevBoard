const completed_btns = document.querySelectorAll('.completed-btn');
let taskNumber = parseInt(document.getElementById('task-number').innerText);
let navTaskNum = parseInt(document.getElementById('nav-task-num').innerText);

for(let i=0;i<completed_btns.length;i++){
    const complete_btn = completed_btns[i];
    complete_btn.addEventListener('click', function (){
        alert("Board updated Successfully");

        document.getElementById('task-number').innerText = --taskNumber;
        document.getElementById('nav-task-num').innerText = ++navTaskNum;

        complete_btn.classList.add("bg-gray-300","text-gray-700","disabled:opacity-50");
        complete_btn.classList.remove("text-white","cursor-pointer");
        complete_btn.setAttribute("disabled","true")

        const d = new Date();
        const time = d.toLocaleTimeString();

        const activityTitle = complete_btn.parentElement.parentElement.childNodes[3].innerText;
        
        const taskItems = document.getElementById('task-items');
        const taskItem = document.createElement('p');
        taskItem.classList.add("bg-[#F4F7FF]", "opacity-70", "rounded-lg", "p-2.5")
        taskItem.textContent = `You have Complete The Task ${activityTitle} at ${time}`
        taskItems.appendChild(taskItem)

        if(!taskNumber){
            alert("Congratulations!! You have completed all the current task.")
        }
    })
}

// Clear History
const clearHistory = document.getElementById('clear-history');
const activityLog = document.getElementById('activity-log');
clearHistory.addEventListener('click', function(){
    const taskItems = document.getElementById('task-items');
    taskItems.innerHTML=''
})

// Date
d = new Date();
d = d.toDateString().split(" ")
document.getElementById("c-week").innerText = d[0] + ' ,';
document.getElementById("calender-date").innerText = d[1] + ' ' + d[2] + ' ' + d[3];