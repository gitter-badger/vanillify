const fse = require('fs-extra')
const path = require('path')
const ejs = require('ejs')
const pug = require('pug')
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
globP('**.@(md|markdown|html|pug)', { cwd: `content` })
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
          let ejsRenderMD = ejs.render(pageData.body, templateConfig)
          const templateConfig = Object.assign({}, config, { page: pageData.attributes })
          let pageContent

          // generate page content according to file type
          switch (fileData.ext) {
            case '.md':
              pageContent = markdownIt.render(ejsRenderMD)
              break
            case '.markdown':
              pageContent = markdownIt.render(ejsRenderMD)
              break
            case '.pug':
              pageContent = pug.render(ejs.render(pageData.body, templateConfig), templateConfig)
            default:
              pageContent = ejs.render(pageData.body, templateConfig)
          }

          // render layout with page contents
          const layout = pageData.attributes.layout || 'default'

          return ejsRenderFile(`views/${layout}.html`, Object.assign({}, templateConfig, { content: pageContent }))
        })
        .then((str) => {
          // save the html file
          fse.writeFile(`${destPath}/${fileData.name}.html`, str)
      })
        .catch((err) => { console.error(err) })
    })
  })
  .catch((err) => { console.error(err) })
