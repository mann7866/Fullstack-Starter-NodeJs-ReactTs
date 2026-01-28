const fs = require('fs');
const path = require('path');

const input = process.argv[2];

if (!input) {
  console.error('❌ Model name is required');
  console.log('Example: npm run Model:make User');
  process.exit(1);
}

// support subfolder: auth/User
const parts = input.split('/');
const name = parts.pop();
const folders = parts;

const className = `${name}Model`;
const fileName = `${name.toLowerCase()}.model.js`;

const baseDir = path.join(
  __dirname,
  '../../../src/models',
  ...folders
);

const filePath = path.join(baseDir, fileName);
const templatePath = path.join(__dirname, '../../templates/model.stub');

// create folder if not exists
fs.mkdirSync(baseDir, { recursive: true });

// prevent overwrite
if (fs.existsSync(filePath)) {
  console.error('❌ Model already exists');
  process.exit(1);
}

// read template
let template = fs.readFileSync(templatePath, 'utf8');
template = template.replace(/{{name}}/g, name);

// write file
fs.writeFileSync(filePath, template);

console.log(`✅ Model created: ${filePath}`);
