import inquirer from "inquirer";
import fs from "fs-extra";

interface Answers {
    createTypescript: boolean;
    projectName?: string;
    installDeps?: boolean;
    devTools?: string[];
}

async function initProject() {
    const answers: Answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'createTypescript',
            default: false,
            message: "Create a Typescript Project?"
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'Project name:',
            default: 'typescript-app',
            validate: input => /^[a-zA-Z0-9-_]+$/.test(input) || 'Project name must be alphanumeric with hyphens or underscores',
            when: answers => answers.createTypescript,
        }]
    );

    const projectDir = `./${answers.projectName}`;
    console.log(`Creating typescript project: ${projectDir}`);
    fs.ensureDirSync(projectDir);

}

initProject().catch((error) => {
    console.log("Error", error)
    process.exit();
});
