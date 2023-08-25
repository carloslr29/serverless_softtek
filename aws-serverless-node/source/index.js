require('dotenv').config();
const { getEmpleado, getEmpleados, insertEmpleado} = require('./controllers/empleado.controller');
const { getPersona, getPersonas} = require('./controllers/persona.controller');

module.exports =
  {
    getPersona: getPersona,
    getPersonas: getPersonas,
    getEmpleado: getEmpleado,
    getEmpleados: getEmpleados,
    insertEmpleado: insertEmpleado
  };