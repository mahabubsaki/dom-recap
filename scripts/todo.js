const currentTimeFunc = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let isNight = today.getHours() > 11
    if (isNight) {
        isNight = 'PM'
    } else {
        isNight = 'AM'
    }
    const result = date + ' ' + time + ' ' + isNight
    return result
}
document.getElementById('task-add').addEventListener('click', () => {
    if (!document.getElementById('priority-select').value || !document.getElementById('input-field').value) {
        alert('Please input your task and select priority')
        return
    }
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('new-task')
    const currentTime = currentTimeFunc()
    const firstChild = document.createElement('div')
    firstChild.classList.add('absolute', 'top-[0px]', 'flex', 'gap-4', 'right-0')
    firstChild.innerHTML = `
                                <i class='cursor-pointer bx bxs-message-square-check complete-btn bx-md' title='Complete task'></i>
                                <i class='cursor-pointer delete-btn bx bxs-trash-alt bx-md' title='Delete task'></i>
    `
    mainDiv.appendChild(firstChild)
    const secondChild = document.createElement('span')
    secondChild.classList.add('inline-block', 'table', 'px-4', 'py-2', 'm-auto', 'border-[#100F0F]', 'border-[3px]', 'rounded-full')
    secondChild.innerText = Number(document.getElementById('pending').innerText) + 1
    mainDiv.appendChild(secondChild)
    const thirdChild = document.createElement('p')
    thirdChild.classList.add('my-2', 'text-xl', 'text-center')
    const thirdChildOne = document.createElement('span')
    thirdChildOne.innerText = 'Priority : '
    thirdChild.appendChild(thirdChildOne)
    const thirdChildTwo = document.createElement('span')
    thirdChildTwo.classList.add('font-bold', document.getElementById('priority-select').value)
    thirdChildTwo.innerText = document.getElementById('priority-select').value
    thirdChild.appendChild(thirdChildTwo)
    const thirdChildThree = document.createElement('span')
    thirdChildThree.classList.add('inline-block', 'w-[15px]', 'h-[15px]', 'rounded-full', 'ml-2', 'relative', 'top-[1px]', document.getElementById('priority-select').value + '-bg')
    thirdChild.appendChild(thirdChildThree)
    mainDiv.appendChild(thirdChild)
    const fourthChild = document.createElement('p')
    fourthChild.classList.add('text-center')
    fourthChild.innerHTML = `
<span>Added At : </span><span class="font-bold">${currentTime}</span>
`
    mainDiv.appendChild(fourthChild)
    const fifthChild = document.createElement('p')
    fifthChild.classList.add('my-2', 'text-center')
    fifthChild.innerText = document.getElementById('input-field').value
    mainDiv.appendChild(fifthChild)
    document.getElementById('pending-container').appendChild(mainDiv)
    document.getElementById('pending').innerText = Number(document.getElementById('pending').innerText) + 1
    document.getElementById('input-field').value = ''
    document.getElementById('priority-select').value = ''
    const buttons = document.getElementsByClassName('delete-btn')
    const buttons2 = document.getElementsByClassName('complete-btn')
    for (const button of buttons) {
        button.addEventListener('click', (e) => {
            e.target?.parentNode?.parentNode?.parentNode?.removeChild(e.target?.parentNode?.parentNode)
            document.getElementById('pending').innerText = document.getElementById('pending-container').children.length
            const tasks = document.getElementsByClassName('new-task')
            let initial = 1

            for (let task of tasks) {
                task.childNodes[1].innerText = initial
                initial++
            }
        })
    }
    for (const button2 of buttons2) {
        button2.addEventListener('click', (e) => {
            const reservedDiv = e.target?.parentNode?.parentNode
            e.target?.parentNode?.parentNode?.parentNode?.removeChild(e.target?.parentNode?.parentNode)
            document.getElementById('pending').innerText = document.getElementById('pending-container').children.length
            const tasks = document.getElementsByClassName('new-task')
            let initial = 1

            for (let task of tasks) {
                task.childNodes[1].innerText = initial
                initial++
            }
            const completedAt = currentTimeFunc()
            console.log(reservedDiv.children);
            reservedDiv.children[0].style.display = 'none'
            reservedDiv.children[2].style.display = 'none'
            reservedDiv.children[1].innerText = document.getElementById('complete-container').children.length + 1
            reservedDiv.children[3].style.marginTop = '10px'
            reservedDiv.children[3].style.marginBottom = '10px'
            reservedDiv.children[3].innerHTML = `
            <span>Completed At : </span><span class="font-bold">${completedAt}</span>
            `


            console.log(reservedDiv);
            document.getElementById('complete-container').appendChild(reservedDiv)
            document.getElementById('complete').innerText = document.getElementById('complete-container').children.length
        })
    }
})

