export class WorkspaceDto {
  id!: string;
  name!: string;
  isReadonly!: boolean;
  isGlobal!: boolean;
  type?: string;
}
