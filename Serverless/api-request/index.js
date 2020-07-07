const axios = require("axios");

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

// Para publicar las funciones usa el siguiente comando. El nombre debe ser igual en el deploy que en el código
// gcloud functions deploy nombre_funcion --runtime entorno_ejecucion --triger -http

// Ejemplo:
// gcloud functions deploy firstTest --runtime nodejs10 --trigger-http
