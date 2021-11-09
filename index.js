const root = document.getElementById('root');

fetch('./students.json')
    .then(response => response.json())
    .then(response => displayStudent(response))
    .catch(err => alert(err))

function displayStudent(students) {
    students.forEach(student => {
        this.root.innerHTML += renderSingleStudent(student)
        Object.keys(student).forEach(key => {
            if (key === 'parents'){
                displayParent(student[key])
            }
        })
    })   
}

function renderSingleStudent(student) {
    return `<details><summary>${student.name}<summary></details>`
}

function displayParent(parents){
    if (parents.constructor.name === "Array") {
        parents.forEach(parent => {
            this.root.innerHTML += renderSingleParent(parent)
        })
    } else {
        renderSingleParent(parents)
    }
}

function renderSingleParent(parent) {
    return `<details><summary>${parent.name}<summary></details>`
}