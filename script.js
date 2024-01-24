// script.js

function calcularSueldoNeto() {
    const sueldoBruto = parseFloat(document.getElementById("sueldoBruto").value);
  
    if (!isNaN(sueldoBruto)) {
      // Porcentajes de descuento
      const porcentajeJubilacion = 11;
      const porcentajeObraSocial = 3;
      const porcentajeLey19032 = 3;
  
      // Mínimo no imponible para aplicar la tabla
      const minimoNoImponible = 1250000;
  
      // Inicializar descuentos
      let descuentoJubilacion = 0;
      let descuentoObraSocial = 0;
      let descuentoLey19032 = 0;
      let descuentoGanancias = 0;
  
      // Verificar si se aplica la tabla de ganancias
      if (sueldoBruto > minimoNoImponible) {
        // Tabla de ganancias
        const tablaGanancias = [
          { limiteSuperior: 908587.88, porcentaje: 5, valorFijo: 0 },
          { limiteSuperior: 1817175.81, porcentaje: 9, valorFijo: 45429.39 },
          { limiteSuperior: 2725763.68, porcentaje: 12, valorFijo: 127202.30 },
          { limiteSuperior: 3634351.67, porcentaje: 15, valorFijo: 236232.87 },
          { limiteSuperior: 5451527.37, porcentaje: 19, valorFijo: 372521.16 },
          { limiteSuperior: 7268703.12, porcentaje: 23, valorFijo: 717784.51 },
          { limiteSuperior: 10903054.63, porcentaje: 27, valorFijo: 1135734.94 },
          { limiteSuperior: 14537406.50, porcentaje: 31, valorFijo: 2117009.74 },
          { limiteSuperior: Infinity, porcentaje: 35, valorFijo: 3243658.88 }
        ];
  
        // Encontrar el rango en la tabla
        const rango = tablaGanancias.find(rango => sueldoBruto <= rango.limiteSuperior || rango.limiteSuperior === Infinity);
  
        // Calcular impuesto sobre el excedente después del mínimo no imponible
        // Calcular impuesto sobre el excedente después del mínimo no imponible
        descuentoGanancias = (sueldoBruto * (rango.porcentaje / 100)) + rango.valorFijo;
      }
  
      // Calcular descuentos específicos
      descuentoJubilacion = sueldoBruto * (porcentajeJubilacion / 100);
      descuentoObraSocial = sueldoBruto * (porcentajeObraSocial / 100);
      descuentoLey19032 = sueldoBruto * (porcentajeLey19032 / 100);
  
      // Calcular impuestos totales (sin aplicar el 17% de ganancias)
      const impuestosTotales = descuentoJubilacion + descuentoObraSocial + descuentoLey19032 + descuentoGanancias;
  
      // Calcular sueldo neto
      const sueldoNeto = sueldoBruto - impuestosTotales;
  
      // Mostrar resultados detallados
      document.getElementById("detalleJubilacion").innerHTML = `Jubilación - ${porcentajeJubilacion}%: $${descuentoJubilacion.toFixed(2)}`;
      document.getElementById("detalleObraSocial").innerHTML = `Obra Social - ${porcentajeObraSocial}%: $${descuentoObraSocial.toFixed(2)}`;
      document.getElementById("detalleLey19032").innerHTML = `Ley 19032 - ${porcentajeLey19032}%: $${descuentoLey19032.toFixed(2)}`;
      document.getElementById("detalleGanancias").innerHTML = `Impuesto a las Ganancias: $${descuentoGanancias.toFixed(2)}`;
      document.getElementById("impuestosTotales").innerHTML = `Impuestos Totales: $${impuestosTotales.toFixed(2)}`;
  
      // Mostrar sueldo neto final
      document.getElementById("sueldoNeto").innerHTML = `<h2>Sueldo Neto: $${sueldoNeto.toFixed(2)}</h2>`;
    } else {
      alert("Ingrese un sueldo bruto válido.");
    }
  }
  