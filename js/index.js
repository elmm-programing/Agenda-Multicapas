table();
let contenido = document.getElementById("contenido");
let form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("nombre").value;
  let lastName = document.getElementById("apellido").value;
  let tel = document.getElementById("telefono").value;
  if (name != "" && lastName != "" && tel != "") {
    let json = {
      nombre: name,
      apellido: lastName,
      telefono: tel,
    };
    console.log(JSON.stringify(json));
    fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      body: JSON.stringify(json),
    })
      .then((res) => res.json())
      .then((data) => {
        table();
        console.log(data);
      });
  } else {
    alert("Debe llenar todos los campos!!");
  }
});

function table() {
  fetch("http://www.raydelto.org/agenda.php")
    .then((res) => res.json())
    .then((datos) => {
      contenido.innerHTML = "";
      for (let valor of datos) {
        contenido.innerHTML += `
	      <tr>
                <td>${valor.nombre}</td>
                <td>${valor.apellido}</td>
                <td>${valor.telefono}</td>
              </tr>

    `;
      }
    });
}
