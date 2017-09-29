function path(Folder){
// Obtiene Carpeta raiz
    if(!Folder){Folder='o3m.director';}
    Folder = Folder + '/';
    var dominio = document.domain;
    var raiz = window.location.pathname.split(Folder);
    var ruta = raiz[0] + Folder;
    return ruta;
}

function actual(Folder){
// Obtiene Carpeta raiz
    if(!Folder){Folder='o3m.director';}
    Folder = Folder + '/';
    var raiz = window.location.pathname.split(Folder);
    return raiz[1];
}