process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    var datas = chunk.toString().split('\n');
    datas = splitArray(datas,/\s+/);
    datas = splitArray(datas,",");
    console.log(datas);
});

function splitArray(array, separator) {
    var datas = [];
    array.forEach(function(element){
        var splited_datas = element.toString().split(separator)
        splited_datas.forEach(function(splited_d){
            datas.push(splited_d);
        });
    });
    return datas;
}