export class OrganizationDto {
  id!: string;
  name!: string;
  createdByUserId!: string;
  isPublicOrganization?: boolean;
  isDisabled?: boolean;
}

export class GetUsersParamsDto {
  organizationId!: string;
}
