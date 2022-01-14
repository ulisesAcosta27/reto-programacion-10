class Formulario {
    constructor(nombre, gustoPersonal, turno, temasDificiles){
        this.nombre = nombre;
        this.gustoPersonal = gustoPersonal;
        this.turno = turno;
        this.temasDificiles = temasDificiles
    }
};

class VerFormulario {
    mostrarFormulario(elemento){
        const seeForm = document.querySelector('.mostrarFormulario');
        const creacionFormulario = document.createElement('div');
        creacionFormulario.innerHTML = `<div>
        <h3>nombre: ${elemento.nombre}</h3>
        <p>tema que le gusto hasta ahora: ${elemento.gustoPersonal}</p>
        <p>Prefiere estudiar: ${elemento.turno}</p>
        <p>los temas mas complejos para el son: ${elemento.temasDificiles}</p>
        </div>`;
        seeForm.appendChild(creacionFormulario);
    }
}

document.getElementById('lista_formulario').addEventListener('submit', (e) =>{
    const nombre = document.getElementById('nombre').value;

    let gustoPersonal;
    function aparecerValor() {
        const valoresBox = document.getElementById('gustos_personales')
        return  gustoPersonal = valoresBox.value;
    }
    aparecerValor()

    const checkBox = document.querySelectorAll('.valoresTurnos');
    let turno;
    checkBox.forEach(e => { 
        if(e.checked == true){
        return turno = e.value
    }});

    const checkBoxComplejidad = document.querySelectorAll('.valoresTemario');
    let temasDificiles = [];
    checkBoxComplejidad.forEach(e =>{
        if(e.checked == true){
           return temasDificiles.push(e.value)
        }
    })

    const formularioCompleto = new Formulario(nombre, gustoPersonal, turno, temasDificiles);

    const resolForm = new VerFormulario();
    resolForm.mostrarFormulario(formularioCompleto);

    e.preventDefault();
});


