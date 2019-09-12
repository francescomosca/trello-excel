export interface Member {
  id: string;
  activityBlocked: boolean;
  avatarHash: string;
  avatarUrl: string;
  bio: string;
  bioData: any;
  confirmed: boolean;
  fullName: string;
  idEnterprise?: any;
  idEnterprisesDeactivated: any[];
  idMemberReferrer: string;
  idPremOrgsAdmin: any[];
  initials: string;
  memberType: string;
  nonPublic: any;
  nonPublicAvailable: boolean;
  products: any[];
  url: string;
  username: string;
  status: string;
}