async function addNote(){
    var newNode = document.createElement('div');
    var title = document.getElementsByClassName("card-title-input")[0];
    var texto = document.getElementsByClassName("card-text-input")[0];

    if(title.value != "" && title.value != null && texto.value != "" && texto.value != null){
        title.setAttribute("class", "form-control card-title-input form-control is-valid")
        texto.setAttribute("class", "form-control card-text-input form-control is-valid")
        newNode.innerHTML = '<div class="col"><div class="card h-100 card text-white bg-dark mb-3"><div class="card-body"><h5 class="card-title">' + title.value + '</h5><p class="card-text">' + texto.value + '</p></div></div></div>';
        document.getElementsByClassName("cards")[0].appendChild(newNode);
    } else if(title.value != "" && title.value){
        title.setAttribute("class", "form-control card-title-input form-control is-valid")
        texto.setAttribute("class", "form-control card-text-input form-control is-invalid")
        texto.setAttribute("placeholder", "Insira o texto");
    } else if(texto.value != "" && texto.value){    
        texto.setAttribute("class", "form-control card-text-input form-control is-valid")
        title.setAttribute("class", "form-control card-title-input form-control is-invalid")
        title.setAttribute("placeholder", "Insira o título");
    } else{
        title.setAttribute("class", "form-control card-title-input form-control is-invalid")
        title.setAttribute("placeholder", "Insira o título");
        texto.setAttribute("class", "form-control card-text-input form-control is-invalid")
        texto.setAttribute("placeholder", "Insira o texto");
    }
    
}
async function addToDoList(){
    var newNode = document.createElement('div');
    var title = document.getElementsByClassName("card-title-input")[0];

    if(title.value != ""){
        title.setAttribute("class", "form-control card-title-input form-control is-valid")
        newNode.innerHTML = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">' + title.value + '</label></div>';
        document.getElementsByClassName("container")[0].appendChild(newNode);
    } else{
        title.setAttribute("class", "form-control card-title-input form-control is-invalid")
        title.setAttribute("placeholder", "Insira o título");
    }
    
}

async function addEvent(){
    var newNode = document.createElement('tr');
    var data = document.getElementsByClassName("card-data-input")[0];
    var title = document.getElementsByClassName("card-title-input")[0];
    var texto = document.getElementsByClassName("card-text-input")[0];
    
    if(title.value != ""){
        title.setAttribute("class", "form-control card-title-input form-control is-valid")
        newNode.innerHTML = '<tr><th scope="row">' + data.value + '</th><td>'+ title.value + '</td><td>'+ texto.value + '</td></tr>';
        document.getElementById("tbody").appendChild(newNode);
    } else{
        title.setAttribute("class", "form-control card-title-input form-control is-invalid")
        title.setAttribute("placeholder", "Insira o título");
    }        
}