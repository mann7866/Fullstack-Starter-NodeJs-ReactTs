require('dotenv').config(); // HARUS PALING ATAS

const app = require('./app');

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
