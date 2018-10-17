var template = require('../../lang/language.json');

exports.getdocData = function (data,lang) {
    var {contactSection} = require('../../lang/language.json');
    var temp = contactSection[lang]
    return applyTemplate(temp,data);
}
function applyTemplate(template, backing) {
    for (var i in template) {
        var m = getPlaceholders(template[i]);
        if (m && backing[m[0]]) {
            if(m.length>1){
                for(var j in m){
                    template[i] = template[i].replace("${","").replace("}","").replace(m[j], backing[m[j]]);
                }
            } else {
                template[i] = JSON.parse(JSON.stringify(backing[m[0]]));
            }
        } else if (template[i] && "object" == typeof template[i]) {
            applyTemplate(template[i], backing);
        }
    }
    return template;
}

function getPlaceholders(str){
    var regex = /\$\{(\w+)\}/g;
    var result = [];
    while (match = regex.exec(str)) {
        result.push(match[1]);
    }
    return result;
}