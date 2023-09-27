var primeraVariable= "Declarada fuera del bloque";
function miFuncion() {
    var primeraVariable="Declarada dentro de la función con el mismo nombre";
    return 0; //se llama igual pero solo existe dentro de la función
}
Console.log(primeraVariable)