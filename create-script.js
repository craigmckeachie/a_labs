let versionPrefix = "a14";
let directoryName = `${versionPrefix}_demos`;
let rootDirectory = `~/Documents/git/${versionPrefix}`;
const destinationDirectory = `${rootDirectory}/${directoryName}`;

const introductionLabs = [
  "lab01",
  "lab02",
  "lab03",
  "lab04",
  "lab05",
  "lab06",
  "lab07",
  "lab08",
  "lab09",
  "lab10",
  "lab11",
  "lab12",
  "lab13",
  "lab14",
  "lab15",
  "lab16",
  "lab17",
  "lab18",
  "lab19",
  "lab20",
  "lab21",
  "lab22",
  "lab23",
  "lab24",
  "lab25",
  "lab26",
  "lab27",
  "lab28",
  "lab29",
];

const advancedLabs = [
  "lab30",
  "lab31",
  "lab32",
  "unit-lab00",
  "unit-lab01",
  "unit-lab02",
  "unit-lab03",
  "unit-lab04",
  "unit-lab05",
  "unit-lab06",
];

branches = [...introductionLabs, ...advancedLabs];

let scripts = [];
scripts.push(
  `#!/bin/bash
`
);

let counter = 0;
branches.forEach((b) => {
  counter++;

  scripts.push(`
  cp -r ~/Documents/git/a14/a_labs/${b}/* ~/Documents/git/a14/a14_labs/
  cd ~/Documents/git/a14/a14_labs/
  git checkout -b ${b}
  git add .
  git commit -m "${b}"
  git push --set-upstream origin ${b}

    `);
});

scripts.push(`
cd ~/Documents/git/a14/a_labs/
  `);

script = scripts.join("");

//Write script file
let fs = require("fs");
let fileName = "generated-script.sh";
fs.writeFile(fileName, script, function (err, data) {
  if (err) console.log(err);
  console.log(`Successfully wrote script file to: ${fileName}`);
});
