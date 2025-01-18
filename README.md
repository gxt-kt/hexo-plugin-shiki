**[📖CN中文文档](https://github.com/gxt-kt/hexo-plugin-shiki/blob/master/README-CN.md)**

# ✨ Code Highlighting Plugin

This plugin provides a code highlighting feature for the Hexo blogging system based on [Shiki](https://shiki.style/). It supports various custom configurations and interactive features such as line number display, code folding, code copying, full-screen viewing, and more.

For all languages supported by Shiki, visit: [https://shiki.style/languages](https://shiki.style/languages)

For all themes supported by Shiki, visit: [https://shiki.matsu.io/themes#special-themes](https://shiki.matsu.io/themes#special-themes)

# 🌟 Preview

**Theme: one-dark-pro**  
![](./docs/one-dark-pro.png)  
---  
**Theme: catppuccin-frappe**  
![](./docs/catppuccin-frappe.png)  
---  
![](./docs/basic_demo.png)  
---  
![](./docs/toggle_linenumber_show.png)  
---  
![](./docs/toggle_code_wrap.png)  
---  

![](./docs/raw_code_viewer.png)  
---  
![](./docs/toggle_expand_code.png)  
---  
![](./docs/toggle_shrink_code.png)  

# 🛠️ Installation

Install the plugin:

```bash
npm install https://github.com/gxt-kt/hexo-plugin-shiki.git --save
```

# 📦 Configuration
Add the following settings to your _config.yml file:

> [!WARNING]
> To avoid conflicts with the native code highlighting plugin, please disable it.
> 
> ```yml
> highlight:
>   enable: false
> prismjs:
>   enable: false
> ```
> 
> For hexo>=7.0.0, add an additional line to leave syntax_highlighter empty, as shown below.
> 
> ```yml
> syntax_highlighter:
> ```

Add the following configuration:

```yml
shiki:
  theme: "one-dark-pro"
  line_number: true # whether to show the line number (if set to false, you can still toggle line number display using the highlight_linenumber_toggle button)
  highlight_linenumber_toggle: true # whether to show the line number toggle button
  highlight_wrap_toggle: true # whether to show the code wrap toggle button
  highlight_lang: true # whether to show the code language name
  highlight_title: true # whether to show the code block title
  highlight_copy: true # whether to show the copy button
  highlight_raw: true # whether to show the raw code view button
  highlight_fullpage: true # whether to show the full-page view button
  is_highlight_shrink: true # true: shrink the code blocks | false: expand the code blocks | null: expand code blocks and hide the button
  highlight_height_limit: 300 # code-block max height, unit: px
  copy: # copy message
    success: "Copy Success"
    error: "Copy Error"
    no_support: "Browser Not Support"
  language_aliases: # maps the code style to the corresponding name
    cc: "cpp"
    js: "javascript"
    py: "python"
```

| Configuration Key               | Example Value                                       | Description                                                                 |
| ------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------- |
| **`theme`**                     | `"one-dark-pro"`                                   | Sets the theme for code highlighting. Shiki supports multiple themes.       |
| **`line_number`**               | `true`                                             | Whether to display line numbers. If set to `false`, you can still toggle line numbers using the `highlight_linenumber_toggle` button. |
| **`highlight_linenumber_toggle`** | `true`                                             | Whether to show the line number toggle button.                              |
| **`highlight_wrap_toggle`**     | `true`                                             | Whether to show the code wrap toggle button.                                |
| **`highlight_lang`**            | `true`                                             | Whether to show the code language name.                                     |
| **`highlight_title`**           | `true`                                             | Whether to show the code block title.                                       |
| **`highlight_copy`**            | `true`                                             | Whether to show the copy button.                                            |
| **`highlight_raw`**             | `true`                                             | Whether to show the raw code view button.                                   |
| **`highlight_fullpage`**        | `true`                                             | Whether to show the full-page view button.                                  |
| **`is_highlight_shrink`**       | `true`                                             | Controls the default folding state of code blocks:<br> - `true`: Fold code blocks by default.<br> - `false`: Expand code blocks by default.<br> - `null`: Expand code blocks and hide the fold button. |
| **`highlight_height_limit`**    | `300`                                              | The maximum height of the code block in pixels (`px`). Code blocks exceeding this height will display an expand button. |
| **`copy.success`**              | `"Copy Success"`                                   | Message displayed when copying is successful.                               |
| **`copy.error`**                | `"Copy Error"`                                     | Message displayed when copying fails.                                       |
| **`copy.no_support`**           | `"Browser Not Support"`                            | Message displayed when the browser does not support copying.                |
| **`language_aliases`**          | `cc: "cpp"`<br>`js: "javascript"`<br>`py: "python"` | Maps code language aliases. For example, `cc` will be mapped to `cpp`.      |

---

# 🚀 References
- [https://github.com/nova1751/hexo-shiki-plugin](https://github.com/nova1751/hexo-shiki-plugin)
- [https://github.com/HPCesia/hexo-highlighter-shiki](https://github.com/HPCesia/hexo-highlighter-shiki)
