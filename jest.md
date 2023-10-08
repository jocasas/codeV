# [JEST] para [servidor] express
Tienes que tener instalado JEST para poder ocuparlo.
## Correr test dentro de ./server/__test__/
Puedes correr el siguiente comando desde el nivel proyecto
```js
npx jest
```
Tambien puedes correr el siguiente comando dentro de /server que ejecuta el mismo script pero solo en la carpeta
```js
npm test
```
### Si quieres definir mas pruebas o cambiar parametros ocupa el jest.config.js
#### No pescar, [Dependencias extras] - jose pablo
    - supertest /server/node_modules/
    - jest 
##### Mover todo lo que sea prod test.env o si no queda la caga