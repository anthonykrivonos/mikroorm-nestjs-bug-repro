import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, Logger } from '@nestjs/common';
import { OrganizationMembership } from 'src/groupings/organization/organization-membership/organization-membership.entity';
import { Organization } from 'src/groupings/organization/organization.entity';

@Injectable()
export class OrganizationMembershipService {
  private readonly logger = new Logger('organization-membership service');

  constructor(
    @InjectRepository(OrganizationMembership)
    private readonly organizationMembershipRepository: EntityRepository<OrganizationMembership>,
    @InjectRepository(Organization)
    private readonly organizationRepository: EntityRepository<Organization>,
  ) {}

  async retrieveOrganizationMembership(userId: string, isInternalUser?: boolean) {
    const organizationMembership = await this.organizationMembershipRepository.findOne(
      {
        user: userId,
      },
      { populate: ['organization'] },
    );

    return { organizationMembership, organization: null };
  }
}
