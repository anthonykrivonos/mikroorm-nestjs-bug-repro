import { Entity, EntityRepositoryType, ManyToOne, Unique } from '@mikro-orm/core';
import { Permission } from 'src/access/permission/permission.entity';
import { RolePermissionRepository } from 'src/access/role/role-permission/role-permission.repository';
import { Role } from 'src/access/role/role.entity';
import { BaseUniqueEntity } from 'src/database/base-entity.entity';

@Entity({ customRepository: () => RolePermissionRepository })
@Unique({ properties: ['role', 'permission'] })
export class RolePermission extends BaseUniqueEntity {
  [EntityRepositoryType]?: RolePermissionRepository;

  @ManyToOne({
    entity: () => Role,
    primary: true,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  role: Role;

  @ManyToOne({
    entity: () => Permission,
    primary: true,
    onUpdateIntegrity: 'cascade',
    onDelete: 'cascade',
  })
  permission: Permission;

  constructor(role: Role, permission: Permission) {
    super();

    this.role = role;
    this.permission = permission;
  }
}
