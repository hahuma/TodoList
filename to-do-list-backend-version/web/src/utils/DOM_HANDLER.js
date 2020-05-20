function tagCreator(tagName){

    return tagName = document.createElement(`${tagName}`)

}

function classCreator(tagName, className){

    return tagName.setAttribute('class', className)

}

function appendElement(parentElement, childElement){

    childElement.forEach((element) => {
        parentElement.appendChild(element)
    })

    return

}

function setButtonProperties(buttonElement, buttonType = '', buttonInnerText = '', buttonClassName = ''){

    buttonElement.innerText = buttonInnerText
    buttonElement.setAttribute('type', buttonType)
    buttonElement.setAttribute('class', buttonClassName)

    return

}

function setInputProperties(inputElement, inputType = '', inputId = '', inputPlaceholder = '', inputClassName = '', inputName = ''){

    inputElement.setAttribute('id', inputId)
    inputElement.setAttribute('type', inputType)
    inputElement.setAttribute('class', inputClassName)
    inputElement.setAttribute('name', inputName)
    inputElement.setAttribute('placeHolder', inputPlaceholder)

    return
}

function setTextareaProperties(textareaElement, textareaName = '', textareaId = '', textareaColumns = '15', textareaRows = '15', textareaPlaceholder = '', isRequired = true){

    textareaElement.setAttribute('name', textareaName)
    textareaElement.setAttribute('id', textareaId)
    textareaElement.setAttribute('cols', textareaColumns)
    textareaElement.setAttribute('rows', textareaRows)
    textareaElement.setAttribute('placeholder', textareaPlaceholder)

    if(isRequired === true){

        textareaElement.setAttribute('required', '')

    }

    return

}


const DOM_HANDLER = {
    tagCreator,
    classCreator,
    appendElement,
    setInputProperties,
    setButtonProperties,
    setTextareaProperties
}
export default DOM_HANDLER
