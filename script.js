$.ajax({
    url: 'https://api.themoviedb.org/3/movie/550?api_key=5c866126da07e4b15b71ac6b675b6995',
    success: result => {
        const movies = result.Search;
        let cards = '';
        movies.forEach(m => {
            cards += `<div class="col-md-4 my-3">
            <div class="card">
                <img src="${m.poster}" class="card-img-top" >
                <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${m.year}</h6>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>`;
    });
    $(".movies-container").html(cards);
    },

    error: (e) => {
        console.log(e.responseText);
    }
});