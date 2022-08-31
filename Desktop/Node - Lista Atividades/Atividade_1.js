let readline = require('readline');

let sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

for (let i = 0; i < 10; i++) {
    sc.question("Qual vai ser o " + i + " número?\n", ans => {
        console.log("\nSua resposta " + ans + " foi grava com sucesso numa variável inútil");
    });
    i++;
    if (i == 10) {
    sc.close();
    }
}