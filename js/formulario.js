window.onload = () => {

    let title = document.querySelector("#title").value
    let rating = document.querySelector("#rating").value
    let awards = document.querySelector("#awards").value
    let release_date = document.querySelector("#release_date").value
    let length = document.querySelector("#length").value
    let botonAgregar = document.querySelector(".botonAgregar")

    botonAgregar.addEventListener("click", function (event) {
        event.preventDefault()
        

        fetch("http://localhost:3031/api/movies/create", {
            method: "POST",
            body: JSON.stringify({ title, rating, awards, release_date, length }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // if(data.meta.status === 200){
                // document.forms[0].reset()
                // }
            })
            .catch(err => alert("tenemos un error"))
    })

    let select = document.querySelector("#selectMovie")
    const server = "http://localhost:"
    const port = 3031
    const apiMovies = "/api/movies"



    // Aqui debemos agregar nuestro fetch
    fetch(server + port + apiMovies)
        .then(response => response.json())
        .then(peliculas => {
            let data = peliculas.data;
            data.forEach(movie => {
                select.innerHTML += `<option value=${movie.id} > ${movie.title} </option>`
            });

            select.addEventListener("change", function (event) {
                console.log(data[event.target.value]);
                let title = document.querySelector("#title")

                let findData = data.find(function(movie){
                    return movie.id == event.target.value
                });


                

                title.value = findData.title


                
            })
        })




}
