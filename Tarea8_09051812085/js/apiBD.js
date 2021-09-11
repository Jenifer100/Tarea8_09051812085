//Guardamos los generos en el combobox
const generos=()=>{
  const api2=`https://api.themoviedb.org/3/genre/movie/list?api_key=eed6b2250c0c56d9ab9d69c22763c557&language=es-MX`

   fetch(api2).then((response)=>{
    if(response.status!==200){
console.log(`Esta ocurriendo un problema ${response.status}`);
return;
    }
    
    response.json().then((data)=>{
      imprimirHTML(data.genres);
    })
  })
}
function imprimirHTML(genero){
  let combobox='';
  genero.forEach(gener=>{
      combobox+=`<option value="${gener.name}">${gener.name}</option>`
  });
  console.log(combobox);
  const contenedor2=document.querySelector('#combo');
  contenedor2.innerHTML=combobox;
}
generos();

//Cobo box
function Obtener(){

const IDgeneros=(ID)=>{
  const api2=`https://api.themoviedb.org/3/genre/movie/list?api_key=eed6b2250c0c56d9ab9d69c22763c557&language=es-MX`

   fetch(api2).then((response)=>{
    if(response.status!==200){
console.log(`Ha ocurrido un problema ${response.status}`);
return;
    }
    
    response.json().then((data)=>{
  ObtenerID(ID, data.genres);

      
    })
    
  })
}
//Id del genero de las peliculas


function ObtenerID(palabra, arreglo){
  var id=0;
  arreglo.forEach(gen=>{
    if(palabra===gen.name){
      id= gen.id;
    }
    
});
console.log(id);

//Utilizando ajax se desplegaran las categorias las peliculas

const ObtenerPeliculas = new Promise((resolve, reject) => {
  const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=eed6b2250c0c56d9ab9d69c22763c557&language=es-MXhttps://api.themoviedb.org/3/movie/upcoming?api_key=9b2a8312890d22034abbef2a8b6caac7&language=es-MX`;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", api, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText).results);
    } else {
      reject(Error(xhr.statusText).header);
    }
  };

  xhr.onerror = (error) => reject(error);

  xhr.send();
});

ObtenerPeliculas.then(
  (pelicula) => html(pelicula),
  (error) => console.error(new Error("Hubo un clavo" + error))
);
 function html(movies){
    let obhtml='';
    movies.forEach(element => {
      element.genre_ids.forEach(element2=>{
        if(element2===id){
          obhtml+=`<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element.poster_path}"></img><br>Titulo Pelicula: ${element.title}<br>Titulo Original de la Pelicula: ${element.original_title}<br> Fecha de lanzamiento: ${element.release_date}<br>`
        }
      });
       
    });
    const contenedor=document.querySelector("#app");
    contenedor.innerHTML=obhtml;
    console.log(obhtml);
}
}
let categoria=document.getElementById("combo");
let categoriaSeleccionada=categoria.value;
console.log(categoria);
IDgeneros(categoriaSeleccionada);

}
