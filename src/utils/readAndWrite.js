const fs = require("fs");
interface myData {
    title: string,
    body: string,
    userId: number
}


const readData = (url: string) => {
    const data = fs.readFileSync(url, 'utf-8');
  return JSON.parse(data);
}

const writeData = (url: string, data: myData) => {
    return fs.writeFileSync(url, JSON.stringify(data));
}

export default { readData, writeData };
