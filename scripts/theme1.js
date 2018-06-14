function findRutes(a, b, c) {
    let D = b * b - 4 * a * c;
    if (D < 0) {
        console.log('No rutes');
        return;
    }
    let x1 = -b + Math.sqrt(D);
    x1 /= 2 * a;

    let x2 = -b - Math.sqrt(D);
    x2 /= 2 * a;

    console.log(`Rutes are:  ${x1} and  ${x2}`)
}

function isSimple(a) {
    if (a <= 1) { console.log(false); return; }
    if (a === 2) { console.log(true); return; }
    if (a % 2 === 0) { console.log(false); return; }

    for (let i = 3; i < Math.sqrt(a); i++) {
        if (a % i == 0) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

function findS(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += 1 / i;
    }
    console.log(result);
}

function reverseNumber(number) {
    console.log(parseInt((String(number).split("").reverse().join(""))));
}