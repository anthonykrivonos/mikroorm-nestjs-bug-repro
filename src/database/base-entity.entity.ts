import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export function constructId(id?: string): string {
  return id ?? "abc";
}

@Entity({ abstract: true })
export abstract class BaseUniqueEntity {
  @Property({ type: 'datetime', nullable: true })
  createdAt?: Date;

  @Property({ type: 'datetime', nullable: true, onUpdate: () => new Date() })
  updatedAt?: Date;

  constructor(createdAt?: Date, updatedAt?: Date) {
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}

@Entity({ abstract: true })
export abstract class BaseEntity extends BaseUniqueEntity {
  static readonly prefix: string;

  @PrimaryKey({ type: 'string', length: 255 })
  id!: string;

  constructor(id: string | undefined) {
    super();
    this.id = constructId(id);
  }
}
