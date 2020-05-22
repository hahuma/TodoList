import DOM_HANDLER from './DOM_HANDLER.js';

export default function listAllTasks(data){
    const tasksContainer = document.getElementById('tasks-container')
    let taskbox = DOM_HANDLER.tagCreator('div')
    let textArea = DOM_HANDLER.tagCreator('p')
    let dateArea = DOM_HANDLER.tagCreator('p')
    let headerText = DOM_HANDLER.tagCreator('h1')
    let headerDate = DOM_HANDLER.tagCreator('h1')
    let br = '<br>'

    taskbox.setAttribute('id', data._id)
    DOM_HANDLER.classCreator(headerText, 'taskHeader')
    DOM_HANDLER.classCreator(headerDate, 'taskHeader')
    headerText.innerHTML = 'Task:'
    textArea.innerHTML = `${br + data.taskText + br + br}`
    headerDate.innerHTML = 'Due to:'
    dateArea.innerHTML = `${br + data.taskDate}`

    tasksContainer.appendChild(taskbox)
    DOM_HANDLER.appendElement(tasksContainer, [taskbox])
    DOM_HANDLER.appendElement(taskbox, [headerText, textArea, headerDate, dateArea])
}
