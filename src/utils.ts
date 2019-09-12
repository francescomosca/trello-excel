import { HAS_PRIORITY_PLUGIN } from './config';
import { Member } from './models/member.interface';

export const getListName = (lists, listId) => lists.find(list => list.id == listId).name; // _.find(lists, { id: listId }).name;

export const getUsersName = (boardMembers: Member[], cardMembersId: string[]): string => {
  // return _.find(members, { id: userId }).fullName;
  return cardMembersId.map((userId: string) => {
    const foundUser = boardMembers.find(boardMember => boardMember.id == userId);
    if (foundUser) return foundUser.fullName;
  }).join(', ')
}

/** @todo prendere le label delle priorità */
export const getPriority = (cardPluginData): string => cardPluginData && cardPluginData.length && HAS_PRIORITY_PLUGIN
  ? JSON.parse(cardPluginData[0].value).priority
  : undefined;

/*
"pluginData":[
  {
    "id":"5d6cdf6da49bb9751b206db5",
  "idPlugin":"5d40dbf16b5f44535df106d1",
  "scope":"board",
  "idModel":"5d6ccf3645303087bfc668ca",
  "value":"{
    \"label1\":\"URGENTE\",
    \"label2\":\"Critico\",
    \"label3\":\"Alarming\",
    \"label4\":\"Act soon\",
    \"label5\":\"Lowest\",
    \"showOnlyHigh\":false,\"showBadge\":true,\"showDetailBadge\":true}","access":"shared"}]}
*/