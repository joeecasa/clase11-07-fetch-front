window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

const server = "http://localhost:"
const port = 3031
const apiMovies = "/api/movies"



  // Aqui debemos agregar nuestro fetch
  fetch(server + port + apiMovies)
  .then(response=>response.json())
  .then(peliculas => {
  
  //Codigo que debemos usar para mostrar los datos en el frontend
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;
      const a = document.createElement("a")
      a.textContent = "formulario"
      a.setAttribute("href","../formulario.html")

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(a)
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
  })
};
