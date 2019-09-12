import Excel from 'exceljs/modern.browser';

import { OUTPUT_FOLDER_PATH } from './config';

export const writeFile = async (workbook, fileName) =>
  workbook.xlsx.writeFile(`${OUTPUT_FOLDER_PATH}${fileName}.xlsx`)
    .then(() => { console.log(`Saved "${fileName}" to "${fileName}.xlsx`); })
    .catch((err) => { console.log("err", err); });

export const createExcel = (newList: Object[]) => {
  // Create workbook & add worksheet
  const workbook = new Excel.Workbook();
  const ws = workbook.addWorksheet('Foglio');

  // add column headers
  ws.columns = [
    { header: 'Priorità', key: 'priority' },
    { header: 'descrizione', key: 'cardName' },
    { header: 'Stato', key: 'listName' },
    { header: 'Membri', key: 'members' },
    { header: 'URL', key: 'shortUrl' },
  ];

  // Add row using key mapping to columns
  ws.addRows(newList);

/*
  // format priority column to number
  // ws.getColumn(1).numFmt = '#';

  // wrap description
  ws.getColumn(2).alignment = { wrapText: true };

  // set header style
  let headerRow = ws.getRow(1);
  headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
  headerRow.font = {
    color: { argb: 'FFFFFFFF' },
    bold: true
  };
  headerRow.fill = {
    bgColor: { argb: '007AAEFF' }
  }
*/

  return workbook;
}