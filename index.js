const { createHighlighter, bundledLanguages, bundledThemes } = require("shiki");

// all support language
// BundledLanguage = '1c' | '1c-query' | 'abap' | 'actionscript-3' | 'ada' | 'adoc' | 'angular-html' | 'angular-ts' | 'apache' | 'apex' | 'apl' | 'applescript' | 'ara' | 'asciidoc' | 'asm' | 'astro' | 'awk' | 'ballerina' | 'bash' | 'bat' | 'batch' | 'be' | 'beancount' | 'berry' | 'bibtex' | 'bicep' | 'blade' | 'bsl' | 'c' | 'c#' | 'c++' | 'cadence' | 'cairo' | 'cdc' | 'clarity' | 'clj' | 'clojure' | 'closure-templates' | 'cmake' | 'cmd' | 'cobol' | 'codeowners' | 'codeql' | 'coffee' | 'coffeescript' | 'common-lisp' | 'console' | 'coq' | 'cpp' | 'cql' | 'crystal' | 'cs' | 'csharp' | 'css' | 'csv' | 'cue' | 'cypher' | 'd' | 'dart' | 'dax' | 'desktop' | 'diff' | 'docker' | 'dockerfile' | 'dotenv' | 'dream-maker' | 'edge' | 'elisp' | 'elixir' | 'elm' | 'emacs-lisp' | 'erb' | 'erl' | 'erlang' | 'f' | 'f#' | 'f03' | 'f08' | 'f18' | 'f77' | 'f90' | 'f95' | 'fennel' | 'fish' | 'fluent' | 'for' | 'fortran-fixed-form' | 'fortran-free-form' | 'fs' | 'fsharp' | 'fsl' | 'ftl' | 'gdresource' | 'gdscript' | 'gdshader' | 'genie' | 'gherkin' | 'git-commit' | 'git-rebase' | 'gjs' | 'gleam' | 'glimmer-js' | 'glimmer-ts' | 'glsl' | 'gnuplot' | 'go' | 'gql' | 'graphql' | 'groovy' | 'gts' | 'hack' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'hbs' | 'hcl' | 'hjson' | 'hlsl' | 'hs' | 'html' | 'html-derivative' | 'http' | 'hxml' | 'hy' | 'imba' | 'ini' | 'jade' | 'java' | 'javascript' | 'jinja' | 'jison' | 'jl' | 'js' | 'json' | 'json5' | 'jsonc' | 'jsonl' | 'jsonnet' | 'jssm' | 'jsx' | 'julia' | 'kotlin' | 'kql' | 'kt' | 'kts' | 'kusto' | 'latex' | 'lean' | 'lean4' | 'less' | 'liquid' | 'lisp' | 'lit' | 'log' | 'logo' | 'lua' | 'luau' | 'make' | 'makefile' | 'markdown' | 'marko' | 'matlab' | 'md' | 'mdc' | 'mdx' | 'mediawiki' | 'mermaid' | 'mips' | 'mipsasm' | 'mmd' | 'mojo' | 'move' | 'nar' | 'narrat' | 'nextflow' | 'nf' | 'nginx' | 'nim' | 'nix' | 'nu' | 'nushell' | 'objc' | 'objective-c' | 'objective-cpp' | 'ocaml' | 'pascal' | 'perl' | 'perl6' | 'php' | 'plsql' | 'po' | 'polar' | 'postcss' | 'pot' | 'potx' | 'powerquery' | 'powershell' | 'prisma' | 'prolog' | 'properties' | 'proto' | 'protobuf' | 'ps' | 'ps1' | 'pug' | 'puppet' | 'purescript' | 'py' | 'python' | 'ql' | 'qml' | 'qmldir' | 'qss' | 'r' | 'racket' | 'raku' | 'razor' | 'rb' | 'reg' | 'regex' | 'regexp' | 'rel' | 'riscv' | 'rs' | 'rst' | 'ruby' | 'rust' | 'sas' | 'sass' | 'scala' | 'scheme' | 'scss' | 'sdbl' | 'sh' | 'shader' | 'shaderlab' | 'shell' | 'shellscript' | 'shellsession' | 'smalltalk' | 'solidity' | 'soy' | 'sparql' | 'spl' | 'splunk' | 'sql' | 'ssh-config' | 'stata' | 'styl' | 'stylus' | 'svelte' | 'swift' | 'system-verilog' | 'systemd' | 'talon' | 'talonscript' | 'tasl' | 'tcl' | 'templ' | 'terraform' | 'tex' | 'tf' | 'tfvars' | 'toml' | 'ts' | 'ts-tags' | 'tsp' | 'tsv' | 'tsx' | 'turtle' | 'twig' | 'typ' | 'typescript' | 'typespec' | 'typst' | 'v' | 'vala' | 'vb' | 'verilog' | 'vhdl' | 'vim' | 'viml' | 'vimscript' | 'vue' | 'vue-html' | 'vy' | 'vyper' | 'wasm' | 'wenyan' | 'wgsl' | 'wiki' | 'wikitext' | 'wl' | 'wolfram' | 'xml' | 'xsl' | 'yaml' | 'yml' | 'zenscript' | 'zig' | 'zsh' | '文言';
// all support theme
// BundledTheme = 'andromeeda' | 'aurora-x' | 'ayu-dark' | 'catppuccin-frappe' | 'catppuccin-latte' | 'catppuccin-macchiato' | 'catppuccin-mocha' | 'dark-plus' | 'dracula' | 'dracula-soft' | 'everforest-dark' | 'everforest-light' | 'github-dark' | 'github-dark-default' | 'github-dark-dimmed' | 'github-dark-high-contrast' | 'github-light' | 'github-light-default' | 'github-light-high-contrast' | 'houston' | 'kanagawa-dragon' | 'kanagawa-lotus' | 'kanagawa-wave' | 'laserwave' | 'light-plus' | 'material-theme' | 'material-theme-darker' | 'material-theme-lighter' | 'material-theme-ocean' | 'material-theme-palenight' | 'min-dark' | 'min-light' | 'monokai' | 'night-owl' | 'nord' | 'one-dark-pro' | 'one-light' | 'plastic' | 'poimandres' | 'red' | 'rose-pine' | 'rose-pine-dawn' | 'rose-pine-moon' | 'slack-dark' | 'slack-ochin' | 'snazzy-light' | 'solarized-dark' | 'solarized-light' | 'synthwave-84' | 'tokyo-night' | 'vesper' | 'vitesse-black' | 'vitesse-dark' | 'vitesse-light';

// load all languages and themes
async function initializeHighlighter() {
  try {
    const hl = await createHighlighter({
      themes: Object.keys(bundledThemes),
      langs: Object.keys(bundledLanguages),
    });
    return hl;
  } catch (err) {
    console.error("Failed to initialize Shiki highlighter:", err);
    return null;
  }
}

// read config
const config = hexo.config.shiki;
if (!config) return;

// read language_aliases
const language_aliases = new Map(Object.entries(config.language_aliases || {}));

const {
  theme,
  line_number,
  highlight_linenumber_toggle,
  highlight_wrap_toggle,
  highlight_lang,
  highlight_title,
  highlight_copy,
  highlight_raw,
  highlight_fullpage,
  highlight_height_limit,
  is_highlight_shrink,
  copy: { success, error, no_support } = {},
} = config;

// 在插件初始化时注册静态资源
// hexo.extend.filter.register('after_init', function () {
//   // 将插件的 source 目录注册为静态资源
//   hexo.route.set('code_block/code_block.js', 'source/code_block/code_block.js');
//   hexo.route.set('code_block/code_block.css', 'source/code_block/code_block.css');
// });


const path = require('path');
const fs = require('fs');
// 获取插件的根目录
const pluginDir = path.dirname(require.resolve('hexo-plugin-shiki'));
// 将插件的静态文件复制到 Hexo 的 source 目录
hexo.on('generateBefore', () => {
  const sourceDir = hexo.source_dir;
  const targetDir = path.join(sourceDir, 'code_block');
  // 确保目标目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }
  // 复制 CSS 文件
  const cssSourcePath = path.join(pluginDir, 'code_block', 'code_block.css');
  const cssTargetPath = path.join(targetDir, 'code_block.css');
  if (fs.existsSync(cssSourcePath)) {
    fs.copyFileSync(cssSourcePath, cssTargetPath);
  } else {
    hexo.log.error(`CSS file not found: ${cssSourcePath}`);
  }
  // 复制 JavaScript 文件
  const jsSourcePath = path.join(pluginDir, 'code_block', 'code_block.js');
  const jsTargetPath = path.join(targetDir, 'code_block.js');
  if (fs.existsSync(jsSourcePath)) {
    fs.copyFileSync(jsSourcePath, jsTargetPath);
  } else {
    hexo.log.error(`JavaScript file not found: ${jsSourcePath}`);
  }
});
// 注册 CSS 文件注入器
hexo.extend.injector.register('head_end', () => {
  const cssPath = path.join(hexo.config.root, 'code_block/code_block.css');
  return `<link rel="stylesheet" href="${cssPath}">`;
});
// 注册 JavaScript 文件注入器
hexo.extend.injector.register('body_end', () => {
  const jsPath = path.join(hexo.config.root, 'code_block/code_block.js');
  return `<script src="${jsPath}"></script>`;
});

if (config.highlight_height_limit) {
  hexo.extend.injector.register("head_end", () => {
    return `
    <style>
    .code-expand-btn:not(.expand-done) ~ div.codeblock,
    .code-expand-btn:not(.expand-done) ~ * div.codeblock {
      overflow: hidden;
      height: ${config.highlight_height_limit}px;
    }
    </style>
  `;
  });
}


hexo.extend.injector.register("body_end", () => {
  return `
  <script>
  const CODE_CONFIG = {
    highlightLineNumberToggle: ${highlight_linenumber_toggle},
    highlightWrapToggle: ${highlight_wrap_toggle},
    highlightLang: ${highlight_lang},
    highlightTitle: ${highlight_title},
    highlightCopy: ${highlight_copy},
    highlightRaw: ${highlight_raw},
    highlightFullPage: ${highlight_fullpage},
    isHighlightShrink: ${is_highlight_shrink},
    highlightHeightLimit: ${highlight_height_limit},
    copy: {
      success: '${success}',
      error: '${error}',
      noSupport: '${no_support}',
    }
  };
  </script>
  `;
});

initializeHighlighter().then((hl) => {
  if (!hl) return;

  // 获取当前主题
  const currentTheme = theme || "catppuccin-frappe"; // 默认主题
  const themeInfo = hl.getTheme(currentTheme);
  // console.log(themeInfo.type);

  // 将主题的所有变量注入到 CSS 的 :root 中
  hexo.extend.injector.register("head_end", () => {
    return `
      <style>
        :root {
          /* 基本颜色 */
          --hl-code-bg: ${themeInfo.bg};
          --hl-code-fg: ${themeInfo.fg};
          --hl-code-type: ${themeInfo.type};

          /* 主题名称 */
          --hl-code-name: ${themeInfo.name};
          --hl-code-display-name: ${themeInfo.displayName || "none"};

          /* 颜色替换 */
          ${themeInfo.colorReplacements
        ? Object.entries(themeInfo.colorReplacements)
          .map(
            ([key, value]) =>
              `--hl-code-color-${key.slice(1)}: ${value};`,
          )
          .join("\n")
        : ""
      }

          /* VS Code 颜色映射 */
          ${themeInfo.colors
        ? Object.entries(themeInfo.colors)
          .map(([key, value]) => `--hl-code-colors-${key}: ${value};`)
          .join("\n")
        : ""
      }

          /* 其他未使用的字段 */
          --hl-code-schema: ${themeInfo.$schema || "none"};
          --hl-code-semantic-highlighting: ${themeInfo.semanticHighlighting || "false"};
        }
      </style>
    `;
  });

  hexo.extend.filter.register("before_post_render", (post) => {
    const codeMatch =
      /(?<quote>[> ]*)(?<ul>(-|\d+\.)?)(?<start>\s*)(?<tick>~{3,}|`{3,}) *(?<lang>\S+)? *(?<title>.*?)\n(?<code>[\s\S]*?)\k<quote>\s*\k<tick>(?<end>\s*)$/gm;
    post.content = post.content.replace(codeMatch, (...argv) => {
      let { quote, ul, start, end, lang, title, code } = argv.pop();
      let result;
      const match = new RegExp(`^${quote.trimEnd()}`, "gm");
      code = code.replace(match, "");
      const arr = code.split("\n");
      let numbers = "";
      let pre = "";
      try {
        lang = lang || ""; // 如果没有语言，设置为空字符串
        title = title.trim(); // 去除标题前后的空格
        // console.log(title);
        // 将语言转换为小写并与用户定义的别名匹配
        const normalizedLang = lang.toLowerCase();
        const real_lang =
          language_aliases.get(normalizedLang) || normalizedLang;

        // 使用 Shiki 高亮代码
        pre = hl.codeToHtml(code, {
          lang: real_lang,
          theme: currentTheme, // 使用当前主题
        });

        // 移除 Shiki 生成的 <pre> 标签中的内联样式
        pre = pre.replace(/<pre[^>]*>/, (match) => {
          return match.replace(/\s*style\s*=\s*"[^"]*"\s*tabindex="0"/, "");
        });
      } catch (error) {
        console.warn(error);
        pre = `<pre><code>${code}</code></pre>`;
      }

      // 构建代码块 HTML
      result = `<figure class="shiki${lang ? ` ${lang}` : ""}" data_title="${title || ""}">`;
      result += "<div class='codeblock'>";
      // 生成 gutter 的逻辑
      {
        let numbers = '';
        for (let i = 0, len = arr.length; i < len; i++) {
          numbers += `<span class="line">${1 + i}</span><br>`;
        }
        // 根据 line_number 的值决定是否添加 disabled 类
        result += `<div class="gutter" style="${line_number ? '' : 'display: none;'}"><pre>${numbers}</pre></div>`;
      }

      result += `<div class="code">${pre}</div>`;
      result += "</div></figure>";

      return `${quote + ul + start
        }<hexoPostRenderCodeBlock>${result}</hexoPostRenderCodeBlock>${end}`;
    });
  });
});

