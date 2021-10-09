table();
let contenido = document.getElementById("contenido");
let form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let json = {
    nombre: `${document.getElementById("nombre").value}`,
    apellido: `${document.getElementById("apellido").value}`,
    telefono: `${document.getElementById("telefono").value}`,
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
