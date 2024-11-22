const { exec } = require('child_process');

function generateRandomCode() {
    const codes = [
        'console.log("Hello, World!");',
        'let x = Math.random();',
        'const fs = require("fs"); fs.writeFileSync("test.txt", "Hello!");'
        // Diğer rastgele kod parçaları...
    ];
    return codes[Math.floor(Math.random() * codes.length)];
}

function runCode(code) {
    return new Promise((resolve, reject) => {
        exec(`node -e "${code}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                resolve(false); // Hayatta kalamadı
            } else {
                console.log(`Output: ${stdout}`);
                resolve(true); // Hayatta kaldı
            }
        });
    });
}

function combineCodes(code1, code2) {
    return `${code1}\n${code2}`;
}

async function evolvePopulation(populationSize, generations) {
    let generation = 0;
    let population = Array.from({ length: populationSize }, generateRandomCode);
    
    while (generation < generations) { // Belirli jenerasyon sayısı
        let newPopulation = [];
        
        for (let i = 0; i < populationSize; i += 2) {
            const parent1 = population[i];
            const parent2 = population[i + 1];
            
            const childCode = combineCodes(parent1, parent2);
            
            if (await runCode(childCode)) {
                newPopulation.push(childCode);
            }
        }
        
        population = newPopulation;
        generation++;
        console.log(`Generation ${generation} completed.`);
    }
}

const populationSize = 10;
const generations = 100;

evolvePopulation(populationSize, generations);
