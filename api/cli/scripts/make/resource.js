const fs = require('fs');
const path = require('path');

const input = process.argv[2];

if (!input) {
  console.error('❌ Resource name is required');
  console.log('Example: npm run Resource:make User');
  process.exit(1);
}

// support subfolder: auth/User
const parts = input.split('/');
const name = parts.pop();
const folders = parts;

const className = `${name}Resource`;
const fileName = `${name.toLowerCase()}.resource.js`;

const baseDir = path.join(
  __dirname,
  '../../../src/http/resources',
  ...folders
);

const filePath = path.join(baseDir, fileName);
const templatePath = path.join(__dirname, '../../templates/resource.stub');

// create folder if not exists
fs.mkdirSync(baseDir, { recursive: true });

// prevent overwrite
if (fs.existsSync(filePath)) {
  console.error('❌ Resource already exists');
  process.exit(1);
}

// read template
let template = fs.readFileSync(templatePath, 'utf8');
template = template.replace(/{{name}}/g, name);

// write file
fs.writeFileSync(filePath, template);

console.log(`✅ Resource created: ${filePath}`);
