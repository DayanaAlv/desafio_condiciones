  function calcularTotal() {
            // Obtener los valores de los inputs
            let caja1 = parseInt(document.getElementById('caja1').value) || 0;
            let caja2 = parseInt(document.getElementById('caja2').value) || 0;
            let caja3 = parseInt(document.getElementById('caja3').value) || 0;

            // Calcular la suma total
            let total = caja1 + caja2 + caja3;

            // Mostrar el resultado según la suma total
            let resultado = document.getElementById('resultado');
            if (total <= 10) {
                resultado.textContent = `Llevas ${total} stickers.`;
            } else {
                resultado.textContent = `Llevas demasiados stickers.`;
            }
        }
       