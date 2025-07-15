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
  eleventyConfig.addPassthroughCopy('src/syllabus/*.pdf');
  eleventyConfig.addPassthroughCopy('src/notes/*.pdf');

  // Create collections for different content types
  eleventyConfig.addCollection('topics', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/notes/*.md');
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

  // Answer Checker Shortcodes
  eleventyConfig.addShortcode('answer', function(id, type = 'text', placeholder = '', hint = '') {
    const inputType = type === 'numeric' ? 'number' : 'text';
    const inputClass = type === 'numeric' ? 'answer-input numeric' : 'answer-input';
    
    let html = `
    <div class="answer-input-group">
      <input type="${inputType}" id="${id}" class="${inputClass}" placeholder="${placeholder}">
      <button class="check-button" onclick="checkAnswer('${id}', 'CORRECT_ANSWER', '${type}')">Check</button>`;
    
    if (hint) {
      html += `
      <button class="hint-button" onclick="toggleHint('hint-${id}')">Hint</button>`;
    }
    
    html += `
      <div id="feedback-${id}" class="answer-feedback"></div>
    </div>`;
    
    if (hint) {
      html += `
    <div id="hint-${id}" class="hint-content">
      <p>${hint}</p>
    </div>`;
    }
    
    return html;
  });

  eleventyConfig.addShortcode('answerNumeric', function(id, correctAnswer, placeholder = '', hint = '') {
    let html = `
    <div class="answer-input-group">
      <input type="number" id="${id}" class="answer-input numeric" placeholder="${placeholder}">
      <button class="check-button" onclick="checkAnswer('${id}', ${correctAnswer}, 'numeric', {tolerance: 0.001})">Check</button>`;
    
    if (hint) {
      html += `
      <button class="hint-button" onclick="toggleHint('hint-${id}')">Hint</button>`;
    }
    
    html += `
      <div id="feedback-${id}" class="answer-feedback"></div>
    </div>`;
    
    if (hint) {
      html += `
    <div id="hint-${id}" class="hint-content">
      <p>${hint}</p>
    </div>`;
    }
    
    return html;
  });

  eleventyConfig.addShortcode('answerText', function(id, correctAnswer, placeholder = '', hint = '') {
    let html = `
    <div class="answer-input-group">
      <input type="text" id="${id}" class="answer-input" placeholder="${placeholder}">
      <button class="check-button" onclick="checkAnswer('${id}', '${correctAnswer}', 'text')">Check</button>`;
    
    if (hint) {
      html += `
      <button class="hint-button" onclick="toggleHint('hint-${id}')">Hint</button>`;
    }
    
    html += `
      <div id="feedback-${id}" class="answer-feedback"></div>
    </div>`;
    
    if (hint) {
      html += `
    <div id="hint-${id}" class="hint-content">
      <p>${hint}</p>
    </div>`;
    }
    
    return html;
  });

  eleventyConfig.addShortcode('multipleChoice', function(questionName, options, correctAnswer) {
    // Handle options as a string that we'll parse
    let optionsArray;
    if (typeof options === 'string') {
      // Parse the string format: ["option1", "option2", "option3"]
      optionsArray = JSON.parse(options.replace(/'/g, '"'));
    } else {
      optionsArray = options;
    }
    
    let html = `
    <div class="multiple-choice-options" id="multiple-choice-${questionName}">`;
    
    optionsArray.forEach((option, index) => {
      const value = String.fromCharCode(97 + index); // a, b, c, d...
      html += `
      <label class="multiple-choice-option">
        <input type="radio" name="${questionName}" value="${value}">
        <span>${String.fromCharCode(65 + index)}) ${option}</span>
      </label>`;
    });
    
    html += `
      <button class="check-button" onclick="checkMultipleChoice('${questionName}', '${correctAnswer}')">Check Answer</button>
      <div id="feedback-${questionName}" class="answer-feedback"></div>
    </div>`;
    
    return html;
  });

  eleventyConfig.addPairedShortcode('answerChecker', function(content) {
    return `
    <div class="answer-checker">
      ${content}
    </div>`;
  });

  eleventyConfig.addShortcode('exercise', function(number, title, content) {
    return `
    <p><span class="exercise-number">${number}</span></p>
    <h2>${title}</h2>
    ${content}`;
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