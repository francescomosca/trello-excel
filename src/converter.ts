import { INPUT_FOLDER_PATH } from './config';
import { createExcel, writeFile } from './excel';
import { List } from './models/list.interface';
import { Member } from './models/member.interface';
import { TrelloBoard } from './models/trello-board.interface';
import { getListName, getPriority, getUsersName } from './utils';

const formatJson = (trelloJson): Object[] => {
  const lists: List[] = trelloJson.lists;
  const boardMembers: Member[] = trelloJson.members;

  return trelloJson.cards.map(card => {
    const listName = getListName(lists, card.idList);
    const members = getUsersName(boardMembers, card.idMembers);
    const priority = getPriority(card.pluginData);
    return {
      priority: priority,
      cardName: card.name,
      listName: listName,
      members: members,
      shortUrl: card.shortUrl,
    };
  });
}

export async function convertFileToXlsx(jsonFileName) {
  console.log('start to convertToCSVFile', jsonFileName)
  const trelloJson: TrelloBoard = require(`./${INPUT_FOLDER_PATH}${jsonFileName}`);

  const formattedJson = formatJson(trelloJson);
  const excel = createExcel(formattedJson);
  return writeFile(excel, jsonFileName);
}