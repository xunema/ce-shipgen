import { writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pkg = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8'))

const versionInfo = {
  version: pkg.version,
  buildTimestamp: new Date().toISOString(),
  channel: process.env.RELEASE_CHANNEL || 'stable',
  changelog: [
    'M2.6: Version display in Settings',
    'User-controlled PWA updates (not forced)',
    'Update Available indicator on startup and header',
    'Offline-aware update detection'
  ],
  minimumCompatibleVersion: '0.2.5'
}

writeFileSync(
  join(__dirname, '../public/version.json'),
  JSON.stringify(versionInfo, null, 2)
)

console.log(`version.json written: ${versionInfo.version} @ ${versionInfo.buildTimestamp}`)
