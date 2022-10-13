$.ajax({
    url: 'https://www.omdbapi.com/?apikey=dca61bcc&i=',
    success: result => {
        const movies = result.Search;
        let cards = '';
        movies.forEach(m => {
            cards += `<div class="col-md-4 my-3">
            <div class="card">
                <img src="${m.Poster}" class="card-img-top" >
                <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button data-imdb=${m.imdbId}data-bs-toggle="modal" data-bs-target="#modalmovie ">Show Detail</a>
                </div>
              </div>
        </div>`;
    });
    $(".movies-container").html(cards);

    // ketika tombol detail di klik
    $(".modal-detail-button").on(`click`,function(){
        $.aja
    })
    },

    error: (e) => {
        console.log(e.responseText);
    }
});