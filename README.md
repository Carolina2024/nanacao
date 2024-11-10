# Prueba - Cafetería Nanacao

## Programado por

#### **Carolina Castillo**

## Descripción

 La Cafetería Nanacao está abriendo una nueva sucursal en el centro de la ciudad después de tener un gran éxito en su local principal.
 Su dueña, Julieta Nanacao, ha solicitado luego de varios fallos repentinos en su sistema de administración, que se desarrollen tests para comprobar que todas la funcionalidades funcionen correctamente.
 En este desafío deberás crear tests para probar las diferentes rutas existentes en la API REST de apoyo.

## Requerimientos

1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.
2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe.
3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.
