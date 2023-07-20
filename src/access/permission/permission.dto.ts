import { PermissionType } from 'src/access/permission/permission.types';

export class PermissionDto {
  id!: string;
  organization!: string;
  permissionType!: PermissionType;
  name!: string;
  metadata!: PermissionMetadataDto;
  isActive!: boolean;
}

export class PermissionMetadataDto {}
