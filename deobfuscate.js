const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const JS_DIR = path.join(__dirname, 'js');
const OUT_DIR = path.join(__dirname, 'js_decompiled');

async function beautifyFile(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await minify(code, {
      mangle: false,
      compress: false,
      format: {
        beautify: true,
        comments: true,
        indent_level: 2,
        max_line_len: 120,
        braces: {
          after_function: true,
          arrow: true,
          if: true,
          try: true,
        },
      },
      sourceMap: {
        filename: path.basename(filePath),
        url: path.basename(filePath) + '.map',
      },
      module: true,
      ecma: 2020,
      keep_fnames: true,
      keep_fnames: true,
    });

    const outName = path.basename(filePath);
    const outPath = path.join(OUT_DIR, outName);
    fs.writeFileSync(outPath, result.code);

    if (result.map) {
      fs.writeFileSync(outPath + '.map', result.map);
    }

    return { name: outName, originalSize: code.length, outSize: result.code.length };
  } catch (e) {
    console.log('Failed to beautify', path.basename(filePath), ':', e.message);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(JS_DIR).filter(f => f.endsWith('.js'));
  console.log('Found ' + files.length + ' JS files to deobfuscate.');

  const results = [];
  for (const file of files) {
    const result = await beautifyFile(path.join(JS_DIR, file));
    if (result) {
      results.push(result);
      console.log('Processed:', result.name, '- original:', result.originalSize, 'bytes -> beautified:', result.outSize, 'bytes');
    }
  }

  console.log('\n=== Summary ===');
  console.log('Total files processed:', results.length);
  console.log('Total original size:', results.reduce((s, r) => s + r.originalSize, 0), 'bytes');
  console.log('Total beautified size:', results.reduce((s, r) => s + r.outSize, 0), 'bytes');

  // Save file list
  fs.writeFileSync(
    path.join(OUT_DIR, '_file_list.json'),
    JSON.stringify(results.map(r => r.name), null, 2)
  );
}

main().catch(console.error);
