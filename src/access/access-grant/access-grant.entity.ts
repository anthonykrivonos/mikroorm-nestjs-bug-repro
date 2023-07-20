import { Entity, Enum, ManyToOne, Property, Unique } from '@mikro-orm/core';
import { AccessGrantDto } from 'src/access/access-grant/access-grant.dto';
import { ResourceType } from 'src/access/access-grant/access-grant.types';
import { Permission } from 'src/access/permission/permission.entity';
import { BaseEntity } from 'src/database/base-entity.entity';
import { Organization } from 'src/groupings/organization/organization.entity';

@Entity()
@Unique({ properties: ['organization', 'resourceId', 'resourceType', 'permission'] })
export class AccessGrant extends BaseEntity {
  @ManyToOne({
    entity: () => Organization,
  })
  organization: Organization;

  @Property({ type: 'text', length: 255 })
  resourceId: string;

  @Enum({ type: 'enum', items: () => ResourceType })
  resourceType: ResourceType;

  @ManyToOne({
    entity: () => Permission,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  permission: Permission;

  @Property({ type: 'datetime', nullable: true })
  expiresAt?: Date;

  constructor(
    organization: Organization,
    resourceId: string,
    resourceType: ResourceType,
    permission: Permission,
    expiresAt?: Date,
  ) {
    const id = organization.id + resourceId + resourceType + permission.id;
    super(id);

    this.organization = organization;
    this.resourceId = resourceId;
    this.resourceType = resourceType;
    this.permission = permission;
    this.expiresAt = expiresAt;
  }

  toDto(): AccessGrantDto {
    return {
      id: this.id,
      organization: this.organization.id,
      resourceId: this.resourceId,
      resourceType: this.resourceType,
      permission: this.permission.id,
      expiresAt: this.expiresAt,
    };
  }
}
