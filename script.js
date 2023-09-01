const projectDescription = document.querySelectorAll('.project-description')
console.log(projectDescription)
const leftSymbol = document.createElement('span')
const rightSymbol = document.createElement('span')
leftSymbol.textContent = '<\\'
rightSymbol.textContent = '/>'
leftSymbol.classList.add('span-settings')
rightSymbol.classList.add('span-settings')

projectDescription.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.append(rightSymbol)
        project.prepend(leftSymbol)
        setTimeout(() => {
            leftSymbol.style.opacity = '1'
            rightSymbol.style.opacity = '1'
        }, 1);

    })
})
projectDescription.forEach(project => {
    project.addEventListener('mouseout', () => {
        leftSymbol.style.opacity = '0'
        rightSymbol.style.opacity = '0'
        project.removeChild(leftSymbol)
        project.removeChild(rightSymbol)
    })
})