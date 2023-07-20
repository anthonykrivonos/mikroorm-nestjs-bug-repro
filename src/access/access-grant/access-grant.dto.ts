import { ResourceType } from 'src/access/access-grant/access-grant.types';

export class AccessGrantDto {
  id!: string;
  organization!: string;
  resourceId!: string;
  resourceType!: ResourceType;
  permission!: string;
  expiresAt?: Date;
}
