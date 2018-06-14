function divideArray(array) {
    let B = [];
    let C = [];
    array.forEach(element => {
        if (element > 0) B.push(element);
        if (element < 0) C.push(element);
    });

    console.log(
    `
    Array B: ${B}
    Array C: ${C}
    `)
}

function calculateRepeats(array) {
    let map = {};

    array.forEach((element => {
        map[element] = !!map[element] ? map[element] + 1 : 1;
    }))

    for (key in map) {
        console.log(`${key} - ${map[key]}\n`)
    }
}

function isAnagramms(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}