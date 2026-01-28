const fs = require('fs');
const path = require('path');

const input = process.argv[2];

if (!input) {
  console.error('❌ Service name is required');
  console.log('Example: npm run Service:make User');
  process.exit(1);
}

// support subfolder: auth/User
const parts = input.split('/');
const name = parts.pop();
const folders = parts;

const className = `${name}Service`;
const fileName = `${name.toLowerCase()}.service.js`;

const baseDir = path.join(
  __dirname,
  '../../../src/http/services',
  ...folders
);

const filePath = path.join(baseDir, fileName);
const templatePath = path.join(__dirname, '../../templates/service.stub');

// create folder if not exists
fs.mkdirSync(baseDir, { recursive: true });

// prevent overwrite
if (fs.existsSync(filePath)) {
  console.error('❌ Service already exists');
  process.exit(1);
}

// read template
let template = fs.readFileSync(templatePath, 'utf8');
template = template.replace(/{{name}}/g, name);

// write file
fs.writeFileSync(filePath, template);

console.log(`✅ Service created: ${filePath}`);
