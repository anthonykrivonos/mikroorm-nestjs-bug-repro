import { EntityRepository } from '@mikro-orm/postgresql';
import { Permission } from 'src/access/permission/permission.entity';
import { RolePermission } from 'src/access/role/role-permission/role-permission.entity';

export class RolePermissionRepository extends EntityRepository<RolePermission> {
  async findPermissionsForUser(userId: string): Promise<Permission[]> {
    const query: { permission: Permission }[] = await this.createQueryBuilder('rolePermission')
      .select('rolePermission.permission.*')
      .leftJoin('rolePermission.role', 'roleMembership')
      .where({ 'roleMembership.user.id': userId })
      .andWhere({ 'rolePermission.permission.isActive': { $not: false } })
      .getResultList();

    return query.map(rolePermission => rolePermission.permission);
  }
}
