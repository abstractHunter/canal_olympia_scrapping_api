import path from 'path';
import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: '',      // by default: '1.0.0'
        title: 'Canal Olympia Scrapping REST API',        // by default: 'REST API'
        description: '',  // by default: ''
    },
    host: '157.230.241.85:3000',      // by default: 'localhost:3000'
    basePath: '/',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: '',         // Tag name
            description: '',  // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {},  // by default: empty object
    definitions: {},          // by default: empty object (Swagger 2.0)
    components: {}
} // update doc

const outputFile = './docs/swagger-output.json';

const endpointsFiles = [
    path.join(__dirname, 'app.ts'),
];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);