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
  html: {
    open_multiline_comment: '<!--',
    close_multiline_comment: '-->',
    extension: 'html',
    command: 'node',
  },
  cpp: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'cpp',
    command: 'gcc',
  },
  c: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'c',
    command: 'gcc',
  },
  swift: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'swift',
    command: 'swift',
  },
  php: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'php',
    command: 'php',
  },
  swift: {
     open_multiline_comment: '/*',
     close_multiline_comment: '*/',
     extension: 'swift',
     command: 'swift',
  },
  c: {
     open_multiline_comment: '/*',
     close_multiline_comment: '*/',
     extension: 'c',
     command: 'c',
  },
  ruby: {
    open_multiline_comment: '=begin',
    close_multiline_comment: '=end',
    extension: '.rb',
    command: 'ruby',
  },
  clojure: {
    open_multiline_comment: '(comment)',
    close_multiline_comment: ')',
    extension: 'clj',
    command: 'clojure',
  },
  css: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'css',
    command: 'node',
  },
  go: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'go',
    command: 'go',
  },
  haskell: {
    open_multiline_comment: '{-|',
    close_multiline_comment: '-}',
    extension: 'hs',
    command: 'haskell',
  },
  json: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'json',
    command: 'node',
  },
  csharp: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'cs',
    command: 'c#',
  },
  ocaml: {
    open_multiline_comment: '(*',
    close_multiline_comment: '*)',
    extension: 'ml',
    command: 'ocaml',
  },
  pascal: {
    open_multiline_comment: '(*',
    close_multiline_comment: '*)',
    extension: 'lpr',
    command: 'pascal',
  },
  pascal: {
    open_multiline_comment: '(*',
    close_multiline_comment: '*)',
    extension: 'pp',
    command: 'pascal',
  },
  perl6: {
    open_multiline_comment: '#`[',
    close_multiline_comment: ']',
    extension: 'p6',
    command: 'perl6',
  },
  scala: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'sc',
    command: 'scala',
  },
  sml: {
    open_multiline_comment: '(*',
    close_multiline_comment: '*)',
    extension: 'sml',
    command: 'sml',
  },
  wolfram: {
    open_multiline_comment: '(*',
    close_multiline_comment: '*)',
    extension: 'm',
    command: 'wolfram',
  },
  "c#": {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'cs',
    command: 'start',
  },
  kotlin: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'kt',
    command: 'kotlinc',
  }
}

module.exports = languages
