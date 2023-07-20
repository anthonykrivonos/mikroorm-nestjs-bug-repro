import { Entity, Index, ManyToOne, OneToOne, Property, Unique } from '@mikro-orm/core';
import { BaseEntity } from 'src/database/base-entity.entity';
import { OrganizationDto } from 'src/groupings/organization/organization.dto';
import { User } from 'src/user/user.entity';

@Entity()
export class Organization extends BaseEntity {
  @Index()
  @Unique() // Unique for now since customers cannot create organization selfserve
  @Property({ type: 'text', length: 255 })
  name: string;

  @Index()
  @ManyToOne({ entity: () => User, onUpdateIntegrity: 'cascade' })
  createdByUser: User;

  @Index()
  @Property({ type: 'boolean', nullable: true })
  isDisabled?: boolean = false;

  @Property({ type: 'boolean', nullable: true })
  isPublicOrganization?: boolean;

  constructor(
    id: string,
    name: string,
    createdByUser: User,
    isDisabled?: boolean,
  ) {
    super(id);

    this.name = name;
    this.createdByUser = createdByUser;
    this.isDisabled = isDisabled ?? false;
  }

  toDto(): OrganizationDto {
    return {
      id: this.id,
      name: this.name,
      createdByUserId: this.createdByUser.id,
      isPublicOrganization: this.isPublicOrganization,
      isDisabled: this.isDisabled,
    };
  }
}
