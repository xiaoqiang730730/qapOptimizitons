var t = require('babel-types');

var pluginName = 'babel-plugin-transform-apis';
var apiList = require('../src/config/apiList2');

module.exports = function() {
    return {
        visitor: {
            CallExpression: function (path, state) {
                if(t.isMemberExpression(path.node.callee)) {
                    if(path.node.callee.property.name != 'request') {
                        return;
                    }
                }else if(path.node.callee.name != 'request') {
                    return;
                }

                let obj = path.node.arguments[0];
                let pathArg = path.node.arguments;
                // let arg = [...path.node.argument];

                if(obj) {

                    let pros = obj.properties;

                    let apiPro;

                    let hasApio = false;

                    pros.forEach(val=> {

                        if(val.key.name == 'api' || val.key.value == 'api') {
                            apiPro = val;
                        }

                        if(val.key.name == 'apio') {
                            hasApio = true;
                        }

                    });

                    if(hasApio) {
                        return;
                    }
                    
                    if(!apiPro) {
                        return;
                    }

                    if(!t.isStringLiteral(apiPro.value)) {
                        // console.log(apiPro.key);
                        // console.log('api 值 不支持对象');
                        throw path.buildCodeFrameError("api 值只 支持 字符串");
                        // return;
                    }

                    let param = apiList[apiPro.value.value];

                    if(!param) {
                        throw path.buildCodeFrameError("apiList 不存在 " + apiPro.value.value);
                    }

                    let node  = t.valueToNode(apiList[apiPro.value.value]);

                    pros.push(t.objectProperty(t.identifier("apio"), node));

                }
            }
        }
    }
}
