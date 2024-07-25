import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

async function getQuotes(fileName) {
    try {
        const data = await readFile(fileName, 'utf8');
        const quotes = JSON.parse(data);
        console.log(quotes);
    } catch (error) {
        console.error('Error reading this file:', error)
    }
}
 getQuotes('quotes.json');

export async function addQuote(quoteText) {

}

// export async function getRandomQuote() {

// }

// export async function editQuote(id, quoteText) {

// }

// export async function deleteQuote(id) {

// }
