var fs = require('fs');
var babel = require('babel-core');
var moriscript = require('./index');

fs.readFile('example.js', function(err, data) {

    if(err) {
        throw err;
    }

    var src = data.toString();

    var out = babel.transform(src, {
        plugins: [moriscript]
    });

    
    fs.writeFileSync('out.js', out.code);

})
