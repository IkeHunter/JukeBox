// const swaggerAutogen = require('swagger-autogen')()
const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const outputFile = './swagger_output.json'
// const endpointsFiles = ['./controllers/main.controller.js', './controllers/spotify.controller.js']
const endpointsFiles = ['./routes/routes.js','./controllers/main.controller.js', './controllers/authentication.controller.js', './controllers/spotify.controller.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Jukebox API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Base",
            "description": "General endpoints"
        },
        {
            "name": "Authentication",
            "description": "Used to login to Spotify"
        },
        {
            "name": "Spotify",
            "description": "Communicate with Spotify"
        }
    ],
    components: {
        securitySchemes: {
            Bearer: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                in: 'header',
            }
        }
    },
    security: [{
        Bearer: []
    }],
    definitions: {
        SpotifyTokenExpired: {
            status: 401,
            message: "Spotify access token expired",
            login: "http://localhost:3000/login"
        },
        SpotifyAuthSuccess: {
            success: true,
            access_token: '[access_token]',
            refresh_token: '[refresh_token]',
            home: 'root'
        },
        SpotifyTestResponse: {
            external_urls : {
                spotify : "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
            },
            followers : {
                href : null,
                total : 9888997
            },
            genres : [ "dance pop", "miami hip hop", "pop", "pop rap" ],
            href : "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            id : "0TnOYISbd1XYRBk9myaseg",
            images : [ {
                height : 640,
                url : "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea",
                width : 640
            }, {
                height : 320,
                url : "https://i.scdn.co/image/ab67616100005174fc9d2abc85b6f4bef77f80ea",
                width : 320
            }, {
                height : 160,
                url : "https://i.scdn.co/image/ab6761610000f178fc9d2abc85b6f4bef77f80ea",
                width : 160
            } ],
            name : "Pitbull",
            popularity : 85,
            type : "artist",
            uri : "spotify:artist:0TnOYISbd1XYRBk9myaseg"
        },

    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js');
})
