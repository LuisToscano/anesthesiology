export const argumentsRegex = /%\([A-z]*\)/;
export const anythingRegex = /.*/; 

export const truncateDecimal : (num, amount) => number = (num, amount) => {
    let a = (num + '').split('.');
    let truncated = '';
    if (a.length > 1) {
        truncated = '.' + a[1].substr(0, amount);
    }
    return parseFloat(a[0] + truncated);
}