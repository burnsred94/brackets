module.exports = function check(str, bracketsConfig) {
    let strArray = str.split(''),
        brackets = '';
    console.log(str);
    bracketsConfig = bracketsConfig.map(item => item = item.join(''));
    console.log(bracketsConfig);
    while (
        bracketsConfig.some((item, index) => {
            if (strArray.join('').includes(item)) brackets = item;
            return strArray.join('').includes(item);
        })) {
        strArray.splice(strArray.join('').indexOf(brackets), 2);
    };

    console.log(strArray.join(''));
    return strArray.join('') == '' ? true : false;
}
