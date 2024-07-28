

//====================
//Chat_GPT 4 recommended :)
//====================



//------
// Pachages needed
//------

const fs = require('fs');
const yaml = require('js-yaml');


// Variables
// import filePath from '../resources/delphi-select-v2-swagger.yaml'

const filePath = '../resources/delphi-select-v2-swagger.yaml';
const schemaName = 'desiredSchemaName';


// Function to read the YAML file
function readYamlFile(filePath) {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return yaml.load(fileContents);
    } catch (e) {
        console.log(e);
        return null;
    }
}

// Function to find the description for a given schema name
function findSchemaDescription(yamlData, schemaName) {
    // Assuming the schema structure is an array of objects
    if (Array.isArray(yamlData)) {
        for (const schema of yamlData) {
            if (schema.name === schemaName) {
                return schema.description || 'Description not found';
            }
        }
    } else {
        console.log('YAML data is not an array');
    }
    return 'Schema not found';
}

const yamlData = readYamlFile(filePath);

if (yamlData) {
    const description = findSchemaDescription(yamlData, schemaName);
    console.log(`Description for schema '${schemaName}': ${description}`);
    }
