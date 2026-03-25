const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../d:/My Certificates/Portfolio/skill-sync-folio/src');
// Since the path might be tricky to join, let's just use the absolute path directly.

const targetDir = 'd:/My Certificates/Portfolio/skill-sync-folio/src';

const colorMap = {
  'blue': 'zinc',
  'purple': 'zinc',
  'pink': 'zinc',
  'yellow': 'zinc',
  'green': 'zinc',
  'indigo': 'zinc',
  'red': 'zinc',
  'cyan': 'zinc',
  'teal': 'zinc',
  'emerald': 'zinc',
  'rose': 'zinc',
  'fuchsia': 'zinc',
  'violet': 'zinc',
  'slate': 'zinc',
  'gray': 'zinc',
  'neutral': 'zinc',
  'stone': 'zinc'
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace tailwind color classes like text-blue-500, bg-purple-600, etc.
      // But only the standard ones. We can use a regex.
      // E.g. (text|bg|border|ring|from|via|to|hover:text|hover:bg|focus:ring)-(blue|purple|pink|...)-(\d{2,3})
      // Actually, a simpler regex is just /(blue|purple|pink|yellow|green|indigo|red|cyan|teal|emerald|rose|fuchsia|violet)-([0-9]{2,3})/g
      // and replace with zinc-$2
      
      const regex = /\b(blue|purple|pink|yellow|green|indigo|red|cyan|teal|emerald|rose|fuchsia|violet)-([0-9]{2,3})\b/g;
      
      let newContent = content.replace(regex, (match, p1, p2) => {
        return `zinc-${p2}`;
      });
      
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(targetDir);
console.log('Done replacing colors.');
