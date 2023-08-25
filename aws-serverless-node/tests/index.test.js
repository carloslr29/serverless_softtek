'use strict';

const oIndex = require('../source/index');

describe('Validando Lambda Function getPersona', () => {
    test('Undefined Id Persona', async () => {
        const oIdx = await oIndex.getPersona({"pathParameters": {"id": undefined}});
        expect(oIdx.statusCode).toBe(404);
    });

    test('Vacio Id Persona', async () => {
        const oIdx = await oIndex.getPersona({"pathParameters": {"id": ""}});
        expect(oIdx.statusCode).toBe(404);
    });

    test('Null Id Persona', async () => {
        const oIdx = await oIndex.getPersona({"pathParameters": {"id": null}});
        expect(oIdx.statusCode).toBe(404);
    });

    test('Con Id Persona', async () => {
        const oIdx = await oIndex.getPersona({"pathParameters": {"id": 1}});
        expect(oIdx.statusCode).toBe(200);
    });
});

describe('Validando Registro Empleado', () => {
    const oEmpleado = {
        body: 
            {
                nombre: "Maria",
                dni: "14785236",
                telefono: "96852478",
                direccion: "Av Arequipa"
            }
    }
    test('Undefined Nombre Empleado', async () => {
        let copyEmpleado = Object.assign({}, oEmpleado)
        copyEmpleado.body.nombre = undefined
        let body = copyEmpleado.body
        copyEmpleado.body = JSON.stringify({body})
        const oIdx = await oIndex.insertEmpleado(copyEmpleado);
        expect(oIdx.statusCode).toBe(404);
    });

    test('Vacio Nombre Empleado', async () => {
        let copyEmpleado = Object.assign({}, oEmpleado)
        copyEmpleado.body.nombre = ""
        let body = copyEmpleado.body
        copyEmpleado.body = JSON.stringify({body})
        const oIdx = await oIndex.insertEmpleado(copyEmpleado);
        expect(oIdx.statusCode).toBe(404);
    });

    test('Null Nombre Empleado', async () => {
        let copyEmpleado = Object.assign({}, oEmpleado)
        copyEmpleado.body.nombre = null
        let body = copyEmpleado.body
        copyEmpleado.body = JSON.stringify({body})
        const oIdx = await oIndex.insertEmpleado(copyEmpleado);
        expect(oIdx.statusCode).toBe(404);
    });
    test('Con Catch en registro', async () => {
        let copyEmpleado = Object.assign({}, oEmpleado)
        let body = copyEmpleado.body
        copyEmpleado.body = JSON.stringify({body})
        const oIdx = await oIndex.insertEmpleado(oEmpleado);
        expect(oIdx.statusCode).toBe(500)
    });
});