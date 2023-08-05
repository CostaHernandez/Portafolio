//boton leer mas
document.getElementById('read-more-btn').addEventListener('click', function() {
    var hiddenContent = document.querySelector('.hidden');
    
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'block';
      this.textContent = 'Leer menos';
    } else {
      hiddenContent.style.display = 'none';
      this.textContent = 'Leer más...';
    }
  });

//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

    })
}

//Función que detecta cuando lanzar la animación de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");

        cargarAnimaciones();
    }
}

//detecto el scrolling para aplicar la animación de las habilidaes
window.onscroll = function(){
    efectoHabilidades();
}
  
//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

document.addEventListener('DOMContentLoaded', function() {
    const btnToggleNav = document.getElementById('btn-toggle-nav');
    const nav = document.getElementById('mi-nav');
  
    btnToggleNav.addEventListener('click', function() {
      if (nav.style.display === 'none') {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    });
  });
  
  