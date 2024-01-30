//editar
function editar(id, nombre, apellidos){

    document.getElementById('name').value = nombre;
    document.getElementById('last').value = apellidos;
    boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        washingtonRef = db.collection("usuarios").doc(id);

        nombre = document.getElementById('name').value;
        apellidos = document.getElementById('last').value;

        return washingtonRef.update({
            first: nombre,
            last: apellidos
        })
        .then(function(){
            console.log("el documento a sido actualizado");
            boton.innerHTML = 'Guardar';
        })
        .catch(function(error){
            console.error("error al actualizar el documento:", error);
        });
    }

   
}