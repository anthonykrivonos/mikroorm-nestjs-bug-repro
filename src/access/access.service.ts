import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, Logger } from '@nestjs/common';
import _ from 'lodash';
import { AccessGrant } from 'src/access/access-grant/access-grant.entity';
import { Permission } from 'src/access/permission/permission.entity';
import { RoleMembership } from 'src/access/role/role-membership/role-membership.entity';
import { RolePermission } from 'src/access/role/role-permission/role-permission.entity';
import { RolePermissionRepository } from 'src/access/role/role-permission/role-permission.repository';
import { Role } from 'src/access/role/role.entity';
import { OrganizationMembershipService } from 'src/groupings/organization/organization-membership/organization-membership.service';

@Injectable()
export class AccessService {
  private readonly logger = new Logger('access-service');
  constructor(
    private readonly orm: MikroORM,
    @InjectRepository(AccessGrant)
    private accessGrantRepository: EntityRepository<AccessGrant>,
    @InjectRepository(Permission)
    private permissionRepository: EntityRepository<Permission>,
    @InjectRepository(RolePermission)
    private rolePermissionRepository: RolePermissionRepository,
    @InjectRepository(Role)
    private roleRepository: EntityRepository<Role>,
    @InjectRepository(RoleMembership)
    private roleMembershipRepository: EntityRepository<RoleMembership>,
    private organizationMembershipService: OrganizationMembershipService,
  ) {}
}
