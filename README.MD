# Codeverse (PLACEHOLDER)
doc.v1

Codeverse (PLACEHOLDER) es un proyecto que busca consolidar el desarrollo profesional y la conexion entre personas en una plataforma web.   
## Table of Contents

- [Coding Standards](#coding-standards)
  - [Legacy Code](#legacy-code)
  - [File Naming](#file-naming)
  - [Variable Naming](#variable-naming)
  - [Indentation](#indentation)
  - [Commenting](#commenting)
- [Contributing](#contributing)
- [License](#license)

## Coding Standards
Se deben seguir los siguientes tres principios. 

Primero todo lo nombrable va al 'ingles' y los nombres en consecuencia deben tener una razon logica. Los comentarios pueden estar al espaniol pero deben seguir de igual forma el patron JSDOC descrito abajo.

Segundo codigo reutilizable, independiente del paradigma que ocupen si se realiza una funcion o procedimiento que es repetitivo, este no debe ser repetido sino abstraido y reutilizado ya sea en su propia estructura dentro del archivo o en un archivo aparte que sea para esto.

Tercero los commits no deben ser hechos directo a la rama master sino a una rama hija y posteriormente ser integrada por merge, pull o rebase.

### Legacy Code
El codigo que ya no cumple ningun fin debe ser removido de la base del codigo funcional a la que pertenece, por tanto no se puede dejar comentado las 3 primeras iteraciones en las que solucionaron el problema si la numero 4 ya lo soluciona por si sola.

En este aspecto ese tipo de codigo se puede guardar en un archivo aparte dentro del proyecto al cual no se tiene acceso por parte de componentes funcionales del sistema.

### File Naming
Se utiliza camelCase. Recordar se empieza la cadena en minuscula y toda palabra que se adhiere a la cadena se coloca primero con mayuscula, repetir y seguir.

- Usar camelCase para archivos: `myFile.js`, `myComponent.tsx`, `myUtilityFunction.py`.
  - Ejemplo JavaScript/TypeScript: `myExampleFile.js`

Se debe nombrar los archivos con nomenclatura significativa a su proposito y tomar en consideracion si lo que mostrara es algo plurar `pageUsers` o es algo individual `pageUser`.

- `pageUser.jsx`,`pageUserProfile.jsx`
- `userPage.jsx`,`userSettingsPage.jsx`
- `middleware.js` , `databaseMiddleware.js`

### Variable and Function Naming
Se utiliza camelCase tambien.

Se utilizan nombres descriptivos ***para las funciones***, l o importante es entender que hace.

- `doCompilation`,`doTable`
- `setProblemResult`,`setUserMailInformation`
- `getUserCredentials`,`getUserInformation`


Se utilizan nombres significativos y descriptivos, lo importante es saber que guarda esta ***variable***.

- camelCase for variable names: `problemOutput`, `listSize`, `colocoloData`.


### Indentation
Se recomienda que todos utilizen Prettier Formatter.
Esto con la intencion de que exista consistencia en el formato.

- ***Espacios***, tabsize 4.
- ***Bracket*** debe estar en la misma linea.
```javascript
// Correcto formato
if (condition) {
  // code
}

//!!!Incorrecto formato!!!
if (condition)
{
  // code
}
```
Todo el resto es fairgame.

### Commenting
Los comentarios deben ser usados para explicar logica compleja, aquellas funcionalidades que no son obvias o bien "tricky".

Se debe utilizar el siguiente formaato ***JSDoc-style comments***.
"for documenting functions and their parameters.
  ```javascript
  /**
   * Calculate the sum of two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The sum of the two numbers.
   */
  function add(a, b) {
    return a + b;
  }

  ```

### Contributing
UNDEFINED
### License
UNDEFINED