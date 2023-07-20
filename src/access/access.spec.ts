import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { instance, Mock, mock } from 'omnimock';
import { AccessService } from 'src/access/access.service';
import { Permission } from 'src/access/permission/permission.entity';
import { RoleMembership } from 'src/access/role/role-membership/role-membership.entity';
import { RolePermission } from 'src/access/role/role-permission/role-permission.entity';
import { RolePermissionRepository } from 'src/access/role/role-permission/role-permission.repository';
import { Role } from 'src/access/role/role.entity';
import { OrganizationMembershipService } from 'src/groupings/organization/organization-membership/organization-membership.service';
import { AccessGrant } from 'src/access/access-grant/access-grant.entity';

describe('AccessTest', () => {
  let accessService: AccessService;

  let mockedMikroORM: Mock<MikroORM>;
  let mockedAccessGrantRepository: Mock<EntityRepository<AccessGrant>>;
  let mockedPermissionRepository: Mock<EntityRepository<Permission>>;
  let mockedRolePermissionRepository: Mock<RolePermissionRepository>;
  let mockedRoleRepository: Mock<EntityRepository<Role>>;
  let mockedRoleMembershipRepository: Mock<EntityRepository<RoleMembership>>;
  let mockedOrganizationMembershipService: Mock<OrganizationMembershipService>;

  beforeEach(async () => {
    mockedMikroORM = mock<MikroORM>('mikro orm');
    mockedAccessGrantRepository = mock<EntityRepository<AccessGrant>>('grant repository');
    mockedPermissionRepository = mock<EntityRepository<Permission>>('permission repository');
    mockedRolePermissionRepository = mock<RolePermissionRepository>('role permission repository');
    mockedRoleRepository = mock<EntityRepository<Role>>('role repository');
    mockedRoleMembershipRepository = mock<EntityRepository<RoleMembership>>(
      'role membership repository',
    );
    mockedOrganizationMembershipService = mock<OrganizationMembershipService>(
      'organization membership service',
    );

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccessService,
        {
          provide: MikroORM,
          useValue: instance(mockedMikroORM),
        },
        {
          provide: OrganizationMembershipService,
          useValue: instance(mockedOrganizationMembershipService),
        },
        {
          provide: getRepositoryToken(AccessGrant),
          useValue: mockedAccessGrantRepository,
        },
        {
          provide: getRepositoryToken(Permission),
          useValue: mockedPermissionRepository,
        },
        {
          provide: getRepositoryToken(RolePermission),
          useValue: mockedRolePermissionRepository,
        },
        {
          provide: getRepositoryToken(Role),
          useValue: mockedRoleRepository,
        },
        {
          provide: getRepositoryToken(RoleMembership),
          useValue: mockedRoleMembershipRepository,
        },
      ],
    }).compile();

    accessService = module.get(AccessService);
  });

  it('should be defined', () => {
    expect(accessService).toBeDefined();
  });
});
