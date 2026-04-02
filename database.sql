-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS `teach_salary_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE `teach_salary_db`;

-- 创建用户表
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
  `password` VARCHAR(255) NOT NULL COMMENT '密码（加密存储）',
  `nickname` VARCHAR(50) NOT NULL COMMENT '昵称',
  `avatar` VARCHAR(255) DEFAULT '' COMMENT '头像',
  `email` VARCHAR(100) DEFAULT '' COMMENT '邮箱',
  `phone` VARCHAR(20) DEFAULT '' COMMENT '电话',
  `roles` VARCHAR(255) NOT NULL DEFAULT '["user"]' COMMENT '角色（JSON格式）',
  `permissions` VARCHAR(255) NOT NULL DEFAULT '[]' COMMENT '权限（JSON格式）',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- 创建刷新令牌表
CREATE TABLE IF NOT EXISTS `refresh_tokens` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT UNSIGNED NOT NULL COMMENT '用户ID',
  `refresh_token` VARCHAR(255) NOT NULL COMMENT '刷新令牌',
  `expires_at` TIMESTAMP NOT NULL COMMENT '过期时间',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='刷新令牌表';

-- 创建索引
CREATE INDEX `idx_user_id` ON `refresh_tokens` (`user_id`);
CREATE INDEX `idx_refresh_token` ON `refresh_tokens` (`refresh_token`);

-- 插入测试数据
INSERT INTO `users` (`username`, `password`, `nickname`, `avatar`, `roles`, `permissions`) VALUES
('admin', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', '管理员', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait&image_size=square', '["admin"]', '["*:*:*"]'),
('user', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', '普通用户', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square', '["user"]', '[]');

-- 密码说明：上面的密码都是 "123456" 的 bcrypt 加密值