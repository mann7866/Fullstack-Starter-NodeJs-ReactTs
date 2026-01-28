const fs = require('fs');
const path = require('path');

const input = process.argv[2];

if (!input) {
  console.error('❌ Contract name is required');
  console.log('Example: npm run contract:make User');
  process.exit(1);
}

// support auth/User
const parts = input.split('/');
const name = parts.pop();
const folders = parts;

// paths
const repoDir = path.join(
  __dirname,
  '../../../src/contracts/repositories',
  ...folders
);

const rulesDir = path.join(
  __dirname,
  '../../../src/contracts/guards/rules',
  ...folders
);

const repoFile = path.join(
  repoDir,
  `${name.toLowerCase()}.repository.js`
);

const rulesFile = path.join(
  rulesDir,
  `${name.toLowerCase()}.rule.js`
);

// templates
const repoTemplatePath = path.join(
  __dirname,
  '../../templates/repo-rule.stub'
);

const rulesTemplatePath = path.join(
  __dirname,
  '../../templates/rules.stub'
);

// create folders
fs.mkdirSync(repoDir, { recursive: true });
fs.mkdirSync(rulesDir, { recursive: true });

// prevent overwrite
if (fs.existsSync(repoFile) || fs.existsSync(rulesFile)) {
  console.error('❌ Repository or Rules already exists');
  process.exit(1);
}

// write repository
let repoTemplate = fs.readFileSync(repoTemplatePath, 'utf8');
repoTemplate = repoTemplate.replace(/{{name}}/g, name);
fs.writeFileSync(repoFile, repoTemplate);

// write rules
let rulesTemplate = fs.readFileSync(rulesTemplatePath, 'utf8');
rulesTemplate = rulesTemplate.replace(/{{name}}/g, name);
fs.writeFileSync(rulesFile, rulesTemplate);

console.log('✅ Contract created successfully');
console.log(`📄 Repository: ${repoFile}`);
console.log(`📄 Rules:      ${rulesFile}`);
