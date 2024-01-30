function guardar(){
    db.collection("usuarios").add({
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("last").value,
       
    })
    .then((docRef)=>{
       alert("registro exitoso")
       document.getElementById('name').value="";
       document.getElementById('last').value="";
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}