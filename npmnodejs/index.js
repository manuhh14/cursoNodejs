/*let start = new Date(2024, 00, 1); 
let end = new Date(2024, 00, 18);   

let miliSegundosDia = 24*60*60*1000;

let resultado = (end-start)/miliSegundosDia;

console.log(resultado);
*/
(async () => {
    const { timeDay } = await import('d3-time');

    let start = new Date(2024, 2, 1);  // Marzo (0 es enero)
    let end = new Date(2024, 3, 1);   // Abril (3 es abril)


    let resultado = timeDay.count(start, end); // Uso de d3.timeDay.count

    console.log('diferencia en días usando d3-time:'+resultado);  // Imprime la diferencia en días
})();
