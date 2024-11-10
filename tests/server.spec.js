// PRUEBA TESTING
const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  // REQUERIMIENTO 1
  // Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.
  it("para GET/cafes devuelve un status code 200 con un arreglo con al menos 1 objeto", async () => {
    const response = await request(server).get("/cafes").send(); // solicitud GET a la ruta /cafes
    expect(response.statusCode).toBe(200); // verificar que el codigo sea 200
    expect(response.body).toBeInstanceOf(Array); // verificar que la respuesta sea un arreglo
    expect(response.body.length).toBeGreaterThan(0); // verificar que el arreglo tenga al menos un elemento, estrictamente mayor que 0
  });

  // REQUERIMIENTO 2
  // Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe.
  it("Al intentar eliminar un café con un id que no existe se devuelve un código 404", async () => {
    const jwt = "token";
    const nonExistentId = 77; // un id que no existe
    const response = await request(server) // solicitud DELETE a la ruta /cafes/:id con el id que no existe
      .delete(`/cafes/${nonExistentId}`)  // ruta para eliminar el id que no existe
      .set("Authorization", jwt)  // para la autorizacion con token
      .send();
    expect(response.statusCode).toBe(404); // verificar que el codigo sea 404
  });

  // REQUERIMIENTO 3
  // Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201
  it("En ruta POST/cafes agrega un nuevo café y debe devolver el código 201", async () => {
    const id = Math.floor(Math.random() * 999);
    const newCafe = { id, nombre: "Cubano" };
    const response = await request(server) // realiza la solicitud POST al servidor
      .post("/cafes")  //solicitud POST a la ruta /cafes
      .send(newCafe);  // se envia un objeto newCafe con los datos del nuevo cafe
    expect(response.statusCode).toBe(201); // verificar que el codigo sea 201
    expect(response.body).toContainEqual(newCafe); // verificar que el cafe creado esté en el arreglo, con las mismas propiedades de newCafe
  });

  // REQUERIMIENTO 4
  // Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload
  it("En ruta PUT/cafes si se intenta actualizar un cafe enviando un id en los parametros diferente al id dentro del  payload se devuelve un status code 400", async () => {
    const cafeToUpdate = { id: 4, nombre: "Cappuccino" }; // cafe para actualizar
    const invalidId = 6; // el id no coincide con el id del payload
    const response = await request(server) // solicitud PUT con el id invalido en los parametros
      .put(`/cafes/${invalidId}`)  // solicitud PUT a la ruta /cafes/{id}
      .send(cafeToUpdate);  // se envia el objeto con los datos que se intenta actualizar
    expect(response.statusCode).toBe(400); // verificar que el codigo sea 400
  });
});
