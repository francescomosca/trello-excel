import { Badges } from "./badge.interface";
import { TrelloPluginData } from "./trello-board.interface";
import { Limits } from "./limits.interface";

export interface Card {
  id: string;
  address?: any;
  checkItemStates?: any;
  closed: boolean;
  coordinates?: any;
  creationMethod?: any;
  dateLastActivity: Date;
  desc: string;
  descData: DescData;
  dueReminder?: number;
  idBoard: string;
  idLabels: string[];
  idList: string;
  idMembersVoted: any[];
  idShort: number;
  idAttachmentCover?: any;
  limits: Limits;
  locationName?: any;
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  badges: Badges;
  dueComplete: boolean;
  due?: Date;
  email: string;
  idChecklists: string[];
  idMembers: string[];
  labels: Label[];
  shortUrl: string;
  subscribed: boolean;
  url: string;
  cover: Cover;
  attachments: Attachment[];
  pluginData: TrelloPluginData[];
  customFieldItems: any[];
}

export interface DescData {
  emoji: any;
}

export interface Label {
  id: string;
  idBoard: string;
  name: string;
  color: string;
}


export interface Cover {
  idAttachment?: any;
  color?: any;
  idUploadedBackground?: any;
  size: string;
  brightness: string;
}

export interface Attachment {
  bytes: number;
  date: Date;
  edgeColor?: any;
  idMember: string;
  isUpload: boolean;
  mimeType?: any;
  name: string;
  previews: any[];
  url: string;
  pos: number;
  id: string;
}