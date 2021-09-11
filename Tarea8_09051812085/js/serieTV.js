const ObtenerProgramas = new Promise((resolve, reject) => {
    const api = `https://api.themoviedb.org/3/tv/popular?api_key=eed6b2250c0c56d9ab9d69c22763c557&language=en-US&page=1`;
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
  
  ObtenerProgramas.then(
    (programa) => html(programa),
    (error) => console.error(new Error("Ocurrio un error" + error))
  );
   function html(progra){
      let obhtml='';
      progra.forEach(element => {
        obhtml+=`<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element.poster_path}"></img><br>Titulo Pelicula: ${element.title}<br>Titulo original de la pelicula: ${element.original_title}<br> Fecha de lanzamiento: ${element.release_date}<br>`
         
      });
      const contenedor=document.querySelector("#app");
      contenedor.innerHTML=obhtml;
      console.log(obhtml);
  }
  