import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { OrganizationMembership } from 'src/groupings/organization/organization-membership/organization-membership.entity';
import { OrganizationMembershipService } from 'src/groupings/organization/organization-membership/organization-membership.service';
import { Organization } from 'src/groupings/organization/organization.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Organization, OrganizationMembership],
    }),
  ],
  providers: [OrganizationMembershipService],
  controllers: [],
  exports: [OrganizationMembershipService],
})
export class OrganizationMembershipModule {}
