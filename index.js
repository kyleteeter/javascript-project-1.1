const root = document.getElementById('root');

fetch('./students.json')
    .then(response => response.json())
    .then(response => displayStudent(response))
    .catch(err => alert(err))

function displayStudent(students) {
    students.forEach(student => {
        let parents = [];
        Object.keys(student).forEach(key => {
            if (key === 'parents'){
                parents = (displayParent(student[key]))
            }
        })
        this.root.innerHTML += renderSingleStudent(student, parents)
    })   
}

function renderSingleStudent(student, parents) {
    return `<details class="student"><summary>${student.name}</summary>${parents}</details>`
}

function displayParent(parents){
    let results = [];
    if (!parents){
        return [];
    } else if (parents.constructor.name === "Array") {
        parents.forEach(parent => {
            results += (renderSingleParent(parent))
        })
    } else {
        results += (renderSingleParent(parents))
    }
    return results;
}

function renderSingleParent(parent) {
    return `<details><summary>${parent.name}</summary></details>`
}