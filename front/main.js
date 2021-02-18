const path = 'http://localhost:3000/api/v1/alunos';

window.addEventListener('load', init);
async function init() {
    console.log('hello, world');
    const alunos = await fetchData(path);
    console.log(alunos); //-> Array(4) [{...}, {...}, {...}, {...}]
}

async function fetchData(path) {
    const data = await fetch(path);
    const json = await data.json();
    return json;
}
