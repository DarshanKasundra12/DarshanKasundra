const fs = require('fs');
const path = require('path');

const targetDir = 'd:/My Certificates/Portfolio/skill-sync-folio/src';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace bg-white dark:bg-gray-900, dark:bg-gray-800, etc. with bg-black
      let newContent = content
        .replace(/bg-white\s+dark:bg-gray-[89]00/g, 'bg-black')
        .replace(/bg-gray-50\s+dark:bg-gray-[89]00/g, 'bg-black')
        .replace(/dark:bg-gray-[89]00/g, 'dark:bg-black')
        .replace(/dark:bg-zinc-[89]00/g, 'dark:bg-black')
        .replace(/bg-white/g, 'bg-black') // We want extreme contrast black/white theme
        // Revert bg-black turning text invisible if it was meant to be purely black background
        .replace(/text-gray-900\s+dark:text-white/g, 'text-white')
        .replace(/text-gray-[78]00\s+dark:text-gray-300/g, 'text-zinc-300')
        .replace(/text-gray-[56]00\s+dark:text-gray-400/g, 'text-zinc-400')
        .replace(/bg-gray-100\s+dark:bg-gray-800/g, 'bg-zinc-900')
        .replace(/bg-gray-200/g, 'bg-zinc-800');

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated backgrounds in ${fullPath}`);
      }
    }
  }
}

processDirectory(targetDir);
console.log('Done blackening backgrounds.');
