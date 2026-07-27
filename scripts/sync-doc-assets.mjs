import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 截图的事实源是仓库根的 assets/，校验脚本按该路径检查存在性。
// VitePress 只从 docs/public/ 提供静态文件，因此构建与预览前把 assets/ 同步过去。
// docs/public/screenshots 与 docs/public/logo.png 是派生产物，已在 .gitignore 中忽略。
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.join(root, 'assets')
const target = path.join(root, 'docs/public')

if (!fs.existsSync(source)) {
  process.stdout.write('assets/ 不存在，跳过同步\n')
  process.exit(0)
}

const screenshotSource = path.join(source, 'screenshots')
const screenshotTarget = path.join(target, 'screenshots')

fs.rmSync(screenshotTarget, { recursive: true, force: true })
if (fs.existsSync(screenshotSource)) {
  fs.cpSync(screenshotSource, screenshotTarget, { recursive: true })
}

const logoSource = path.join(source, 'logo.png')
if (fs.existsSync(logoSource)) {
  fs.copyFileSync(logoSource, path.join(target, 'logo.png'))
}

const count = fs.existsSync(screenshotTarget) ? fs.readdirSync(screenshotTarget).length : 0
process.stdout.write(`已同步 ${count} 张截图到 docs/public/screenshots\n`)
