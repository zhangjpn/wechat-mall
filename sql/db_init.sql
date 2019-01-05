-- Postgres rbac

CREATE TABLE IF NOT EXISTS departments (
    department_id SERIAL PRIMARY KEY,
    department_name varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS permission (
    permission_id SERIAL PRIMARY KEY ,
    permission_name varchar(255)
);


CREATE TABLE IF NOT EXISTS roles (
    role_id SERIAL PRIMARY KEY,
    rolename varchar(255) NOT NULL,
    department_id integer NOT NULL REFERENCES departments(department_id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS roles_permissions (
    role_id integer NOT NULL,
    permission_id integer NOT NULL,
    UNIQUE (role_id, permission_id)
);


CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username varchar(255) NOT NULL,
    role_id integer REFERENCES roles(role_id),
    password varchar(255),
    parent_id integer -- 创建者id
);