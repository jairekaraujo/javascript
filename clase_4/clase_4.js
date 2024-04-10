/*se requiere:
    1.- Saber cuántos caracteres tiene la frase
    2.- Saber cuántas letras tiene la frase
    3.- Saber cuántas palabras tiene la frase
    4.- Obtener la misma frase pero en mayúsculas
    5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"*/

    const phrase = "La mejor forma de predecir el futuro es creándolo"

    
     const text = phrase.length
        console.log(text)

    const letra = phrase.replace(/[" "]/g,"").length
        console.log(letra)

    const palabra = phrase.split(" ").length
        console.log(palabra)

    const mayusculas = phrase.toUpperCase()
        console.log(mayusculas)

    const change = phrase.replace('a' ,'4')
    console.log(change)
    
    
    
    