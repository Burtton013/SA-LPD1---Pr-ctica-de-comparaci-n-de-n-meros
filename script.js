        let numero1 = parseFloat(prompt("Ingrese el primer número:"));
        let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
        let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

        
        if (numero1 === numero2 && numero2 === numero3) {
            console.log("Los tres números son iguales.");
        } else {
            let mayor = Math.max(numero1, numero2, numero3);
            let menor = Math.min(numero1, numero2, numero3);
            let centro = (numero1 + numero2 + numero3) - mayor - menor;
            console.log("Ordenados de mayor a menor:", mayor, centro, menor);
            console.log("Ordenados de menor a mayor:", menor, centro, mayor);
        }