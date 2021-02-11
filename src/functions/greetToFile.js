const fs = require('fs');

fs.writeFile('message.js', `hello,${name}!`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });