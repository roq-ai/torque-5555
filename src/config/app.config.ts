interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Vehicle Owner', 'Reservation Manager'],
  tenantName: 'Organization',
  applicationName: 'Torque',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
