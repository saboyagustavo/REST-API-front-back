const path = 'http://localhost:3000/api/v1/alunos';
let studentsList = null;

window.addEventListener('load', init);
async function init() {
    console.log('hello, world');
    const alunos = await fetchData(path);
    mapElements();
    render(alunos);
}

async function fetchData(path) {
    const data = await fetch(path);
    const json = await data.json();
    return json;
}

function mapElements() {
    studentsList = document.getElementById('studentsList');
}

function buildStudentsList(data) {
    data.forEach(aluno => {
        const li = document.createElement('li');
        li.innerHTML = `Nome: ${aluno.nome}`;
        studentsList.appendChild(li);

        console.log(`CREATED LIST ITEM: ${aluno.nome}`);
    });
}

function render(data) {
    buildStudentsList(data);
}
