const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQuard(a, b, c);
document.write('a =' + a + '<br>', 'b =' + b + '<br>', 'c =' + c);
document.write('<br>' + result);

function calcDisc(a, b, c) {
    return b * b - 4 * a * c;
}

function solveQuard(a, b, c) {
    const d = calcDisc(a, b, c);
    let x1;
    let x2;
    if (d < 0) {
        return 'Не вирішено';
    }
    else if (d === 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'x1 =' + x1 + 'x2 =' + x2;
    }
    else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'x1 =' + x1 + '<br>' + 'x2 =' + x2;
    }
}

