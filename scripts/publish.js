const simpleGit = require('simple-git')
const tar = require('tar')
const { execSync } = require('child_process')
const { join } = require('path')
const {
  rm, readdir, writeFile,
} = require('fs/promises')
const { repository: { url: remoteUrl }, version } = require('../package.json')

// 刪除給定路徑下的文件，可遞迴刪除
const rmRf = (p) => rm(p, {
  force: true,
  recursive: true,
}).catch(() => {
  console.log(p)
})

const packageNameList = [
  '@frontend-config/eslint-config-basic',
  '@frontend-config/eslint-config-ts',
  '@frontend-config/eslint-config-vue3',
]

async function publishSinglePackage ({
  packageRootPath,
}) {
  // 組成路徑 scripts/.././packages/eslint/basic
  const packagePath = join(__dirname, '..', packageRootPath)
  execSync(`cd ${packagePath} && pnpm pack`)
  let tarballPath = (await readdir(packagePath))
    .find((name) => name.endsWith('.tgz')) || null

  if (!tarballPath) {
    throw new Error('tarball not found')
  }

  tarballPath = join(packagePath, tarballPath)
  await tar.x({
    file: tarballPath,
    cwd: packagePath,
  })

  // const extractedPackagePath = join(packagePath, 'package')

  const pkgJsonPath = join(packagePath, 'package.json')
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const pkgJson = require(pkgJsonPath)

  packageNameList.forEach((packageName) => {
    if (pkgJson.dependencies[packageName]) {
      pkgJson.dependencies[packageName] = `github:andylou0102/frontend-config#${packageName.replace('@frontend-config/', '')}@${version}`
    }
  })

  await writeFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2))
  const tagName = `${pkgJson.name.replace('@frontend-config/', '')}@${version}`

  const git = simpleGit(packagePath)
  await git
    .init()
    .add('.')
    .commit('publish')
    .addTag(tagName)
    .push(remoteUrl, tagName, { '-f': true })
    .catch((error) => {
      console.error(error.message)
    })

  await rmRf(tarballPath)
  await rmRf(packagePath)
}

const packageRootPathList = [
  './packages/eslint/basic',
  './packages/eslint/ts',
  './packages/eslint/vue3',
]

async function publishAll () {
  for (const packageRootPath of packageRootPathList) {
    await publishSinglePackage({
      packageRootPath,
    })
  }
}

publishAll()
