CREATE DATABASE IF NOT EXISTS teach_salary_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE teach_salary_db;

-- 用户表
CREATE TABLE IF NOT EXISTS sys_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    nickname VARCHAR(100),
    avatar VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(100),
    sex INT DEFAULT 0,
    status INT DEFAULT 1,
    dept_id INT,
    remark VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 角色表
CREATE TABLE IF NOT EXISTS sys_role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    status INT DEFAULT 1,
    remark VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 部门表
CREATE TABLE IF NOT EXISTS sys_dept (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    parent_id INT DEFAULT 0,
    sort INT DEFAULT 0,
    phone VARCHAR(20),
    principal VARCHAR(50),
    email VARCHAR(100),
    status INT DEFAULT 1,
    type INT DEFAULT 3,
    remark VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 菜单表
CREATE TABLE IF NOT EXISTS sys_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT DEFAULT 0,
    menu_type INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    name VARCHAR(100),
    path VARCHAR(255),
    component VARCHAR(255),
    `rank` INT,
    redirect VARCHAR(255),
    icon VARCHAR(100),
    extra_icon VARCHAR(100),
    enter_transition VARCHAR(100),
    leave_transition VARCHAR(100),
    active_path VARCHAR(255),
    auths VARCHAR(255),
    frame_src VARCHAR(255),
    frame_loading BOOLEAN DEFAULT TRUE,
    keep_alive BOOLEAN DEFAULT FALSE,
    hidden_tag BOOLEAN DEFAULT FALSE,
    fixed_tag BOOLEAN DEFAULT FALSE,
    show_link BOOLEAN DEFAULT TRUE,
    show_parent BOOLEAN DEFAULT FALSE,
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 角色菜单关联表
CREATE TABLE IF NOT EXISTS sys_role_menu (
    role_id INT NOT NULL,
    menu_id INT NOT NULL,
    PRIMARY KEY (role_id, menu_id),
    FOREIGN KEY (role_id) REFERENCES sys_role(id),
    FOREIGN KEY (menu_id) REFERENCES sys_menu(id)
);

-- 用户角色关联表
CREATE TABLE IF NOT EXISTS sys_user_role (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES sys_user(id),
    FOREIGN KEY (role_id) REFERENCES sys_role(id)
);

-- 在线用户表
CREATE TABLE IF NOT EXISTS sys_online_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    ip VARCHAR(50),
    address VARCHAR(100),
    `system` VARCHAR(50),
    browser VARCHAR(50),
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 登录日志表
CREATE TABLE IF NOT EXISTS sys_login_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    ip VARCHAR(50),
    address VARCHAR(100),
    `system` VARCHAR(50),
    browser VARCHAR(50),
    status INT DEFAULT 1,
    behavior VARCHAR(100),
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 操作日志表
CREATE TABLE IF NOT EXISTS sys_operation_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    ip VARCHAR(50),
    address VARCHAR(100),
    `system` VARCHAR(50),
    browser VARCHAR(50),
    `status` INT DEFAULT 1,
    summary VARCHAR(255),
    module VARCHAR(100),
    operating_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 系统日志表
CREATE TABLE IF NOT EXISTS sys_system_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    level INT DEFAULT 1,
    module VARCHAR(100),
    url VARCHAR(255),
    method VARCHAR(20),
    ip VARCHAR(50),
    address VARCHAR(100),
    `system` VARCHAR(50),
    browser VARCHAR(50),
    takes_time INT,
    request_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 插入初始数据
-- 插入部门数据
INSERT INTO sys_dept (id, name, parent_id, sort, phone, principal, email, status, type, remark) VALUES
(100, '杭州总公司', 0, 0, '15888888888', '张三', 'zhangsan@example.com', 1, 1, '公司总部'),
(101, '郑州分公司', 100, 1, '15888888888', '李四', 'lisi@example.com', 1, 2, '郑州分公司'),
(102, '深圳分公司', 100, 2, '15888888888', '王五', 'wangwu@example.com', 1, 2, '深圳分公司'),
(103, '研发部门', 101, 1, '15888888888', '赵六', 'zhaoliu@example.com', 1, 3, '研发部门'),
(104, '市场部门', 101, 2, '15888888888', '孙七', 'sunqi@example.com', 1, 3, '市场部门'),
(105, '测试部门', 101, 3, '15888888888', '周八', 'zhouba@example.com', 0, 3, '测试部门'),
(106, '财务部门', 101, 4, '15888888888', '吴九', 'wuju@example.com', 1, 3, '财务部门'),
(107, '运维部门', 101, 5, '15888888888', '郑十', 'zhengshi@example.com', 0, 3, '运维部门'),
(108, '市场部门', 102, 1, '15888888888', '钱一', 'qianyi@example.com', 1, 3, '市场部门'),
(109, '财务部门', 102, 2, '15888888888', '孙二', 'suner@example.com', 1, 3, '财务部门');

-- 插入角色数据
INSERT INTO sys_role (id, name, code, status, remark) VALUES
(1, '超级管理员', 'admin', 1, '超级管理员拥有最高权限'),
(2, '普通角色', 'common', 1, '普通角色拥有部分权限');

-- 插入用户数据
INSERT INTO sys_user (id, username, nickname, avatar, phone, email, sex, status, dept_id, remark) VALUES
(1, 'admin', '小铭', 'https://avatars.githubusercontent.com/u/44761321', '15888886789', 'admin@example.com', 0, 1, 103, '管理员'),
(2, 'common', '小林', 'https://avatars.githubusercontent.com/u/52823142', '18288882345', 'common@example.com', 1, 1, 105, '普通用户');

-- 插入用户角色关联数据
INSERT INTO sys_user_role (user_id, role_id) VALUES
(1, 1),
(2, 2);
