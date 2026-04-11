-- 数据库：teach_salary_db
-- 导出时间：2026-04-11
-- 导出内容：表结构和初始数据（含中文字段说明）

CREATE DATABASE IF NOT EXISTS teach_salary_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE teach_salary_db;

-- 用户表
CREATE TABLE IF NOT EXISTS sys_user (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '用户ID',
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    nickname VARCHAR(100) COMMENT '昵称',
    avatar VARCHAR(255) COMMENT '头像',
    phone VARCHAR(20) COMMENT '手机号码',
    email VARCHAR(100) COMMENT '邮箱',
    sex INT DEFAULT 0 COMMENT '性别（0：男，1：女）',
    status INT DEFAULT 1 COMMENT '状态（1：启用，0：禁用）',
    dept_id INT COMMENT '部门ID',
    remark VARCHAR(255) COMMENT '备注',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);

-- 角色表
CREATE TABLE IF NOT EXISTS sys_role (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '角色ID',
    name VARCHAR(50) NOT NULL COMMENT '角色名称',
    code VARCHAR(50) NOT NULL UNIQUE COMMENT '角色编码',
    status INT DEFAULT 1 COMMENT '状态（1：启用，0：禁用）',
    remark VARCHAR(255) COMMENT '备注',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);

-- 部门表
CREATE TABLE IF NOT EXISTS sys_dept (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '部门ID',
    name VARCHAR(100) NOT NULL COMMENT '部门名称',
    parent_id INT DEFAULT 0 COMMENT '上级部门ID',
    sort INT DEFAULT 0 COMMENT '排序',
    phone VARCHAR(20) COMMENT '联系电话',
    principal VARCHAR(50) COMMENT '负责人',
    email VARCHAR(100) COMMENT '邮箱',
    status INT DEFAULT 1 COMMENT '状态（1：启用，0：禁用）',
    type INT DEFAULT 3 COMMENT '部门类型',
    remark VARCHAR(255) COMMENT '备注',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);

-- 菜单表
CREATE TABLE IF NOT EXISTS sys_menu (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '菜单ID',
    parent_id INT DEFAULT 0 COMMENT '上级菜单ID',
    menu_type INT NOT NULL COMMENT '菜单类型（0：菜单，1：iframe，2：外链，3：按钮）',
    title VARCHAR(100) NOT NULL COMMENT '菜单名称',
    name VARCHAR(100) COMMENT '路由名称',
    path VARCHAR(255) COMMENT '路由路径',
    component VARCHAR(255) COMMENT '组件路径',
    `rank` INT COMMENT '排序',
    redirect VARCHAR(255) COMMENT '路由重定向',
    icon VARCHAR(100) COMMENT '菜单图标',
    extra_icon VARCHAR(100) COMMENT '右侧图标',
    enter_transition VARCHAR(100) COMMENT '进场动画',
    leave_transition VARCHAR(100) COMMENT '离场动画',
    active_path VARCHAR(255) COMMENT '菜单激活',
    auths VARCHAR(255) COMMENT '权限标识',
    frame_src VARCHAR(255) COMMENT 'iframe链接地址',
    frame_loading BOOLEAN DEFAULT TRUE COMMENT '加载动画',
    keep_alive BOOLEAN DEFAULT FALSE COMMENT '缓存页面',
    hidden_tag BOOLEAN DEFAULT FALSE COMMENT '隐藏标签页',
    fixed_tag BOOLEAN DEFAULT FALSE COMMENT '固定标签页',
    show_link BOOLEAN DEFAULT TRUE COMMENT '显示菜单',
    show_parent BOOLEAN DEFAULT FALSE COMMENT '显示父级菜单',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);

-- 角色菜单关联表
CREATE TABLE IF NOT EXISTS sys_role_menu (
    role_id INT NOT NULL COMMENT '角色ID',
    menu_id INT NOT NULL COMMENT '菜单ID',
    PRIMARY KEY (role_id, menu_id),
    FOREIGN KEY (role_id) REFERENCES sys_role(id),
    FOREIGN KEY (menu_id) REFERENCES sys_menu(id)
);

-- 用户角色关联表
CREATE TABLE IF NOT EXISTS sys_user_role (
    user_id INT NOT NULL COMMENT '用户ID',
    role_id INT NOT NULL COMMENT '角色ID',
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES sys_user(id),
    FOREIGN KEY (role_id) REFERENCES sys_role(id)
);

-- 在线用户表
CREATE TABLE IF NOT EXISTS sys_online_user (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
    username VARCHAR(50) NOT NULL COMMENT '用户名',
    ip VARCHAR(50) COMMENT 'IP地址',
    address VARCHAR(100) COMMENT '地址',
    `system` VARCHAR(50) COMMENT '操作系统',
    browser VARCHAR(50) COMMENT '浏览器',
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间'
);

-- 登录日志表
CREATE TABLE IF NOT EXISTS sys_login_log (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
    username VARCHAR(50) NOT NULL COMMENT '用户名',
    ip VARCHAR(50) COMMENT 'IP地址',
    address VARCHAR(100) COMMENT '地址',
    `system` VARCHAR(50) COMMENT '操作系统',
    browser VARCHAR(50) COMMENT '浏览器',
    status INT DEFAULT 1 COMMENT '状态',
    behavior VARCHAR(100) COMMENT '行为',
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间'
);

-- 操作日志表
CREATE TABLE IF NOT EXISTS sys_operation_log (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
    username VARCHAR(50) NOT NULL COMMENT '用户名',
    ip VARCHAR(50) COMMENT 'IP地址',
    address VARCHAR(100) COMMENT '地址',
    `system` VARCHAR(50) COMMENT '操作系统',
    browser VARCHAR(50) COMMENT '浏览器',
    `status` INT DEFAULT 1 COMMENT '状态',
    summary VARCHAR(255) COMMENT '摘要',
    module VARCHAR(100) COMMENT '模块',
    operating_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '操作时间'
);

-- 系统日志表
CREATE TABLE IF NOT EXISTS sys_system_log (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
    level INT DEFAULT 1 COMMENT '日志级别',
    module VARCHAR(100) COMMENT '模块',
    url VARCHAR(255) COMMENT '请求URL',
    method VARCHAR(20) COMMENT '请求方法',
    ip VARCHAR(50) COMMENT 'IP地址',
    address VARCHAR(100) COMMENT '地址',
    `system` VARCHAR(50) COMMENT '操作系统',
    browser VARCHAR(50) COMMENT '浏览器',
    takes_time INT COMMENT '耗时（毫秒）',
    request_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '请求时间'
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

-- 插入菜单数据（示例）
INSERT INTO sys_menu (id, parent_id, menu_type, title, name, path, component, rank, redirect, icon, extra_icon, enter_transition, leave_transition, active_path, auths, frame_src, frame_loading, keep_alive, hidden_tag, fixed_tag, show_link, show_parent) VALUES
(1, 0, 0, '系统管理', 'System', '/system', 'Layout', 1, '', 'system', '', '', '', '', '', '', true, false, false, false, true, false),
(2, 1, 0, '用户管理', 'User', '/system/user', '/system/user/index.vue', 1, '', 'user', '', '', '', '', '', '', true, false, false, false, true, false),
(3, 1, 0, '角色管理', 'Role', '/system/role', '/system/role/index.vue', 2, '', 'role', '', '', '', '', '', '', true, false, false, false, true, false),
(4, 1, 0, '菜单管理', 'Menu', '/system/menu', '/system/menu/index.vue', 3, '', 'menu', '', '', '', '', '', '', true, false, false, false, true, false),
(5, 1, 0, '部门管理', 'Dept', '/system/dept', '/system/dept/index.vue', 4, '', 'dept', '', '', '', '', '', '', true, false, false, false, true, false);

-- 插入角色菜单关联数据
INSERT INTO sys_role_menu (role_id, menu_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(2, 2);