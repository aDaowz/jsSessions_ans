document.addEventListener('DOMContentLoaded', () => {

  const createOption = (selector, content) => {
    const option = document.createElement('option');
    option.value = content;
    option.textContent = content;
    selector.appendChild(option);
  }
  
  const daySelect = document.getElementById('dia');
  const monthSelect = document.getElementById('mes');
  const yearSelect = document.getElementById('anio');

  // Días
  for (let i = 1; i <= 31; i++) {
    createOption(daySelect, i);
  }

  // Meses
  let months = ["Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"];
  for (let i = 0; i <= months.length; i++) {
    createOption(monthSelect, months[i]);
  }

    // Años
    const currentYear = 2023; // Puedes establecer el año actual manualmente aquí
    const startYear = currentYear - 100; // Ajusta el rango de años según lo desees
    
    for (let i = currentYear; i >= startYear; i--) {
      createOption(yearSelect, i);
    }

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    // THIS IS FOR REGEX ONLY

      // const email = form.email.value;
      // const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/
      
      // if(!emailRegex.test(email)){
      //   alert("El campo de correo electónico no cumple con el formato requerido")
      //   return;
      // }
      // else{
      //   console.log("Siiiiiio");
      // }

    const formData = {
      nombre: form.nombre.value,
      fecha_nacimiento: {
        dia: form.dia.value,
        mes: form.mes.value,
        anio: form.anio.value,
      },
      email: form.email.value,
      ciudad: form.ciudad.value,
      motivo: form.motivo.value,
    };

    alert(`¡Gracias por tu contribución ${ formData.nombre}!`);

    console.log(formData);
  });
});