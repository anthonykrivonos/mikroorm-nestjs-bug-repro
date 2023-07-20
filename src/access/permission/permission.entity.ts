import { Embeddable, Embedded, Entity, Enum, ManyToOne, Property } from '@mikro-orm/core';
import { PermissionDto } from 'src/access/permission/permission.dto';
import { PermissionType } from 'src/access/permission/permission.types';
import { BaseEntity } from 'src/database/base-entity.entity';
import { Organization } from 'src/groupings/organization/organization.entity';

@Embeddable()
export class PermissionMetadata {}

@Entity()
export class Permission extends BaseEntity {
  @ManyToOne({
    entity: () => Organization,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  organization: Organization;

  @Enum({ type: 'enum', items: () => PermissionType })
  permissionType: PermissionType;

  @Property({ type: 'text' })
  name!: string;

  @Embedded({ entity: () => PermissionMetadata })
  metadata!: PermissionMetadata;

  @Property({ type: 'boolean', default: true })
  isActive: boolean = true;

  constructor(
    id: string,
    organization: Organization,
    permissionType: PermissionType,
    name: string,
    metadata?: PermissionMetadata,
    isActive = true,
  ) {
    super(id);
    this.permissionType = permissionType;
    this.organization = organization;
    this.name = name;
    this.metadata = metadata ?? {};
    this.isActive = isActive;
  }

  toDto(): PermissionDto {
    return {
      id: this.id,
      organization: this.organization.id,
      permissionType: this.permissionType,
      name: this.name,
      metadata: this.metadata,
      isActive: this.isActive,
    };
  }
}
