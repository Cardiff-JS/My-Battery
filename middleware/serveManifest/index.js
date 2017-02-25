import manifest from './manifest.json';

const serveManifest = (req, res) => {
  res.send(manifest);
  res.end();
};

export default serveManifest;