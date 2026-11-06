import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint for Cloud Run container probes
app.get('/healthz', (_req, res) => {
  res.status(200).send('OK');
});

const distPath = path.join(__dirname, 'dist');

// Serve static assets from Vite build
app.use(express.static(distPath));

// Serve subpath if configured for GitHub Actions repo name
app.use('/Cafe-De-Central-1881-', express.static(distPath));

// SPA fallback for client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Cafe De Central 1881 server active on port ${PORT}`);
});
