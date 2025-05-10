import inquirer from "inquirer"

async function initProject() {
    const answers = inquirer.prompt([
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

}
initProject().catch((error) => {
    console.log(error)
})
