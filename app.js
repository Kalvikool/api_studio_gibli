fetch('https://ghibliapi.herokuapp.com/films')
.then(res =>
{
return res.json()
})
.then(data =>
    {
      const movielist = document.getElementById('container')
        data.forEach(movie=> {

            console.log(movie)
            let movie_div = document.createElement('div')
            movie_div.innerHTML = '<div class="title">' + movie.title + '</div><div class="description">' + movie.description + '</div><br><p><hr>'
            container.append(movie_div)
           
        });

//loome elemendi
  
     } )
