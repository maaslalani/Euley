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
  csharp: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'cs',
    command: 'start',
  },
  kotlin: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'kt',
    command: 'kotlinc'
  }
}

module.exports = languages
