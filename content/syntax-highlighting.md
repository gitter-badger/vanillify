Luxaura.js comes with syntax highlighting for Markdown files. Here are some examples:

HTML (this page)
````html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Luxaura.js</title>
<meta name="description" content="A simple static site generator">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">

</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Luxaura.js</h1>
    <p class="lead">A simple static site generator</p>
    <a class="button button-primary" href="syntax-highlighting.html">Syntax Highlighting</a>
  </div>
</div>

<p>Luxaura.js comes with syntax highlighting for Markdown files. Here are some examples:</p>
<p>HTML</p>
<pre><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>testing<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, world!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>Markdown</p>
<pre><code class="language-markdown"><span class="hljs-section"># hello, there!</span>
<span class="hljs-strong">**bold**</span>
<span class="hljs-emphasis">*italic*</span>
<span class="hljs-section">## h2</span>
</code></pre>
<p>YAML</p>
<pre><code class="language-yaml"><span class="hljs-attr">title:</span> <span class="hljs-string">your</span> <span class="hljs-string">awesome</span> <span class="hljs-string">title</span>
</code></pre>
<p>JavaScript</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> abc = <span class="hljs-string">"xyz"</span>
<span class="hljs-built_in">console</span>.log(abc);
</code></pre>

<script src="/js/jquery-3.3.1.slim.min.js"></script>
<script src="/js/popper.js"></script>
<script src="/js/bootstrap.min.js"></script>

</body>
</html>
````
Markdown
````markdown
# hello, there!
**bold**
*italic*
## h2
````
YAML
````yaml
title: your awesome title
````
JavaScript
````javascript
var abc = "xyz"
console.log(abc);
````
