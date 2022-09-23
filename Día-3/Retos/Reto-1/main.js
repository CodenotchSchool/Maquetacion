let personas = [];

function addPersonas(){
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let persona = {
                    nombre_persona: nombre.value,
                    email_persona: email.value,
                    password_persona: password.value
                };

    personas.push(persona);
    console.log(personas);
}

function mostrarPersonas(){

    let tabla = document.getElementById("personas");
    let aside = document.querySelector(".aside-mostrar");

    if(aside.classList.contains("aside-ocultar"))
    {
        aside.classList.remove("aside-ocultar")
    }

    tabla.innerHTML = 
                    `
                    <tr class="head">
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Contraseña</th>
                    </tr>
                    `

    for(let i =0;i <personas.length;i++)
    {
        tabla.innerHTML +=
        `<tr >
            <th class = "letras">
                ${personas[i].nombre_persona}
            </th>
            <th class = "letras">
                ${personas[i].email_persona}
            </th>
            <th class = "letras">
                ${personas[i].password_persona}
            </th>
        </tr>
        `
    }
}