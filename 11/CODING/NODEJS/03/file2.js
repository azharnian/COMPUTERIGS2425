const fs = require('fs');

// writing files
fs.writeFile('blog.txt', 'hello, world', () => {
    console.log('file was written');
});
  
fs.writeFile('blog2.txt', 'hello, again', () => {
    console.log('file was written');
});

// reading files
fs.readFile('blog.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
});

// creating directory
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', err => {
        if (err) {
        console.log(err);
        }
        console.log('folder created');
    });
} else {
    // deleting directory
    fs.rmdir('./assets', err => {
        if (err) {
        console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('deleteme.txt')) {
    fs.unlink('deleteme.txt', err => {
        if (err) {
        console.log(err);
        }
        console.log('file deleted');
    });
}
