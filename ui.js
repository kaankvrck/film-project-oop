function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
    const filmList = document.getElementById("films");
    
    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
  `;
};
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
};
UI.prototype.showAlert = function(type,message){
    const firstCardBody = document.querySelectorAll(".card-body")[0];
    //Alert div'ini oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1500);
};
UI.prototype.loadAllFilms = function(films){

    films.forEach(function(film){
        ui.addFilmToUI(film);
    });

};
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
};
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList =document.getElementById("films");
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
};