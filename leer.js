//leer
tabla = document.getElementById('tabla');
db.collection("usuarios").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc)=> {
        console.log(`${doc.id} => ${doc.data().name}`);
        tabla.innerHTML +=`
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellidos}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button> </td>
        <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().apellidos}')">Editar</button> </td>
        </tr>
        `
    });
})

