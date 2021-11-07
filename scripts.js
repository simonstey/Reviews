

function createLines(pages, lines) {
    let entry = ""
    for (j = 1; j <= pages; j++) {
        for (i = 1; i <= lines; i++) {
            entry += `[p.${j}, left, ${i}]: \n`
        }
        for (i = 1; i <= lines; i++) {
            entry += `[p.${j}, right, ${i}]: \n`
        }
    }
    return entry;
}
console.log(createLines(20, 51))