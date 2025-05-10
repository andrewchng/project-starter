import inquirer from "inquirer"

async function initProject() {
    const answers = inquirer.prompt([
        {
            type: 'confirm',
            name: 'createTypescriptProject',
            default: false,
            message: "Create a Typescript Project?"
        }
    ])
}

initProject().catch((error) => {
    console.log(error)
})
