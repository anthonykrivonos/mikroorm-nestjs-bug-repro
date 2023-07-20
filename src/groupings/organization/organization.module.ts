import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { OrganizationMembership } from 'src/groupings/organization/organization-membership/organization-membership.entity';
import { OrganizationMembershipModule } from 'src/groupings/organization/organization-membership/organization-membership.module';
import { OrganizationMembershipService } from 'src/groupings/organization/organization-membership/organization-membership.service';
import { Organization } from 'src/groupings/organization/organization.entity';
import { Workspace } from 'src/groupings/workspace/workspace.entity';
import { WorkspaceModule } from 'src/groupings/workspace/workspace.module';
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
    WorkspaceModule,
    OrganizationMembershipModule,
  ],
  providers: [OrganizationMembershipService],
  exports: [OrganizationMembershipService],
})
export class OrganizationModule {}
