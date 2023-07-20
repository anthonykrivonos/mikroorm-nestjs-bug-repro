import { Entity, Index, ManyToOne, Property, Unique } from '@mikro-orm/core';
import { BaseEntity } from 'src/database/base-entity.entity';
import { Organization } from 'src/groupings/organization/organization.entity';
import { WorkspaceDto } from 'src/groupings/workspace/workspace.dto';
import { User } from 'src/user/user.entity';

@Entity()
@Unique({ properties: ['name', 'organization'] })
export class Workspace extends BaseEntity {
  @Index()
  @Property({ type: 'text', length: 255 })
  name: string;

  @Index()
  @ManyToOne({
    entity: () => Organization,
    onUpdateIntegrity: 'cascade',
  })
  organization: Organization;

  @Index()
  @ManyToOne({ entity: () => User, onUpdateIntegrity: 'cascade' })
  createdByUser: User;

  @Index()
  @Property({ type: 'boolean', nullable: true })
  isReadonly?: boolean = false;

  @Index()
  @Property({ type: 'boolean', nullable: true, default: true })
  isGlobal?: boolean = true;

  constructor(
    id: string,
    name: string,
    organization: Organization,
    createdByUser: User,
    isReadonly?: boolean,
    isGlobal?: boolean,
  ) {
    super(id);

    this.name = name;
    this.organization = organization;
    this.createdByUser = createdByUser;
    this.isReadonly = !!isReadonly;
    this.isGlobal = !!isGlobal;
  }

  toDto(): WorkspaceDto {
    return {
      id: this.id,
      name: this.name,
      isReadonly: !!this.isReadonly,
      isGlobal: !!this.isGlobal,
    };
  }
}
