// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

require dotenv.config();

const tables = [
  {
    name: "Comments",
    checkConstraints: {
      Comments_xata_id_length_xata_id: {
        name: "Comments_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      task_id_link: {
        name: "task_id_link",
        columns: ["task_id"],
        referencedTable: "Tasks",
        referencedColumns: ["xata_id"],
        onDelete: "RESTRICT",
      },
      user_id_link: {
        name: "user_id_link",
        columns: ["user_id"],
        referencedTable: "Users",
        referencedColumns: ["xata_id"],
        onDelete: "RESTRICT",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Comments__pgroll_new_task_id_key: {
        name: "Comments__pgroll_new_task_id_key",
        columns: ["task_id"],
      },
      Comments__pgroll_new_user_id_key: {
        name: "Comments__pgroll_new_user_id_key",
        columns: ["user_id"],
      },
      _pgroll_new_Comments_xata_id_key: {
        name: "_pgroll_new_Comments_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "content",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "task_id",
        type: "link",
        link: { table: "Tasks" },
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: '{"xata.link":"Tasks"}',
      },
      {
        name: "user_id",
        type: "link",
        link: { table: "Users" },
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: '{"xata.link":"Users"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Projects",
    checkConstraints: {
      Project_xata_id_length_xata_id: {
        name: "Project_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      team_id_link: {
        name: "team_id_link",
        columns: ["team_id"],
        referencedTable: "Teams",
        referencedColumns: ["xata_id"],
        onDelete: "RESTRICT",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Project__pgroll_new_projectname_key: {
        name: "Project__pgroll_new_projectname_key",
        columns: ["projectname"],
      },
      Project__pgroll_new_team_id_key: {
        name: "Project__pgroll_new_team_id_key",
        columns: ["team_id"],
      },
      _pgroll_new_Project_xata_id_key: {
        name: "_pgroll_new_Project_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "projectname",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "team_id",
        type: "link",
        link: { table: "Teams" },
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: '{"xata.link":"Teams"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Tasks",
    checkConstraints: {
      Task_xata_id_length_xata_id: {
        name: "Task_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      assignedTo_link: {
        name: "assignedTo_link",
        columns: ["assignedTo"],
        referencedTable: "Users",
        referencedColumns: ["xata_id"],
        onDelete: "RESTRICT",
      },
      project_id_link: {
        name: "project_id_link",
        columns: ["project_id"],
        referencedTable: "Projects",
        referencedColumns: ["xata_id"],
        onDelete: "RESTRICT",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Tasks__pgroll_new_assignedTo_key: {
        name: "Tasks__pgroll_new_assignedTo_key",
        columns: ["assignedTo"],
      },
      Tasks__pgroll_new_project_id_key: {
        name: "Tasks__pgroll_new_project_id_key",
        columns: ["project_id"],
      },
      _pgroll_new_Task_xata_id_key: {
        name: "_pgroll_new_Task_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "assignedTo",
        type: "link",
        link: { table: "Users" },
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: '{"xata.link":"Users"}',
      },
      {
        name: "description",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "due_date",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "project_id",
        type: "link",
        link: { table: "Projects" },
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: '{"xata.link":"Projects"}',
      },
      {
        name: "status",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Teams",
    checkConstraints: {
      Team_xata_id_length_xata_id: {
        name: "Team_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      user_id_link: {
        name: "user_id_link",
        columns: ["user_id"],
        referencedTable: "Users",
        referencedColumns: ["xata_id"],
        onDelete: "RESTRICT",
      },
    },
    primaryKey: [],
    uniqueConstraints: {
      Team__pgroll_new_teamname_key: {
        name: "Team__pgroll_new_teamname_key",
        columns: ["teamname"],
      },
      Team__pgroll_new_user_id_key: {
        name: "Team__pgroll_new_user_id_key",
        columns: ["user_id"],
      },
      _pgroll_new_Team_xata_id_key: {
        name: "_pgroll_new_Team_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "description",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "teamname",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "user_id",
        type: "link",
        link: { table: "Users" },
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: '{"xata.link":"Users"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "Users",
    checkConstraints: {
      Users_xata_id_length_xata_id: {
        name: "Users_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: [],
    uniqueConstraints: {
      Users__pgroll_new_useremail_key: {
        name: "Users__pgroll_new_useremail_key",
        columns: ["useremail"],
      },
      Users__pgroll_new_username_key: {
        name: "Users__pgroll_new_username_key",
        columns: ["username"],
      },
      _pgroll_new_Users_xata_id_key: {
        name: "_pgroll_new_Users_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "useremail",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "username",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "userpassword",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Comments = InferredTypes["Comments"];
export type CommentsRecord = Comments & XataRecord;

export type Projects = InferredTypes["Projects"];
export type ProjectsRecord = Projects & XataRecord;

export type Tasks = InferredTypes["Tasks"];
export type TasksRecord = Tasks & XataRecord;

export type Teams = InferredTypes["Teams"];
export type TeamsRecord = Teams & XataRecord;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  Comments: CommentsRecord;
  Projects: ProjectsRecord;
  Tasks: TasksRecord;
  Teams: TeamsRecord;
  Users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
 apiKey: process.env.XATA_API_KEY, 
 databaseURL: "https://vincent-kamami-s-workspace-7hal8u.us-east-1.xata.sh/db/TaskManagementWebApp"
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({
    apiKey: process.env.XATA_API_KEY,
    branch: process.env.XATA_BRANCH

  });
  return instance;
};
