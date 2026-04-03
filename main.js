const apiKey = "b4db8aad42e0436fb4605111260304 "; // poné tu clave aquí
const ciudad = "San Vicente,Buenos Aires";
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(ciudad)}&days=7&lang=es`;
const contenedor = document.getElementById("contenedor-tarjetas")



async function mostrarPronostico() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    data.forecast.forecastday.forEach(dia => {
        const div = document.createElement("div");
        div.classList.add("tarjetas")

        const fecha = document.createElement("h3");
        fecha.textContent = dia.date;

        const img = document.createElement("img");
        img.src = "https:" + dia.day.condition.icon;

        const clima = document.createElement("p");
        clima.textContent = dia.day.condition.text;

        const temperatura = document.createElement("h5")
        temperatura.textContent = `Max: ${dia.day.maxtemp_c}°C / Min: ${dia.day.mintemp_c}°C`;

        div.appendChild(fecha)
        div.appendChild(img)
        div.appendChild(clima)
        div.appendChild(temperatura)


        contenedor.appendChild(div)
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarPronostico();