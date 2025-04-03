const Pantalla = document.querySelector('.Pantalla');
const botones = document.querySelectorAll('.btn');

// Verificar que los elementos existen
if (!Pantalla) console.error("No se encontró el elemento con la clase .Pantalla");
if (botones.length === 0) console.error("No se encontraron botones con la clase .btn");

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        // Si el botón es C, resetear la pantalla
        if (boton.id === 'C') {
            Pantalla.textContent = "0";
            return;
        }

        // Borrar el último carácter
        if (boton.id === 'Borrar') { 
            if (Pantalla.textContent.length === 1 || Pantalla.textContent === 'ERROR') {
                Pantalla.textContent = '0';
            } else {
                Pantalla.textContent = Pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Calcular resultado solo si se presiona =
        if (boton.id === 'Igual') {
            try {
                Pantalla.textContent = eval(Pantalla.textContent);
            } catch {
                Pantalla.textContent = 'ERROR';
            }
            return; 
        }

        // Evitar que = se agregue a la pantalla
        if (Pantalla.textContent === '0' || Pantalla.textContent === 'ERROR') {
            Pantalla.textContent = botonApretado;
        } else {
            Pantalla.textContent += botonApretado;
        }
    });
});