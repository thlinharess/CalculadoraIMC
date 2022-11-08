function calculaimc() {

  const height = (document.getElementById("height").value);
  const weight = document.getElementById("weight").value;

  const imc = (weight / height ** 2).toFixed(1);

  let text = "";

if (imc < 18.5) { 
  text =  `${imc} : Abaixo do Peso`
} else if (imc < 24.9) {
  text =  `${imc} : Peso normal`
} else if (imc < 29.9) {
  text =  `${imc} : Acima do peso`
} else if (imc < 34.9) {
  text =  `${imc} : Obesidade 1`
} else if (imc < 39.9) {
  text =  `${imc} : Obesidade 2 (severa)`
} else if (imc > 39.9) {
  text =  `${imc} : Obesidade 3 (mórbida)`
}


const result = document.getElementById("resultado").innerText = text;

}