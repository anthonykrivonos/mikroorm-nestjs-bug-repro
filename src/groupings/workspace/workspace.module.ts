import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AccessModule } from 'src/access/access.module';
import { OrganizationMembership } from 'src/groupings/organization/organization-membership/organization-membership.entity';
import { OrganizationMembershipModule } from 'src/groupings/organization/organization-membership/organization-membership.module';
import { Organization } from 'src/groupings/organization/organization.entity';
import { Workspace } from 'src/groupings/workspace/workspace.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [
        Workspace,
        Organization,
        User,
        OrganizationMembership,
      ],
    }),
    OrganizationMembershipModule,
    AccessModule,
  ],
})
export class WorkspaceModule {}
