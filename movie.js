const formSubmit = document.getElementById("searchForm");

const searchData = async (event) => {
  event.preventDefault(); // prevent page from reloading at form submission
  const query = document.getElementById("searchInput").value;
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=5ccef2b6&&s=${query}`
  );
  const data = await response.json();

  displayResults(data.Search);
};
formSubmit.addEventListener("submit", searchData);

const displayResults = (queryResults) => {
  const parentDiv = document.getElementById("parent-div");
  parentDiv.innerHTML = ``; // empty the previous results contained in the parent div

  queryResults.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.setAttribute("class", "row movie-card g-0 mb-3");

    movieDiv.innerHTML = `
            <div class="movie-poster col-md-4">
            <img src="${movie.Poster}" class="img-fluid rounded-start" alt="Poster of ${movie.Title}">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">Type : ${movie.Type}</p>
                <p class="card-text">${movie.Year}</p>
                <button class="btn btn-primary read-more" value="${movie.imdbID}">Read more</button>
            </div>
            </div>
      `;

    parentDiv.appendChild(movieDiv);
  });

  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      displayPopUp(queryResults[index]);
    });
  });

  const cards = document.querySelectorAll(".movie-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
};

const displayPopUp = (movie) => {
  const containerPopup = document.getElementById("containerPopup");
  const moviePoster = document.getElementById("moviePoster");
  const moviePlot = document.getElementById("moviePlot");
  const movieTitle = document.getElementById("movieTitle");
  const movieYear = document.getElementById("movieYear");

  const searchMovieDetails = async (e) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=5ccef2b6&&i=${movie.imdbID}`
    );
    const data = await response.json();

    return data;
  };

  const movieDetails = searchMovieDetails();

  movieDetails.then((data) => {
    moviePoster.src = data.Poster;
    moviePlot.textContent = data.Plot;
    movieType.textContent = data.Type;
    movieTitle.textContent = data.Title;
    movieYear.textContent = data.Year;
  });

  containerPopup.classList.toggle("display-none");
};

const closeBtn = document.getElementById("close-popup");

closeBtn.addEventListener("click", () => {
  containerPopup.classList.toggle("display-none");
  // delete all movie's information to clear the popup
  moviePoster.src = "";
  moviePlot.textContent = "";
  movieTitle.textContent = "";
  movieType.textContent = "";
  movieYear.textContent = "";
});
