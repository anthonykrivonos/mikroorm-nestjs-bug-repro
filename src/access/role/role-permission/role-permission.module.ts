import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { RolePermission } from 'src/access/role/role-permission/role-permission.entity';
import { RolePermissionRepository } from 'src/access/role/role-permission/role-permission.repository';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [RolePermission],
    }),
    RolePermissionRepository,
  ],
  providers: [],
  exports: [],
})
export class RolePermissionModule {}
