import { readdirSync } from 'fs';
import { INPUT_FOLDER_PATH } from './config';
import { convertFileToXlsx } from './converter';

class Main {
    constructor() {
        console.log('------- trello-excel -------');

        const files: string[] = readdirSync(INPUT_FOLDER_PATH);
        if (!files.length) console.error('No file found');
        else files.forEach(async (file) => convertFileToXlsx(file));

    }
}
new Main();