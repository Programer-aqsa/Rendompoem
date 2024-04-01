import inquirer from "inquirer";
const poems = [
    "Aasmaan ki gehraiyon mein kho jaayein,",
    "Chandani raatein, taaron se bhar jaayein.",
    "Hawaon mein laharaate khwabon ki parchhaiyaan,",
    "Dil ki dastaan, anjaan raston pe bikhraayein.",
    "Phoolon ki khushboo, baarish ki boondein,",
    "Har pal naya rang, har kona naya sooraj.",
    "Zindagi ka safar, ek kahani anokhi,",
    "Har shabd, har lafz, ek nayi raah ka chhor.",
    "Dhoondte rahein khushiyan, pyaar ki muskurahat,",
    "Dard ki gehraiyon mein, ummeed ki roshni.",
    "Jeevan ki lehar mein, hum saath chalein,",
    "Khud ko paa lein, nayi manzil ki talash mein.",
    "Yeh zindagi ki kahani, ek anmol kitab,",
    "Har safha, har panna, ek nayi rachaayi.",
    "Chalo, mil kar likhein, apni apni kahani,",
    "Har pal, har lamha, ek naya safar, ek nayi zubaani."
];
function getRandomPoem() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    return poems[randomIndex];
}
async function main() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "generate",
            message: "Press enter to generate a random poem:",
        },
    ]);
    if (answers.generate === "") {
        console.log("\nRandom Poem:");
        console.log(getRandomPoem());
    }
    else {
        console.log("Invalid input. Please press enter to generate a random poem.");
    }
}
main();
