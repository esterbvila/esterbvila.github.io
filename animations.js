var prev = document.querySelector("a.hvr-icon-back")
var next = document.querySelector("a.hvr-icon-forward")

var slider = document.querySelector("#sliderContent")
var project = document.querySelectorAll("div.project")

prev.addEventListener("click", () => {
    moveSlider(-1)
    // changeColor(-1)
})

next.addEventListener("click", () => {
    moveSlider(1)
    // changeColor(1)
})

var activeProject = 0;
var numProjects = project.length   // calcula el numero de projectes que hi ha

slider.style.width = (numProjects * 700) + "px"     // li fixa l'amplada al div interior

function moveSlider(direction) {
    activeProject = activeProject + direction   // canvia la imatge activa
    
    if (activeProject > numProjects - 1) activeProject = 0;   // comprova que no estiguem al principi o al final
    else if (activeProject < 0) activeProject = numProjects - 1;

    mostrar(activeProject);
    
    slider.style.marginLeft = `${-700 * activeProject}px`   // fixa el marge perque es vegi la imatge correcta
}

function mostrar(des){      // comprova quina imatge es mostra i oculta la resta
    project.forEach((description, i) => {
        if (i == des) {
            description.style.opacity = 1 
            description.style.transform = "scale(1)"
        } else {
            description.style.opacity = 0          // fa la description transparent
            description.style.transform = "scale(0)"     // escala la description a 0
        }
    })
}

mostrar(0)

// function changeColor(direction){
//     activeProject = activeProject + direction
//     if (activeProject = -1 ){
//         document.getElementById("bgChange").style.backgroundColor = "rgba(255, 180, 172, 0.3)";
//     }else if (activeProject = 0){
//         document.getElementById("bgChange").style.backgroundColor = "rgba(255, 197, 50, 0.3)";
//     }else if (activeProject = 1){
//         document.getElementById("bgChange").style.backgroundColor = "purple";
//     }else{
//         document.getElementById("bgChange").style.backgroundColor = "blue";
//     }
// }