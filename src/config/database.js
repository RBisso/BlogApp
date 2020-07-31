const credentials = require('./credentials');

module.exports = {
    database : `mongodb+srv://${credentials.user}:${credentials.pswd}@cluster0-fhvvm.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    port : 9090
}