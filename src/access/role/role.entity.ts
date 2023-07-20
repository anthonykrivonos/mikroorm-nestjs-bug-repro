import { Entity, ManyToOne, Property, Unique } from '@mikro-orm/core';
import { RoleDto } from 'src/access/role/role.dto';
import { BaseUniqueEntity } from 'src/database/base-entity.entity';
import { Organization } from 'src/groupings/organization/organization.entity';

@Entity()
@Unique({ properties: ['organization', 'name'] })
export class Role extends BaseUniqueEntity {
  @ManyToOne({
    entity: () => Organization,
    primary: true,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  organization: Organization;

  @Property({ type: 'text', primary: true, length: 255 })
  name: string;

  constructor(organization: Organization, name: string) {
    super();

    this.organization = organization;
    this.name = name;
  }

  toDto(): RoleDto {
    return {
      organization: this.organization.id,
      name: this.name,
    };
  }
}
