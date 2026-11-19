// Converts notes.txt -> src/common/content.js  (run: node make-content.js)
const fs = require('fs')
const sub = { '₂': '2', '₄': '4' }
const raw = fs.readFileSync('notes.txt', 'utf8').replace(/[₂₄]/g, c => sub[c])
const out = []
let inTable = false
for (const line of raw.split('\n')) {
  if (!line.trim()) continue
  if (line.startsWith('## ')) { inTable = false; out.push({ t: 'h2', s: line.slice(3) }) }
  else if (line.startsWith('# ')) { inTable = false; out.push({ t: 'h1', s: line.slice(2) }) }
  else if (/^Phylum \| Key trait/.test(line)) { inTable = true }
  else if (inTable && line.includes(' | ') && line.split(' | ').length === 3) {
    const [a, b, c] = line.split(' | ')
    out.push({ t: 'tb', s: a })
    out.push({ t: 'ts', s: 'Trait: ' + b })
    out.push({ t: 'ts', s: 'Examples: ' + c })
  } else if (/^\s{2}/.test(line)) { out.push({ t: 'sub', s: line.trim() }) }
  else { inTable = false; out.push({ t: 'p', s: line.trim() }) }
}
fs.writeFileSync('src/common/content.js',
  '// AUTO-GENERATED from notes.txt by make-content.js\nexport default ' + JSON.stringify(out, null, 1) + '\n')
console.log(out.length + ' lines')
