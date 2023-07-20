export enum GeneralResourceAction {
  Update = 'general_update',
  View = 'general_view',
}

export enum WorkspaceResourceAction {
  CreateThread = 'workspace_create_thread',
  CreateChatAsset = 'workspace_create_chat_asset',
}

export enum OrganizationResourceAction {
  CreateWorkspace = 'organization_create_workspace',
}

export const ResourceAction = {
  ...GeneralResourceAction,
  ...WorkspaceResourceAction,
  ...OrganizationResourceAction,
};

export type ResourceAction =
  | GeneralResourceAction
  | WorkspaceResourceAction
  | OrganizationResourceAction;

export enum PermissionType {
  // General
  Admin = 'admin',
  Manager = 'manager',
  Viewer = 'viewer',
  Editor = 'editor',
}
