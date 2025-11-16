import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student API',
      version: '1.0.0',
      description: 'API REST para gestionar estudiantes. Documentación realizada con Swagger.',
      contact: {
        name: 'API Support',
        url: 'http://localhost:3000',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Student: {
          type: 'object',
          required: ['id', 'name'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID único del estudiante',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Nombre del estudiante',
              example: 'Juan Pérez',
            },
          },
        },
        StudentInput: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              description: 'Nombre del estudiante',
              example: 'Juan Pérez',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Mensaje de error',
            },
          },
        },
      },
    },
  },
  apis: ['./src/controllers/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
