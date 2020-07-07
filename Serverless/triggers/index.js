// Son el tipo de acción que desencadena la llamada a una función de G Cloud

// Según el runtime, las funciones de segundo plano reciben:
// 1. Python - Argumentos data y context
// 2. Node - Argumentos data, context y callback

// Según el runtime, las funciones HTTP reciben:
// 1. Python - Argumento Request de Flask
// 2. Node - Argumentos Request and Response de ExpressJS

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 * @return To Do list
 */
exports.firstTest = async (req, res) => {
  try {
    const ID = req.query.id || 1;
    const RES = await axios(`https://jsonplaceholder.typicode.com/todos/${ID}`);
    res.status(200).send(RES.data);
  } catch (e) {
    res.status(500).send("Error");
  }
};
