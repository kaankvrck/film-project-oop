//Tüm Elementleri Seçme
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI ve Storage Objelerini Üretip Başlatma
const ui = new UI();
const storage = new Storage();

//Eventleri Yükleme
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //Hata
        ui.showAlert("danger","Please enter all values...");
    }
    else{
        //Yeni film eklenecek
        const newFilm = new Film(title,director,url);
        
        ui.addFilmToUI(newFilm);//Arayüze film ekleme
        storage.addFilmToStorage(newFilm);// Storage'a film ekleme
        ui.showAlert("success","Film successfuly added storage");
    }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert("success","Successfuly delete film...");
    }
}
function clearAllFilms(){
    if(confirm("Are you sure about this..?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}