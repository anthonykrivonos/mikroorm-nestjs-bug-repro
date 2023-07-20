import { Entity, Index, ManyToOne } from '@mikro-orm/core';
import { BaseEntity } from 'src/database/base-entity.entity';
import { Organization } from 'src/groupings/organization/organization.entity';
import { User } from 'src/user/user.entity';

@Entity()
@Index({ properties: ['organization', 'user'] })
export class OrganizationMembership extends BaseEntity {
  @ManyToOne({
    entity: () => Organization,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  organization: Organization;

  @ManyToOne({
    entity: () => User,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  user: User;

  constructor(id: string, user: User, organization: Organization) {
    super(id);

    this.organization = organization;
    this.user = user;
  }
}
