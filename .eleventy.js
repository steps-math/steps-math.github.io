const markdownIt = require('markdown-it');
const markdownItKatex = require('@traptitech/markdown-it-katex');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
  // Add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Configure Markdown with KaTeX for math support
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItKatex, {
    "throwOnError": false,
    "errorColor": "#cc0000"
  });
  
  eleventyConfig.setLibrary('md', markdownLib);

  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/images');

  // Create collections for different content types
  eleventyConfig.addCollection('topics', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/topics/*.md');
  });

  eleventyConfig.addCollection('exercises', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/exercises/*.md');
  });

  eleventyConfig.addCollection('labs', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/labs/*.md');
  });

  // Add date filter
  eleventyConfig.addFilter('dateFormat', function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};