export class UserTemplate {
    UserID: number;
    UserName: string;
    CampaignID: number = 0;
    AssignCampaign: AssignCampaignTemplate[];
}

export class AssignCampaignTemplate {
    CampaignID: number;
    CampaignName: string;
    IconPath: string;
}