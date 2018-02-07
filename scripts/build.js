/*const fse = require('fs-extra')
const path = require('path')
const ejs = require('ejs')
const pug = require('pug')
const liquid = require('liquidjs')
const hljs = require('highlight.js')
const { promisify } = require('util')
const markdownIt = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
 
    return '';
  }
});
const frontMatter = require('front-matter')
const globP = promisify(require('glob'))
const config = require('../site.config')

const ejsRenderFile = promisify(ejs.renderFile)
const distPath = './site'

// set ejs delimiter
ejs.delimiter = '?';

// clear destination folder
fse.emptyDirSync(distPath)

// copy static folder
fse.copy(`static`, `${distPath}`)

// read pages
globP('**.@(md|html)', { cwd: `content` })
  .then((files) => {
    files.forEach((file) => {
      const fileData = path.parse(file)
      const destPath = path.join(distPath, fileData.dir)

      // create destination directory
      fse.mkdirs(destPath)
        .then(() => {
          // read page file
          return fse.readFile(`content/${file}`, 'utf-8')
        })
        .then((data) => {
          // render page
          const pageData = frontMatter(data)
          const templateConfig = Object.assign({}, config, { page: pageData.attributes })
          let pageContent

          // generate page content according to file type
          switch (fileData.ext) {
            case '.md':
              pageContent = markdownIt.render(ejs.render(pageData.body, templateConfig))
              break
            default:
              pageContent = pug.render(ejs.render(pageData.body, templateConfig), templateConfig)
          }

          // render layout with page contents
          const layout = pageData.attributes.layout || 'default'

          return ejsRenderFile(`views/${layout}.ejs`, Object.assign({}, templateConfig, { content: pageContent }))
        })
        .then((str) => {
          // save the html file
          fse.writeFile(`${destPath}/${fileData.name}.html`, str)
      })
        .catch((err) => { console.error(err) })
    })
  })
  .catch((err) => { console.error(err) })
*/

const fse = require('fs-extra')
const path = require('path')
const pug = require('pug')
const liquid = require('liquidjs')
const hljs = require('highlight.js')
const { promisify } = require('util')
const markdownIt = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
 
    return '';
  }
});
const frontMatter = require('front-matter')
const globP = promisify(require('glob'))
const config = require('../site.config')

const liquidRenderFile = promisify(liquid.renderFile)
const distPath = './site'

// set ejs delimiter
ejs.delimiter = '?';

// clear destination folder
fse.emptyDirSync(distPath)

// copy static folder
fse.copy(`static`, `${distPath}`)

// read pages
globP('**/*.@(md|html)', { cwd: `content` })
  .then((files) => {
    files.forEach((file) => {
      const fileData = path.parse(file)
      const destPath = path.join(distPath, fileData.dir)

      // create destination directory
      fse.mkdirs(destPath)
        .then(() => {
          // read page file
          return fse.readFile(`content/${file}`, 'utf-8')
        })
        .then((data) => {
          // render page
          const pageData = frontMatter(data)
          const templateConfig = Object.assign({}, config, { page: pageData.attributes })
          let pageContent

          // generate page content according to file type
          switch (fileData.ext) {
            case '.md':
              pageContent = markdownIt.render(liquid.render(pageData.body, templateConfig))
              break
            default:
              pageContent = pug.render(liquid.render(pageData.body, templateConfig), templateConfig)
          }

          // render layout with page contents
          const layout = pageData.attributes.layout || 'default'

          return liquidRenderFile(`views/${layout}.html`, Object.assign({}, templateConfig, { content: pageContent }))
        })
        .then((str) => {
          // save the html file
          fse.writeFile(`${destPath}/${fileData.name}.html`, str)
      })
        .catch((err) => { console.error(err) })
    })
  })
  .catch((err) => { console.error(err) })
