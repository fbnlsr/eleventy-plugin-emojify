# eleventy-plugin-emojify

This plugin for [11ty](https://11ty.dev) adds an `emojify` filter to your templates, allowing you to use emoji markup inside them. It is inspired by the same filter found in [Hugo](https://gohugo.io).

Its only dependency is `emojibase-data` from [Emojibase](https://emojibase.dev/) to serve as its data source.

## Installation

`npm install --save fbnlsr/eleventy-plugin-emojify`

In your `.eleventy.js` file, add the plugin:

```js
// .eleventy.js
const emojifyPlugin = require('eleventy-plugin-emojify');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(emojifyPlugin);
}
```

## Usage

Simply add the `emojify` filter to any content, like so: `{{ content | emojify | safe }}`

This will transform this:

```
**Made with :heart:, some :robot: and Eleventy!**
```

To this:

```html
<strong>Made with ❤️, some 🤖 and Eleventy!<strong>
```

The supported shortcode list is based on [Emojibase shortcode curated list](https://emojibase.dev/docs/shortcodes#emojibase) and might differ from platform to platform.
