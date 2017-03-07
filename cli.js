#!/usr/bin/env node

// Dependencies
const filesystem = require('fs')

const languages = {
  python: {
    open_multiline_comment: '\"\"\"',
    close_multiline_comment: '\"\"\"',
    extension: 'py'
  },
  java: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'java'
  }
}

let question = process.argv[2]
let language = process.argv[3]
let problems = []


filesystem.readFile(__dirname + '/data/project_euler.text', 'utf-8', (error, data) => {

  error ? console.error(error) :
  
  problems = data.match(/Problem(.|\n)*?Answer:\s.+/gm)
  createFile(question, problems[question - 1], languages[language])

})


function createFile(question, problem, language) {

  // Create a new file at peX.py
  let stream = filesystem.createWriteStream(`pe${question}.${language.extension}`)

  // Write out problem content to file
  stream.once('open', () => {

    stream.write(language.open_multiline_comment)

    stream.write('\n')
    stream.write(problem)
    stream.write('\n\n')
    
    stream.write(language.close_multiline_comment)
    stream.end()

  })

  console.log(`\n${problem}\n`)
  console.log(`File created at pe${question}.${language.extension}`)

}