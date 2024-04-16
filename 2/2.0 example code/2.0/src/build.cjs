require('esbuild').build({
    entryPoints: ['App.jsx'],
    bundle: true,
    outfile: 'out.js',
    loader: { '.js': 'jsx' }
  }).catch(() => process.exit(1))