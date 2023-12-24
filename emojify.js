const emojis = require('emojibase-data/en/compact.json');
const shortcodes = require('emojibase-data/en/shortcodes/emojibase.json');

module.exports = function eleventyPluginEmojify(eleventyConfig) {
  eleventyConfig.addFilter('emojify', function (content) {
    const contentShortcodes = content.match(/:[\d+_A-Z-]+:/gi);

    if (contentShortcodes !== null) {
      const filteredShortcodes = [...new Set(contentShortcodes)];

      filteredShortcodes.forEach((contentShortcode) => {
        const strippedShortcode = contentShortcode.replaceAll(':', '');

        for (const [key, value] of Object.entries(shortcodes)) {
          if (
            (Array.isArray(value) && value.includes(strippedShortcode)) ||
            strippedShortcode == value
          ) {
            emojis.forEach((emoji) => {
              if (emoji.hexcode == key) {
                content = content.replaceAll(contentShortcode, emoji.unicode);
              }
            });
            break;
          }
        }
      });
    }

    return content;
  });
};
