/*
Implemente uma função "**procuraMinMax**" que receba como parâmetro um array (numérico) e identifique o **menor** e o **maior** valor do mesmo. 

Imprima no console estes valores ou **"Não é possível encontrar"** quando não for possível.

 Teste a função com as seguintes entradas:

 - [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
 - []
 - [1]
 - [1, -1]
 - null
 - [-2,-2,-2,-2] 
 - [20,10, 30]  

___

Obs.: Use let e const para declarar variáveis se for necessário.
Extra: Faça com uma arrow function.
*/

console.log('Exercício 01 - Semana 03 - Módulo 01')

function procuraMinMax(numeros) {
    if (!Array.isArray(numeros) || !numeros.length) {
        console.log('Não é possível encontrar!');
        return;
    } else {
        let min = numeros[0];
        let max = numeros[0];

        for (let i = 0; i < numeros.length; i++) {
            if(numeros[i] < min) {
                min = numeros[i];
            }
            if(numeros[i] > max) {
                max = numeros[i];
            }
        }
        console.log({ min, max });
    }
        
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);

