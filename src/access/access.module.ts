import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AccessGrant } from 'src/access/access-grant/access-grant.entity';
import { AccessService } from 'src/access/access.service';
import { Permission } from 'src/access/permission/permission.entity';
import { RoleMembership } from 'src/access/role/role-membership/role-membership.entity';
import { RolePermission } from 'src/access/role/role-permission/role-permission.entity';
import { RolePermissionModule } from 'src/access/role/role-permission/role-permission.module';
import { Role } from 'src/access/role/role.entity';
import { OrganizationMembershipModule } from 'src/groupings/organization/organization-membership/organization-membership.module';

@Module({
  imports: [
    RolePermissionModule,
    MikroOrmModule.forFeature({
      entities: [AccessGrant, Permission, Role, RoleMembership, RolePermission],
    }),
    OrganizationMembershipModule,
  ],
  providers: [AccessService],
  exports: [AccessService],
})
export class AccessModule {}
