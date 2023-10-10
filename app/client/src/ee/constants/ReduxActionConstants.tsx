export * from "ce/constants/ReduxActionConstants";
import {
  ReduxActionTypes as CE_ReduxActionTypes,
  ReduxActionErrorTypes as CE_ReduxActionErrorTypes,
} from "ce/constants/ReduxActionConstants";

const AuditLogsReduxActionTypes = {
  /** SET_USER_CAN_ACCESS_AUDIT_LOGS
   * Current user can access audit logs
   */
  SET_USER_CAN_ACCESS_AUDIT_LOGS: "SET_USER_CAN_ACCESS_AUDIT_LOGS",
  /** SET_USER_CANNOT_ACCESS_AUDIT_LOGS
   * Current user cannot access audit logs
   */
  SET_USER_CANNOT_ACCESS_AUDIT_LOGS: "SET_USER_CANNOT_ACCESS_AUDIT_LOGS",
  /** SET_RESOURCE_ID_JSON_FILTER
   * Only set the resourceId filter value. Leaves rest of the filters alone.
   */
  SET_RESOURCE_ID_JSON_FILTER: "SET_RESOURCE_ID_JSON_FILTER",
  /** SET_ONLY_RESOURCE_ID_JSON_FILTER
   * Reset all filters, then set resourceId filter.
   */
  SET_ONLY_RESOURCE_ID_JSON_FILTER: "SET_ONLY_RESOURCE_ID_JSON_FILTER",
  /** ADD_EMAIL_JSON_FILTER
   * Add payload email to the existing list of email filters
   */
  ADD_EMAIL_JSON_FILTER: "ADD_EMAIL_JSON_FILTER",
  /** SET_ONLY_EMAIL_JSON_FILTER
   * Reset all filters, then set email filter.
   */
  SET_ONLY_EMAIL_JSON_FILTER: "SET_ONLY_EMAIL_JSON_FILTER",
  /** ADD_EVENT_JSON_FILTER
   * Add payload event to the existing list of event filters
   */
  ADD_EVENT_JSON_FILTER: "ADD_EVENT_JSON_FILTER",
  /** SET_ONLY_EVENT_JSON_FILTER
   * Reset all filters, then set event filter.
   */
  SET_ONLY_EVENT_JSON_FILTER: "SET_ONLY_EVENT_JSON_FILTER",
  /** FETCH_AUDIT_LOGS_LOGS_INIT
   * Initiated audit logs logs fetch
   */
  FETCH_AUDIT_LOGS_LOGS_INIT: "FETCH_AUDIT_LOGS_LOGS_INIT",
  /** FETCH_AUDIT_LOGS_LOGS_SUCCESS
   * Audit logs logs fetched successfully
   */
  FETCH_AUDIT_LOGS_LOGS_SUCCESS: "FETCH_AUDIT_LOGS_LOGS_SUCCESS",
  /** FETCH_AUDIT_LOGS_LOGS_FAILED
   * Failed to fetch audit logs logs
   */
  FETCH_AUDIT_LOGS_LOGS_FAILED: "FETCH_AUDIT_LOGS_LOGS_FAILED",
  /** FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_INIT
   * Initiated audit logs logs next page fetch
   */
  FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_INIT: "FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_INIT",
  /** FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_SUCCESS
   * Audit logs logs next page fetched successfully
   */
  FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_SUCCESS:
    "FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_SUCCESS",
  /** FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_FAILED
   * Failed to fetch audit logs logs next page
   */
  FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_FAILED:
    "FETCH_AUDIT_LOGS_LOGS_NEXT_PAGE_FAILED",
  /** FETCH_AUDIT_LOGS_EMAILS_INIT
   * Initiated audit logs emails fetch
   */
  FETCH_AUDIT_LOGS_EMAILS_INIT: "FETCH_AUDIT_LOGS_EMAILS_INIT",
  /** FETCH_AUDIT_LOGS_EMAILS_SUCCESS
   * Emails for audit logs filter fetched successfully
   */
  FETCH_AUDIT_LOGS_EMAILS_SUCCESS: "FETCH_AUDIT_LOGS_EMAILS_SUCCESS",
  /** FETCH_AUDIT_LOGS_EMAILS_FAILED
   * Failed to fetch logs emails
   */
  FETCH_AUDIT_LOGS_EMAILS_FAILED: "FETCH_AUDIT_LOGS_EMAILS_FAILED",
  /** FETCH_AUDIT_LOGS_EVENTS_INIT
   * Initiated audit logs event types fetch
   */
  FETCH_AUDIT_LOGS_EVENTS_INIT: "FETCH_AUDIT_LOGS_EVENTS_INIT",
  /** FETCH_AUDIT_LOGS_EVENTS_SUCCESS
   * Event types for event type filter fetched successfully
   */
  FETCH_AUDIT_LOGS_EVENTS_SUCCESS: "FETCH_AUDIT_LOGS_EVENTS_SUCCESS",
  /** FETCH_AUDIT_LOGS_EVENTS_FAILED
   * Failed to fetch event types
   */
  FETCH_AUDIT_LOGS_EVENTS_FAILED: "FETCH_AUDIT_LOGS_EVENTS_FAILED",
  /** SET_AUDIT_LOGS_ON_URL_LOAD_FILTERS
   * When user enters a URL, we are going to load filters from url and save in redux store.
   */
  SET_AUDIT_LOGS_ON_URL_LOAD_FILTERS: "SET_AUDIT_LOGS_ON_URL_LOAD_FILTERS",
  /** RESET_AUDIT_LOGS_FILTERS
   * Set default values to the filters
   */
  RESET_AUDIT_LOGS_FILTERS: "RESET_AUDIT_LOGS_FILTERS",
  /** SET_AUDIT_LOGS_DATE_SORT_FILTER
   * Set date sort filter
   */
  SET_AUDIT_LOGS_DATE_SORT_FILTER: "SET_AUDIT_LOGS_DATE_SORT_FILTER",
  /** FETCH_AUDIT_LOGS_METADATA_INIT
   * Initiated audit logs metadata fetch
   */
  FETCH_AUDIT_LOGS_METADATA_INIT: "FETCH_AUDIT_LOGS_METADATA_INIT",
  /** FETCH_AUDIT_LOGS_METADATA_SUCCESS
   * Successfully fetched audit logs metadata
   */
  FETCH_AUDIT_LOGS_METADATA_SUCCESS: "FETCH_AUDIT_LOGS_METADATA_SUCCESS",
  /** FETCH_AUDIT_LOGS_METADATA_FAILED
   * Failed in fetching audit logs metadata
   */
  FETCH_AUDIT_LOGS_METADATA_FAILED: "FETCH_AUDIT_LOGS_METADATA_FAILED",
  /** REFRESH_AUDIT_LOGS_INIT
   * Initiates fetching of metadata and logs from backend for the given filters
   */
  REFRESH_AUDIT_LOGS_INIT: "REFRESH_AUDIT_LOGS_INIT",
  /** REFRESH_AUDIT_LOGS_SUCCESS
   * Successfully fetched metadata and logs
   */
  REFRESH_AUDIT_LOGS_SUCCESS: "REFRESH_AUDIT_LOGS_SUCCESS",
  /** REFRESH_AUDIT_LOGS_FAILED
   * Failed to fetch metadata and logs
   */
  REFRESH_AUDIT_LOGS_FAILED: "REFRESH_AUDIT_LOGS_FAILED",
  /** REPLACE_AUDIT_LOGS_SELECTED_EMAILS
   * Set a list of selected emails for email filter
   */
  REPLACE_AUDIT_LOGS_SELECTED_EMAILS: "REPLACE_AUDIT_LOGS_SELECTED_EMAILS",
  /** REPLACE_AUDIT_LOGS_SELECTED_EVENTS
   * Set a list of selected event types for event types filter
   */
  REPLACE_AUDIT_LOGS_SELECTED_EVENTS: "REPLACE_AUDIT_LOGS_SELECTED_EVENTS",
  /** SET_AUDIT_LOGS_DATE_FILTER
   * Set Date filter
   */
  SET_AUDIT_LOGS_DATE_FILTER: "SET_AUDIT_LOGS_DATE_FILTER",
  /** MARK_AUDIT_LOGS_LOG_OPEN
   * Mark an individual log open
   */
  MARK_AUDIT_LOGS_LOG_OPEN: "MARK_AUDIT_LOGS_LOG_OPEN",
  /** MARK_AUDIT_LOGS_LOG_CLOSE
   * Mark an individual log close
   */
  MARK_AUDIT_LOGS_LOG_CLOSE: "MARK_AUDIT_LOGS_LOG_CLOSE",
  /** RESET_AUDIT_LOGS
   * Completely reset the audit-logs data
   * to save space in redux-store
   */
  RESET_AUDIT_LOGS: "RESET_AUDIT_LOGS",
  /**
   * AUDIT_LOGS_LOG_ACTION_EXECUTION logs the action execution data to /analytics/event
   */
  AUDIT_LOGS_LOG_ACTION_EXECUTION: "AUDIT_LOGS_LOG_ACTION_EXECUTION",
};

const AIWindowActionTypes = {
  TOGGLE_AI_WINDOW: "TOGGLE_AI_WINDOW",
  EVALUATE_GPT_RESPONSE: "EVALUATE_GPT_RESPONSE",
  EVALUATE_GPT_RESPONSE_COMPLETE: "EVALUATE_GPT_RESPONSE_COMPLETE",
  ADD_GPT_MESSAGE: "ADD_GPT_MESSAGE",
  UPDATE_GPT_MESSAGE: "UPDATE_GPT_MESSAGE",
  SHOW_EXAMPLE_GPT_PROMPT: "SHOW_EXAMPLE_GPT_PROMPT",
  ASK_AI: "ASK_AI",
  AI_LOADING: "AI_LOADING",
  SET_AI_TASK: "SET_AI_TASK",
};

const PackageActionTypes = {
  INITIALIZE_PACKAGE_EDITOR: "INITIALIZE_PACKAGE_EDITOR",
  INITIALIZE_PACKAGE_EDITOR_SUCCESS: "INITIALIZE_PACKAGE_EDITOR_SUCCESS",
  FETCH_ALL_PACKAGES_INIT: "FETCH_ALL_PACKAGES_INIT",
  FETCH_ALL_PACKAGES_SUCCESS: "FETCH_ALL_PACKAGES_SUCCESS",
  FETCH_PACKAGE_INIT: "FETCH_PACKAGE_INIT",
  FETCH_PACKAGE_SUCCESS: "FETCH_PACKAGE_SUCCESS",
  CREATE_PACKAGE_FROM_WORKSPACE_INIT: "CREATE_PACKAGE_FROM_WORKSPACE_INIT",
  CREATE_PACKAGE_FROM_WORKSPACE_SUCCESS:
    "CREATE_PACKAGE_FROM_WORKSPACE_SUCCESS",
  SET_CURRENT_PACKAGE_ID: "SET_CURRENT_PACKAGE_ID",
};

const PackageActionErrorTypes = {
  FETCH_ALL_PACKAGES_ERROR: "FETCH_ALL_PACKAGES_ERROR",
  FETCH_PACKAGE_ERROR: "FETCH_PACKAGE_ERROR",
  CREATE_PACKAGE_FROM_WORKSPACE_ERROR: "CREATE_PACKAGE_FROM_WORKSPACE_ERROR",
  INITIALIZE_PACKAGE_EDITOR_ERROR: "INITIALIZE_PACKAGE_EDITOR_ERROR",
};

export const ReduxActionTypes = {
  ...CE_ReduxActionTypes,
  ...AuditLogsReduxActionTypes,
  ...PackageActionTypes,
  REGISTER_SSO_IDENTITY_PROVIDER: "REGISTER_SSO_IDENTITY_PROVIDER",
  UPDATE_IDENTITY_PROVIDER_METADATA: "UPDATE_IDENTITY_PROVIDER_METADATA",
  FETCH_SAML_METADATA: "FETCH_SAML_METADATA",
  FETCH_SAML_METADATA_SUCCESS: "FETCH_SAML_METADATA_SUCCESS",
  FETCH_ACL_USERS: "FETCH_ACL_USERS",
  FETCH_ACL_USERS_SUCCESS: "FETCH_ACL_USERS_SUCCESS",
  FETCH_ACL_USER_BY_ID: "FETCH_ACL_USER_BY_ID",
  FETCH_ACL_USER_BY_ID_SUCCESS: "FETCH_ACL_USER_BY_ID_SUCCESS",
  UPDATE_GROUPS_IN_USER: "UPDATE_GROUPS_IN_USER",
  UPDATE_GROUPS_IN_USER_SUCCESS: "UPDATE_GROUPS_IN_USER_SUCCESS",
  UPDATE_ROLES_IN_USER: "UPDATE_ROLES_IN_USER",
  UPDATE_ROLES_IN_USER_SUCCESS: "UPDATE_ROLES_IN_USER_SUCCESS",
  CREATE_ACL_USER: "CREATE_ACL_USER",
  CREATE_ACL_USER_SUCCESS: "CREATE_ACL_USER_SUCCESS",
  DELETE_ACL_USER: "DELETE_ACL_USER",
  DELETE_ACL_USER_SUCCESS: "DELETE_ACL_USER_SUCCESS",
  FETCH_ACL_GROUPS: "FETCH_ACL_GROUPS",
  FETCH_ACL_GROUPS_SUCCESS: "FETCH_ACL_GROUPS_SUCCESS",
  FETCH_ACL_GROUP_BY_ID: "FETCH_ACL_GROUP_BY_ID",
  FETCH_ACL_GROUP_BY_ID_SUCCESS: "FETCH_ACL_GROUP_BY_ID_SUCCESS",
  CREATE_ACL_GROUP: "CREATE_ACL_GROUP",
  CREATE_ACL_GROUP_SUCCESS: "CREATE_ACL_GROUP_SUCCESS",
  UPDATE_ACL_GROUP_NAME: "UPDATE_ACL_GROUP_NAME",
  UPDATE_ACL_GROUP_NAME_SUCCESS: "UPDATE_ACL_GROUP_NAME_SUCCESS",
  UPDATE_ACL_GROUP_ROLES: "UPDATE_ACL_GROUP_ROLES",
  UPDATE_ACL_GROUP_ROLES_SUCCESS: "UPDATE_ACL_GROUP_ROLES_SUCCESS",
  DELETE_ACL_GROUP: "DELETE_ACL_GROUP",
  DELETE_ACL_GROUP_SUCCESS: "DELETE_ACL_GROUP_SUCCESS",
  CLONE_ACL_GROUP: "CLONE_ACL_GROUP",
  CLONE_ACL_GROUP_SUCCESS: "CLONE_ACL_GROUP_SUCCESS",
  FETCH_ACL_ROLES: "FETCH_ACL_ROLES",
  FETCH_ACL_ROLES_SUCCESS: "FETCH_ACL_ROLES_SUCCESS",
  FETCH_ACL_ROLE_BY_ID: "FETCH_ACL_ROLE_BY_ID",
  FETCH_ACL_ROLE_BY_ID_SUCCESS: "FETCH_ACL_ROLE_BY_ID_SUCCESS",
  CREATE_ACL_ROLE: "CREATE_ACL_ROLE",
  CREATE_ACL_ROLE_SUCCESS: "CREATE_ACL_ROLE_SUCCESS",
  UPDATE_ACL_ROLE_NAME: "UPDATE_ACL_ROLE_NAME",
  UPDATE_ACL_ROLE_NAME_SUCCESS: "UPDATE_ACL_ROLE_NAME_SUCCESS",
  UPDATE_ACL_ROLE: "UPDATE_ACL_ROLE",
  UPDATE_ACL_ROLE_SUCCESS: "UPDATE_ACL_ROLE_SUCCESS",
  DELETE_ACL_ROLE: "DELETE_ACL_ROLE",
  DELETE_ACL_ROLE_SUCCESS: "DELETE_ACL_ROLE_SUCCESS",
  CLONE_ACL_ROLE: "CLONE_ACL_ROLE",
  CLONE_ACL_ROLE_SUCCESS: "CLONE_ACL_ROLE_SUCCESS",
  FETCH_ROLES_GROUPS_FOR_INVITE: "FETCH_ROLES_GROUPS_FOR_INVITE",
  FETCH_ROLES_GROUPS_FOR_INVITE_SUCCESS:
    "FETCH_ROLES_GROUPS_FOR_INVITE_SUCCESS",
  RESET_ROLES_DATA: "RESET_ROLES_DATA",
  RESET_GROUPS_DATA: "RESET_GROUPS_DATA",
  RESET_USERS_DATA: "RESET_USERS_DATA",
  ADD_USERS_IN_GROUP: "ADD_USERS_IN_GROUP",
  ADD_USERS_IN_GROUP_SUCCESS: "ADD_USERS_IN_GROUP_SUCCESS",
  REMOVE_USERS_FROM_GROUP: "REMOVE_USERS_FROM_GROUP",
  REMOVE_USERS_FROM_GROUP_SUCCESS: "REMOVE_USERS_FROM_GROUP_SUCCESS",
  ACL_IS_EDITING: "ACL_IS_EDITING",
  FETCH_ICON_LOCATIONS: "FETCH_ICON_LOCATIONS",
  FETCH_ICON_LOCATIONS_SUCCESS: "FETCH_ICON_LOCATIONS_SUCCESS",
  FETCH_GROUP_SUGGESTIONS: "FETCH_GROUP_SUGGESTIONS",
  FETCH_GROUP_SUGGESTIONS_SUCCESS: "FETCH_GROUP_SUGGESTIONS_SUCCESS",
  IS_SAVING_ROLE: "IS_SAVING_ROLE",
  /** FETCH_ENVIRONMENT_INIT
   * Initiated environment fetch
   */
  FETCH_ENVIRONMENT_INIT: "FETCH_ENVIRONMENT_INIT",
  /** FETCH_ENVIRONMENT_SUCCESS
   * Successfully fetched environment
   */
  FETCH_ENVIRONMENT_SUCCESS: "FETCH_ENVIRONMENT_SUCCESS",
  /** FETCH_ENVIRONMENT_FAILED
   * Failed to fetch environment
   */
  FETCH_ENVIRONMENT_FAILED: "FETCH_ENVIRONMENT_FAILED",
  /** SET_CURRENT_ENVIRONMENT
   * Set current environment (id, name, appId and workspaceId)
   */
  SET_CURRENT_ENVIRONMENT: "SET_CURRENT_ENVIRONMENT",
  /** SET_CURRENT_ENVIRONMENT_ID
   * Set current environment id for the ds editor mode
   */
  SET_CURRENT_EDITING_ENVIRONMENT: "SET_CURRENT_EDITING_ENVIRONMENT",
  /** GET_CURRENT_ENVIRONMENT_NAME
   * Get current environment name
   */
  GET_CURRENT_ENVIRONMENT_NAME: "GET_CURRENT_ENVIRONMENT_NAME",
  /** GET_CURRENT_ENVIRONMENT_ID
   * Get current environment ID
   */
  GET_CURRENT_ENVIRONMENT_ID: "GET_CURRENT_ENVIRONMENT_ID",
  SHOW_ENV_INFO_MODAL: "SHOW_ENV_INFO_MODAL",
  HIDE_ENV_INFO_MODAL: "HIDE_ENV_INFO_MODAL",
  VALIDATE_LICENSE_KEY: "VALIDATE_LICENSE_KEY_INIT",
  VALIDATE_LICENSE_KEY_SUCCESS: "VALIDATE_LICENSE_KEY_SUCCESS",
  SET_SHOW_BILLING_BANNER: "SET_SHOW_BILLING_BANNER",
  INVALID_LICENSE_KEY: "INVALID_LICENSE_KEY",
  STOP_LICENSE_STATUS_CHECK: "STOP_LICENSE_STATUS_CHECK",
  SHOW_LICENSE_MODAL: "SHOW_LICENSE_MODAL",
  FORCE_LICENSE_CHECK_INIT: "FORCE_LICENSE_CHECK_INIT",
  FORCE_LICENSE_CHECK_SUCCESS: "FORCE_LICENSE_CHECK_SUCCESS",
  FETCH_ALL_APP_USERS_INIT: "FETCH_ALL_APP_USERS_INIT",
  FETCH_ALL_APP_USERS_SUCCESS: "FETCH_ALL_APP_USERS_SUCCESS",
  FETCH_ALL_APP_ROLES_INIT: "FETCH_ALL_APP_ROLES_INIT",
  FETCH_ALL_APP_ROLES_SUCCESS: "FETCH_ALL_APP_ROLES_SUCCESS",
  FETCH_APP_DEFAULT_ROLES_INIT: "FETCH_APP_DEFAULT_ROLES_INIT",
  FETCH_APP_DEFAULT_ROLES_SUCCESS: "FETCH_APP_DEFAULT_ROLES_SUCCESS",
  INVITE_USERS_TO_APPLICATION_INIT: "INVITE_USERS_TO_APPLICATION_INIT",
  DELETE_APPLICATION_USER_INIT: "DELETE_APPLICATION_USER_INIT",
  DELETE_APPLICATION_USER_SUCCESS: "DELETE_APPLICATION_USER_SUCCESS",
  CHANGE_APPLICATION_USER_ROLE_INIT: "CHANGE_APPLICATION_USER_ROLE_INIT",
  CHANGE_APPLICATION_USER_ROLE_SUCCESS: "CHANGE_APPLICATION_USER_ROLE_SUCCESS",
  FETCH_PROVISIONING_STATUS: "FETCH_PROVISIONING_STATUS",
  FETCH_PROVISIONING_STATUS_SUCCESS: "FETCH_PROVISIONING_STATUS_SUCCESS",
  GENERATE_PROVISIONING_API_KEY: "GENERATE_PROVISIONING_API_KEY",
  GENERATE_PROVISIONING_API_KEY_SUCCESS:
    "GENERATE_PROVISIONING_API_KEY_SUCCESS",
  DISCONNECT_PROVISIONING: "DISCONNECT_PROVISIONING",
  DISCONNECT_PROVISIONING_SUCCESS: "DISCONNECT_PROVISIONING_SUCCESS",
  ...AIWindowActionTypes,
};

export const ReduxActionErrorTypes = {
  ...CE_ReduxActionErrorTypes,
  ...PackageActionErrorTypes,
  FETCH_SAML_METADATA_ERROR: "FETCH_SAML_METADATA_ERROR",
  FETCH_ACL_USERS_ERROR: "FETCH_ACL_USERS_ERROR",
  FETCH_ACL_USER_BY_ID_ERROR: "FETCH_ACL_USER_BY_ID_ERROR",
  CREATE_ACL_USER_ERROR: "CREATE_ACL_USER_ERROR",
  DELETE_ACL_USER_ERROR: "DELETE_ACL_USER_ERROR",
  FETCH_ACL_GROUPS_ERROR: "FETCH_ACL_GROUPS_ERROR",
  FETCH_ACL_GROUP_BY_ID_ERROR: "FETCH_ACL_GROUP_BY_ID_ERROR",
  CREATE_ACL_GROUP_ERROR: "CREATE_ACL_GROUP_ERROR",
  UPDATE_ACL_GROUP_NAME_ERROR: "UPDATE_ACL_GROUP_NAME_ERROR",
  UPDATE_ACL_GROUP_ROLES_ERROR: "UPDATE_ACL_GROUP_ROLES_ERROR",
  DELETE_ACL_GROUP_ERROR: "DELETE_ACL_GROUP_ERROR",
  CLONE_ACL_GROUP_ERROR: "CLONE_ACL_GROUP_ERROR",
  FETCH_ACL_ROLES_ERROR: "FETCH_ACL_ROLES_ERROR",
  FETCH_ACL_ROLE_BY_ID_ERROR: "FETCH_ACL_ROLE_BY_ID_ERROR",
  CREATE_ACL_ROLE_ERROR: "CREATE_ACL_ROLE_ERROR",
  UPDATE_ACL_ROLE_NAME_ERROR: "UPDATE_ACL_ROLE_NAME_ERROR",
  UPDATE_ACL_ROLE_ERROR: "UPDATE_ACL_ROLE_ERROR",
  DELETE_ACL_ROLE_ERROR: "DELETE_ACL_ROLE_ERROR",
  CLONE_ACL_ROLE_ERROR: "CLONE_ACL_ROLE_ERROR",
  FETCH_ROLES_GROUPS_FOR_INVITE_ERROR: "FETCH_ROLES_GROUPS_FOR_INVITE_ERROR",
  ADD_USERS_IN_GROUP_ERROR: "ADD_USERS_IN_GROUP_ERROR",
  REMOVE_USERS_FROM_GROUP_ERROR: "REMOVE_USERS_FROM_GROUP_ERROR",
  UPDATE_GROUPS_IN_USER_ERROR: "UPDATE_GROUPS_IN_USER_ERROR",
  UPDATE_ROLES_IN_USER_ERROR: "UPDATE_ROLES_IN_USER_ERROR",
  FETCH_ICON_LOCATIONS_ERROR: "FETCH_ICON_LOCATIONS_ERROR",
  FETCH_GROUP_SUGGESTIONS_ERROR: "FETCH_GROUP_SUGGESTIONS_ERROR",
  VALIDATE_LICENSE_KEY_ERROR: "VALIDATE_LICENSE_KEY_ERROR",
  FORCE_LICENSE_CHECK_ERROR: "FORCE_LICENSE_CHECK_ERROR",
  FETCH_ALL_APP_USERS_ERROR: "FETCH_ALL_APP_USERS_ERROR",
  FETCH_ALL_APP_ROLES_ERROR: "FETCH_ALL_APP_ROLES_ERROR",
  FETCH_APP_DEFAULT_ROLES_ERROR: "FETCH_APP_DEFAULT_ROLES_ERROR",
  DELETE_APPLICATION_USER_ERROR: "DELETE_APPLICATION_USER_ERROR",
  CHANGE_APPLICATION_USER_ROLE_ERROR: "CHANGE_APPLICATION_USER_ROLE_ERROR",
  FETCH_PROVISIONING_STATUS_ERROR: "FETCH_PROVISIONING_STATUS_ERROR",
  GENERATE_PROVISIONING_API_KEY_ERROR: "GENERATE_PROVISIONING_API_KEY_ERROR",
  DISCONNECT_PROVISIONING_ERROR: "DISCONNECT_PROVISIONING_ERROR",
};
