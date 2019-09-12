import { Card } from "./card.interface";
import { Limits } from "./limits.interface";
import { List } from './list.interface';
import { Member } from './member.interface';
import { Prefs } from "./prefs.interface";

export interface TrelloBoard {
  id: string;
  name: string;
  desc: string;
  descData?: any;
  closed: boolean;
  idOrganization: string;
  limits: Limits;
  pinned: boolean;
  starred: boolean;
  url: string;
  prefs: Prefs;
  shortLink: string;
  subscribed: boolean;
  labelNames: any;
  powerUps: any[];
  dateLastActivity: Date;
  dateLastView: Date;
  shortUrl: string;
  idTags: any[];
  datePluginDisable?: any;
  creationMethod?: any;
  ixUpdate: string;
  templateGallery?: any;
  actions: any[];
  cards: Card[];
  labels: any[];
  lists: List[];
  members: Member[];
  checklists: any[];
  customFields: any[];
  memberships: Membership[];
  pluginData: TrelloPluginData[];
}

export interface TrelloPluginData {
  id: string;
  idPlugin: string;
  scope: string;
  idModel: string;
  value: string;
  access: string;
}

export interface Membership {
  id: string;
  idMember: string;
  memberType: string;
  unconfirmed: boolean;
  deactivated: boolean;
}
