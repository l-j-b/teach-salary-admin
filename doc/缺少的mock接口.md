# 缺少的Mock接口清单

> 根据 `api接口文档.md` 与 `mock/` 目录下的模拟接口进行对比，以下接口在mock中**没有对应实现**。

---

## 一、登录模块 `/v1/login`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/login/in` | PUT | 用户登录 | ❌ 缺少 |
| 2 | `/v1/login/out` | PUT | 用户注销 | ❌ 缺少 |
| 3 | `/v1/login/code` | PUT | 获取验证码 | ❌ 缺少 |

**备注**：mock中仅有 `/login` (POST) 接口，但路径和方法与文档不符。

---

## 二、用户管理模块 `/v1/user`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/user/list` | GET | 获取用户列表 | ❌ 缺少 |
| 2 | `/v1/user/create` | POST | 创建用户 | ❌ 缺少 |
| 3 | `/v1/user/update/:id` | POST | 更新用户 | ❌ 缺少 |
| 4 | `/v1/user/delete/:id` | DELETE | 删除用户 | ❌ 缺少 |
| 5 | `/v1/user/accredit` | POST | 用户授权 | ❌ 缺少 |

**备注**：mock中 `/user` (POST) 接口路径与文档不符。

---

## 三、用户信息模块 `/v1/userInfo`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/userInfo/list` | GET | 获取用户信息列表 | ❌ 缺少 |
| 2 | `/v1/userInfo/create` | POST | 创建用户信息 | ❌ 缺少 |
| 3 | `/v1/userInfo/update` | POST | 更新用户信息 | ❌ 缺少 |
| 4 | `/v1/userInfo/delete` | POST | 删除用户信息 | ❌ 缺少 |

---

## 四、角色管理模块 `/v1/roleInfo`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/roleInfo/list` | GET | 获取角色列表 | ❌ 缺少 |
| 2 | `/v1/roleInfo/create` | POST | 创建角色 | ❌ 缺少 |
| 3 | `/v1/roleInfo/update` | POST | 更新角色 | ❌ 缺少 |
| 4 | `/v1/roleInfo/delete` | DELETE | 删除角色 | ❌ 缺少 |

**备注**：mock中 `/role` (POST) 接口路径与文档不符。

---

## 五、菜单管理模块 `/v1/sysMenu`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysMenu/list` | GET | 获取菜单列表 | ❌ 缺少 |
| 2 | `/v1/sysMenu/create` | POST | 创建菜单 | ❌ 缺少 |
| 3 | `/v1/sysMenu/update` | POST | 更新菜单 | ❌ 缺少 |
| 4 | `/v1/sysMenu/delete` | DELETE | 删除菜单 | ❌ 缺少 |
| 5 | `/v1/sysMenu/getMenuRouter` | GET | 获取路由菜单 | ❌ 缺少 |
| 6 | `/v1/sysMenu/getMenus` | GET | 获取菜单管理列表 | ❌ 缺少 |
| 7 | `/v1/sysMenu/getMenusByModule` | GET | 获取菜单（包含模块） | ❌ 缺少 |

**备注**：mock中 `/menu` (POST) 接口路径与文档不符。

---

## 六、模块管理模块 `/v1/sysModule`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysModule/list` | GET | 获取模块列表 | ❌ 缺少 |
| 2 | `/v1/sysModule/create` | POST | 创建模块 | ❌ 缺少 |
| 3 | `/v1/sysModule/update` | POST | 更新模块 | ❌ 缺少 |
| 4 | `/v1/sysModule/delete` | DELETE | 删除模块 | ❌ 缺少 |

---

## 七、权限管理模块 `/v1/permission`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/permission/getRolePermission` | GET | 获取角色权限 | ❌ 缺少 |
| 2 | `/v1/permission/setRolePermission` | POST | 设置角色权限 | ❌ 缺少 |

---

## 八、字典管理模块 `/v1/dictInfo`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/dictInfo/list` | GET | 获取字典类型列表 | ❌ 缺少 |
| 2 | `/v1/dictInfo/create` | POST | 创建字典类型 | ❌ 缺少 |
| 3 | `/v1/dictInfo/update` | POST | 更新字典类型 | ❌ 缺少 |
| 4 | `/v1/dictInfo/delete` | DELETE | 删除字典类型 | ❌ 缺少 |
| 5 | `/v1/dictInfo/dictList` | GET | 获取字典数据列表 | ❌ 缺少 |
| 6 | `/v1/dictInfo/createDictItem` | POST | 创建字典数据 | ❌ 缺少 |
| 7 | `/v1/dictInfo/updateDictItem` | POST | 更新字典数据 | ❌ 缺少 |
| 8 | `/v1/dictInfo/deleteDictItem` | POST | 删除字典数据 | ❌ 缺少 |

---

## 九、会议室管理模块 `/v1/meetroom`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/meetroom/list` | GET | 获取会议室列表 | ❌ 缺少 |
| 2 | `/v1/meetroom/get` | GET | 获取会议室详情 | ❌ 缺少 |
| 3 | `/v1/meetroom/insert` | POST | 创建会议室 | ❌ 缺少 |
| 4 | `/v1/meetroom/save` | POST | 保存会议室 | ❌ 缺少 |
| 5 | `/v1/meetroom/update` | POST | 更新会议室 | ❌ 缺少 |

---

## 十、会议室布局管理模块 `/v1/meetroomlayout`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/meetroomlayout/list` | GET | 获取会议室布局列表 | ❌ 缺少 |
| 2 | `/v1/meetroomlayout/getlayoutByMeetRoomId` | GET | 根据会议室ID获取布局 | ❌ 缺少 |
| 3 | `/v1/meetroomlayout/create` | POST | 创建会议室布局 | ❌ 缺少 |
| 4 | `/v1/meetroomlayout/delMeetingRoomLayout` | POST | 删除会议室布局 | ❌ 缺少 |
| 5 | `/v1/meetroomlayout/update` | POST | 更新会议室布局 | ❌ 缺少 |

---

## 十一、验证码模块 `/v1/captcha`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/captcha/generate` | GET | 生成验证码 | ❌ 缺少 |

---

## 十二、演示模块 `/v1/demo`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/demo/in` | GET | 测试接口 | ❌ 缺少 |
| 2 | `/v1/demo/login` | POST | 登录接口 | ❌ 缺少 |
| 3 | `/v1/demo/loginOut` | DELETE | 注销接口 | ❌ 缺少 |

---

## 十三、结算管理模块 `/v1/busCheckout`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/busCheckout/list` | GET | 获取结算列表 | ❌ 缺少 |
| 2 | `/v1/busCheckout/detail/:id` | GET | 获取结算详情 | ❌ 缺少 |
| 3 | `/v1/busCheckout/create` | POST | 创建结算 | ❌ 缺少 |
| 4 | `/v1/busCheckout/update/:id` | POST | 更新结算 | ❌ 缺少 |
| 5 | `/v1/busCheckout/delete/:id` | DELETE | 删除结算 | ❌ 缺少 |

---

## 十四、课程管理模块 `/v1/busCourse`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/busCourse/list` | GET | 获取课程列表 | ❌ 缺少 |
| 2 | `/v1/busCourse/detail/:id` | GET | 获取课程详情 | ❌ 缺少 |
| 3 | `/v1/busCourse/create` | POST | 创建课程 | ❌ 缺少 |
| 4 | `/v1/busCourse/update/:id` | POST | 更新课程 | ❌ 缺少 |
| 5 | `/v1/busCourse/delete/:id` | DELETE | 删除课程 | ❌ 缺少 |

---

## 十五、课程安排模块 `/v1/busCourseSchedule`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/busCourseSchedule/list` | GET | 获取课程安排列表 | ❌ 缺少 |
| 2 | `/v1/busCourseSchedule/detail/:id` | GET | 获取课程安排详情 | ❌ 缺少 |
| 3 | `/v1/busCourseSchedule/create` | POST | 创建课程安排 | ❌ 缺少 |
| 4 | `/v1/busCourseSchedule/update/:id` | POST | 更新课程安排 | ❌ 缺少 |
| 5 | `/v1/busCourseSchedule/delete/:id` | DELETE | 删除课程安排 | ❌ 缺少 |

---

## 十六、课节管理模块 `/v1/busCourseSection`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/busCourseSection/list` | GET | 获取课节列表 | ❌ 缺少 |
| 2 | `/v1/busCourseSection/detail/:id` | GET | 获取课节详情 | ❌ 缺少 |
| 3 | `/v1/busCourseSection/create` | POST | 创建课节 | ❌ 缺少 |
| 4 | `/v1/busCourseSection/update/:id` | POST | 更新课节 | ❌ 缺少 |
| 5 | `/v1/busCourseSection/delete/:id` | DELETE | 删除课节 | ❌ 缺少 |

---

## 十七、分组管理模块 `/v1/busGroup`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/busGroup/list` | GET | 获取分组列表 | ❌ 缺少 |
| 2 | `/v1/busGroup/detail/:id` | GET | 获取分组详情 | ❌ 缺少 |
| 3 | `/v1/busGroup/create` | POST | 创建分组 | ❌ 缺少 |
| 4 | `/v1/busGroup/update/:id` | POST | 更新分组 | ❌ 缺少 |
| 5 | `/v1/busGroup/delete/:id` | DELETE | 删除分组 | ❌ 缺少 |

---

## 十八、学生管理模块 `/v1/busStudent`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/busStudent/list` | GET | 获取学生列表 | ❌ 缺少 |
| 2 | `/v1/busStudent/detail/:id` | GET | 获取学生详情 | ❌ 缺少 |
| 3 | `/v1/busStudent/create` | POST | 创建学生 | ❌ 缺少 |
| 4 | `/v1/busStudent/update/:id` | POST | 更新学生 | ❌ 缺少 |
| 5 | `/v1/busStudent/delete/:id` | DELETE | 删除学生 | ❌ 缺少 |

---

## 十九、部门管理模块 `/v1/sysDept`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysDept/list` | GET | 获取部门列表 | ❌ 缺少 |
| 2 | `/v1/sysDept/detail/:id` | GET | 获取部门详情 | ❌ 缺少 |
| 3 | `/v1/sysDept/create` | POST | 创建部门 | ❌ 缺少 |
| 4 | `/v1/sysDept/update/:id` | POST | 更新部门 | ❌ 缺少 |
| 5 | `/v1/sysDept/delete/:id` | DELETE | 删除部门 | ❌ 缺少 |

**备注**：mock中 `/dept` (POST) 接口路径与文档不符。

---

## 二十、角色管理模块（新） `/v1/sysRole`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysRole/list` | GET | 获取角色列表 | ❌ 缺少 |
| 2 | `/v1/sysRole/detail/:id` | GET | 获取角色详情 | ❌ 缺少 |
| 3 | `/v1/sysRole/create` | POST | 创建角色 | ❌ 缺少 |
| 4 | `/v1/sysRole/update/:id` | POST | 更新角色 | ❌ 缺少 |
| 5 | `/v1/sysRole/delete/:id` | DELETE | 删除角色 | ❌ 缺少 |

---

## 二十一、用户管理模块（新） `/v1/sysUser`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysUser/list` | GET | 获取用户列表 | ❌ 缺少 |
| 2 | `/v1/sysUser/detail/:id` | GET | 获取用户详情 | ❌ 缺少 |
| 3 | `/v1/sysUser/create` | POST | 创建用户 | ❌ 缺少 |
| 4 | `/v1/sysUser/update/:id` | POST | 更新用户 | ❌ 缺少 |
| 5 | `/v1/sysUser/delete/:id` | DELETE | 删除用户 | ❌ 缺少 |

---

## 二十二、用户管理模块（扩展） `/v1/sysUsers`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysUsers/list` | GET | 获取用户列表 | ❌ 缺少 |
| 2 | `/v1/sysUsers/detail/:id` | GET | 获取用户详情 | ❌ 缺少 |
| 3 | `/v1/sysUsers/create` | POST | 创建用户 | ❌ 缺少 |
| 4 | `/v1/sysUsers/update/:id` | POST | 更新用户 | ❌ 缺少 |
| 5 | `/v1/sysUsers/delete/:id` | DELETE | 删除用户 | ❌ 缺少 |

---

## 二十三、登录日志模块 `/v1/sysLoginLog`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysLoginLog/list` | GET | 获取登录日志列表 | ❌ 缺少 |
| 2 | `/v1/sysLoginLog/detail/:id` | GET | 获取登录日志详情 | ❌ 缺少 |
| 3 | `/v1/sysLoginLog/create` | POST | 创建登录日志 | ❌ 缺少 |
| 4 | `/v1/sysLoginLog/update/:id` | POST | 更新登录日志 | ❌ 缺少 |
| 5 | `/v1/sysLoginLog/delete/:id` | DELETE | 删除登录日志 | ❌ 缺少 |

**备注**：mock中 `/login-logs` (POST) 接口路径与文档不符。

---

## 二十四、菜单管理模块（新） `/v1/sysMenuNew`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysMenuNew/list` | GET | 获取菜单列表 | ❌ 缺少 |
| 2 | `/v1/sysMenuNew/detail/:id` | GET | 获取菜单详情 | ❌ 缺少 |
| 3 | `/v1/sysMenuNew/create` | POST | 创建菜单 | ❌ 缺少 |
| 4 | `/v1/sysMenuNew/update/:id` | POST | 更新菜单 | ❌ 缺少 |
| 5 | `/v1/sysMenuNew/delete/:id` | DELETE | 删除菜单 | ❌ 缺少 |

---

## 二十五、在线用户模块 `/v1/sysOnlineUser`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysOnlineUser/list` | GET | 获取在线用户列表 | ❌ 缺少 |
| 2 | `/v1/sysOnlineUser/detail/:id` | GET | 获取在线用户详情 | ❌ 缺少 |
| 3 | `/v1/sysOnlineUser/create` | POST | 创建在线用户记录 | ❌ 缺少 |
| 4 | `/v1/sysOnlineUser/update/:id` | POST | 更新在线用户记录 | ❌ 缺少 |
| 5 | `/v1/sysOnlineUser/delete/:id` | DELETE | 删除在线用户记录 | ❌ 缺少 |

**备注**：mock中 `/online-logs` (POST) 接口路径与文档不符。

---

## 二十六、操作日志模块 `/v1/sysOperationLog`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysOperationLog/list` | GET | 获取操作日志列表 | ❌ 缺少 |
| 2 | `/v1/sysOperationLog/detail/:id` | GET | 获取操作日志详情 | ❌ 缺少 |
| 3 | `/v1/sysOperationLog/create` | POST | 创建操作日志 | ❌ 缺少 |
| 4 | `/v1/sysOperationLog/update/:id` | POST | 更新操作日志 | ❌ 缺少 |
| 5 | `/v1/sysOperationLog/delete/:id` | DELETE | 删除操作日志 | ❌ 缺少 |

**备注**：mock中 `/operation-logs` (POST) 接口路径与文档不符。

---

## 二十七、角色菜单关联模块 `/v1/sysRoleMenu`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysRoleMenu/list` | GET | 获取角色菜单关联列表 | ❌ 缺少 |
| 2 | `/v1/sysRoleMenu/detail/:roleId/:menuId` | GET | 获取角色菜单关联详情 | ❌ 缺少 |
| 3 | `/v1/sysRoleMenu/create` | POST | 创建角色菜单关联 | ❌ 缺少 |
| 4 | `/v1/sysRoleMenu/batchCreate` | POST | 批量创建角色菜单关联 | ❌ 缺少 |
| 5 | `/v1/sysRoleMenu/delete/:roleId/:menuId` | DELETE | 删除角色菜单关联 | ❌ 缺少 |
| 6 | `/v1/sysRoleMenu/deleteByRoleId/:roleId` | DELETE | 根据角色ID删除所有关联 | ❌ 缺少 |

**备注**：mock中 `/role-menu` 和 `/role-menu-ids` 接口路径与文档不符。

---

## 二十八、系统日志模块 `/v1/sysSystemLog`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysSystemLog/list` | GET | 获取系统日志列表 | ❌ 缺少 |
| 2 | `/v1/sysSystemLog/detail/:id` | GET | 获取系统日志详情 | ❌ 缺少 |
| 3 | `/v1/sysSystemLog/create` | POST | 创建系统日志 | ❌ 缺少 |
| 4 | `/v1/sysSystemLog/update/:id` | POST | 更新系统日志 | ❌ 缺少 |
| 5 | `/v1/sysSystemLog/delete/:id` | DELETE | 删除系统日志 | ❌ 缺少 |

**备注**：mock中 `/system-logs` 和 `/system-logs-detail` 接口路径与文档不符。

---

## 二十九、用户角色关联模块 `/v1/sysUserRole`

| 序号 | 接口路径 | 请求方法 | 说明 | 当前状态 |
|------|----------|----------|------|----------|
| 1 | `/v1/sysUserRole/list` | GET | 获取用户角色关联列表 | ❌ 缺少 |
| 2 | `/v1/sysUserRole/detail/:userId/:roleId` | GET | 获取用户角色关联详情 | ❌ 缺少 |
| 3 | `/v1/sysUserRole/create` | POST | 创建用户角色关联 | ❌ 缺少 |
| 4 | `/v1/sysUserRole/batchCreate` | POST | 批量创建用户角色关联 | ❌ 缺少 |
| 5 | `/v1/sysUserRole/delete/:userId/:roleId` | DELETE | 删除用户角色关联 | ❌ 缺少 |
| 6 | `/v1/sysUserRole/deleteByUserId/:userId` | DELETE | 根据用户ID删除所有关联 | ❌ 缺少 |

**备注**：mock中 `/user-role/ids` 接口路径与文档不符。

---

## 三十、已有但路径不符的Mock接口

以下接口在mock中存在，但路径或方法与接口文档不符：

| Mock接口 | Mock方法 | 文档对应接口 | 文档方法 | 差异说明 |
|----------|----------|--------------|----------|----------|
| `/login` | POST | `/v1/login/in` | PUT | 路径和方法都不符 |
| `/refresh-token` | POST | 无 | - | 文档中无此接口 |
| `/get-async-routes` | GET | 无 | - | 文档中无此接口 |
| `/user` | POST | `/v1/user/list` | GET | 路径和方法都不符 |
| `/role/all-list` | GET | 无 | - | 文档中无此接口 |
| `/user-role/ids` | POST | `/v1/sysUserRole/*` | - | 路径不符 |
| `/role` | POST | `/v1/roleInfo/list` | GET | 路径和方法都不符 |
| `/role-menu` | POST | `/v1/sysRoleMenu/*` | - | 路径不符 |
| `/role-menu-ids` | POST | `/v1/sysRoleMenu/*` | - | 路径不符 |
| `/menu` | POST | `/v1/sysMenu/list` | GET | 路径和方法都不符 |
| `/dept` | POST | `/v1/sysDept/list` | GET | 路径和方法都不符 |
| `/online-logs` | POST | `/v1/sysOnlineUser/list` | GET | 路径和方法都不符 |
| `/login-logs` | POST | `/v1/sysLoginLog/list` | GET | 路径和方法都不符 |
| `/operation-logs` | POST | `/v1/sysOperationLog/list` | GET | 路径和方法都不符 |
| `/system-logs` | POST | `/v1/sysSystemLog/list` | GET | 路径和方法都不符 |
| `/system-logs-detail` | POST | `/v1/sysSystemLog/detail/:id` | GET | 路径和方法都不符 |
| `/get-map-info` | GET | 无 | - | 文档中无此接口 |
| `/get-card-list` | POST | 无 | - | 文档中无此接口 |
| `/mine` | GET | 无 | - | 文档中无此接口 |
| `/mine-logs` | GET | 无 | - | 文档中无此接口 |

---

## 统计汇总

| 类别 | 数量 |
|------|------|
| **接口文档总接口数** | 约 140+ 个 |
| **Mock中完全匹配的接口** | 0 个 |
| **Mock中路径/方法不符的接口** | 20 个 |
| **Mock中独有的接口** | 7 个 |
| **文档中有但Mock中缺少的接口** | 约 120+ 个 |

---

## 建议

1. **统一接口规范**：建议按照接口文档 `/v1` 前缀规范重新整理mock接口
2. **补充缺少的接口**：优先补充核心业务模块（用户、角色、菜单、部门等）的CRUD接口
3. **调整请求方法**：将部分POST请求改为GET（如列表查询接口）
4. **保持响应格式一致**：统一使用 `code: 20000` 作为成功状态码

---

*文档生成时间：2026-04-03*
