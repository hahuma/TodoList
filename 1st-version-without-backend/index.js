const tasksContainer = document.querySelector('#tasks-container')
const date = new Date()
const toDo = {}

function handleSubmit(){

    let text = document.getElementById('input').value
    let date = document.getElementById('date').value

    if(text !== "" && date !== ""){

        toDo.date = date
        toDo.text = text
        addTask()

        }else if(text !== "" && date === ""){

                toDo.date = "There's no due date"
                toDo.text = text
                addTask()

            }else{

                alert("The task field should not be blank.")

            }

    event.preventDefault()
    tasksAlert()

}
function addTask(){
    let taskbox = document.createElement('div')
    let textArea = document.createElement('p')
    let dateArea = document.createElement('p')
    let headerText = document.createElement('h1')
    let headerDate = document.createElement('h1')
    let br = '<br>'

    let className = toDo.date.replace(/[" "]/g, "-")
    taskbox.classList.add("id" + className)

    headerText.innerHTML = 'Task:'
    textArea.innerHTML = `${br + toDo.text + br + br}`
    headerDate.innerHTML = 'Due to:'
    dateArea.innerHTML = `${br + toDo.date}`

    tasksContainer.appendChild(taskbox)
    taskbox.appendChild(headerText)
    taskbox.appendChild(textArea)
    taskbox.appendChild(headerDate)
    taskbox.appendChild(dateArea)
}



function tasksAlert(){
    let todayDate = 
        `${date.getFullYear() 
        + '-' 
        + ("0" +(date.getMonth() + 1).toString()) 
        + '-' 
        + '0' 
        + date.getDate()}`
    let nearDate = 
        `${date.getFullYear() 
        + '-' 
        + ("0" +(date.getMonth() + 1).toString()) 
        + '-' 
        + '0' 
        + (date.getDate() + 1)}`

    changeBackgroundColor(todayDate).then(changeBackgroundColor(nearDate))

    async function changeBackgroundColor(dateInformation){

        let dateInformationClass = ".id" + dateInformation
        let taskExpireDate = document.querySelectorAll(dateInformationClass)
        let color


        if(dateInformation === todayDate){
            color = "red"
        }

        if(dateInformation === nearDate){
            color = "yellow"
        }


        for(let i = 0; i < taskExpireDate.length; i++){
            taskExpireDate[i].style.backgroundColor = color
        }
    }
    
}

