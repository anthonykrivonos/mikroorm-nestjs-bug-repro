import { Entity, Index, ManyToOne, Unique } from '@mikro-orm/core';
import { Role } from 'src/access/role/role.entity';
import { BaseUniqueEntity } from 'src/database/base-entity.entity';
import { User } from 'src/user/user.entity';

@Entity()
@Index({ properties: ['role', 'user'] })
@Unique({ properties: ['role', 'user'] })
export class RoleMembership extends BaseUniqueEntity {
  @ManyToOne({
    entity: () => Role,
    primary: true,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  role: Role;

  @ManyToOne({
    entity: () => User,
    primary: true,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  user: User;

  constructor(user: User, role: Role) {
    super();

    this.role = role;
    this.user = user;
  }
}
