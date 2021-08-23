const generateApiKey = require('generate-api-key');
class Generate{
    Generatekey(){
        const key = generateApiKey({ method: 'base32', dashes: false });
        return key;
    }
}

module.exports= Generate;