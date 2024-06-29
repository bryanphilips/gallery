var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://philips:root@moringa0.0to2jfw.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://philips:root@moringa0.0to2jfw.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://philips:root@moringa0.0to2jfw.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    
}
module.exports = config;
