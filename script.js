$.ajax({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=ae614c3f&s=avengers",

  success: (results) => {
    const movies = results.Search;
    let cards = "";
    movies.forEach((m) => {
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
    $(".modal-detail-button").on(`click`, function () {
      $.ajax;
    });
  },

  error: (e) => {
    console.log(e.responseText);
  },
});
