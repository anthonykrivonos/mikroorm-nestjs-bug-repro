import { Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/database/base-entity.entity';
import { UserDto } from 'src/user/user.dto';

export class User extends BaseEntity {
  @Property({ type: 'text', length: 255, nullable: true })
  firstName?: string;

  @Property({ type: 'text', length: 255, nullable: true })
  lastName?: string;

  @Property({ type: 'text', length: 255, nullable: true })
  email?: string;

  @Property({ type: 'string', nullable: true })
  cvprSignupToken?: string;

  constructor(id: string) {
    super(id);
  }

  toDto(): UserDto {
    return {
      id: this.id,
      createdAt: this.createdAt,
    };
  }
}
