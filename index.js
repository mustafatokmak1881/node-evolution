const { exec } = require("child_process");

function generateRandomCode() {
  const codes = [
    "console.log(3)",
    "console.log(4)",
    // Diğer rastgele kod parçaları...
  ];
  return codes[Math.floor(Math.random() * codes.length)];
}

function runCode(code) {
  return new Promise((resolve, reject) => {
    code = code.split("undefined").join("");
    console.log({ code });
    exec(`node -e "${code}"`, (error, stdout, stderr) => {
      if (stdout) {
        console.log({ code });
        console.log(`stdout: ${stdout}`);
        resolve({ status: true, stdout, code }); // Hayatta kaldı
      } else {
        //console.error(`Error: ${stderr}`);
        resolve({ status: false }); // Hayatta kalamadı
      }
    });
  });
}

function combineCodes(code1, code2) {
  return `${code1}${code2}`;
}

async function evolvePopulation(populationSize, generations) {
  let generation = 0;
  let population = Array.from({ length: populationSize }, generateRandomCode);

  while (generation < generations) {
    // Belirli jenerasyon sayısı
    let newPopulation = [];

    for (let i = 0; i < populationSize; i += 2) {
      const parent1 = population[i];
      const parent2 = population[i + 1];

      const childCode = combineCodes(parent1, parent2);
      const runCodeResult = await runCode(childCode);
      console.log({ runCodeResult });

      if (runCodeResult.status) {
        console.log({
          runCodeResult,
          typeof: typeof runCodeResult,
          childCode,
          typeofChildCode: typeof childCode,
        });
        return false;

        newPopulation.push(childCode);
      }
    }

    population = newPopulation;
    generation++;
    console.log(`Generation ${generation} completed.with.`);
  }
}

const populationSize = 3;
const generations = 100;

evolvePopulation(populationSize, generations);
