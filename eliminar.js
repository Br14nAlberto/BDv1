//eliminar 
function eliminar(id){
    db.collection("usuarios").doc(id).delete().then(function(){
        console.log("el documento se ha borrado");
        alert("el documento se a borrado")
    }).catch(function(error) {
        console.error("error al remover le documento", error);
        alert("error al remover le documento")
    });
} 