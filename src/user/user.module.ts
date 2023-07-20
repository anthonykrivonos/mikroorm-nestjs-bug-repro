import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { OrganizationMembership } from 'src/groupings/organization/organization-membership/organization-membership.entity';
import { OrganizationMembershipModule } from 'src/groupings/organization/organization-membership/organization-membership.module';
import { Organization } from 'src/groupings/organization/organization.entity';
import { OrganizationModule } from 'src/groupings/organization/organization.module';
import { Workspace } from 'src/groupings/workspace/workspace.entity';
import { WorkspaceModule } from 'src/groupings/workspace/workspace.module';
import { User } from 'src/user/user.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [User, Organization, Workspace, OrganizationMembership],
    }),
    OrganizationMembershipModule,
    OrganizationModule,
    WorkspaceModule,
  ],
})
export class UserModule {}
