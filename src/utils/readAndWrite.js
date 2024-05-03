const fs = require("fs");
const readData = (url) => {
    const data = fs.readFileSync(url, 'utf-8');
    return JSON.parse(data);
}

const writeData = (url, data) => {
    return fs.writeFileSync(url, JSON.stringify(data));
}

export default { readData, writeData };
