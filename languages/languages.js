const languages = {
  python: {
    open_multiline_comment: '\"\"\"',
    close_multiline_comment: '\"\"\"',
    extension: 'py',
    command: 'py'
  },
  java: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'java',
    command: 'java'
  },
  javascript: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'js',
    command: 'node',
  },
  php: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'php',
    command: 'php',
  }
}

module.exports = languages