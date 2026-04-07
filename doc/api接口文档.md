# API接口文档

## 基础信息

- **基础路径**: `/v1`
- **所有接口都需要添加版本号前缀** **`/v1`**

## 通用响应格式

```json
{
  "code": 20000,
  "msg": "操作成功",
  "data": {}
}
```

## 错误码说明

- `20000`: 成功
- `40000`: 失败/错误

***

## 1. 登录模块 `/v1/login`

### 1.1 用户登录

- **接口路径**: `/v1/login/in`
- **请求方法**: `PUT`
- **请求参数**:

```json
{
  "username": "用户名",
  "password": "密码"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "登录成功!",
  "token": "jwt_token_string"
}
```

### 1.2 用户注销

- **接口路径**: `/v1/login/out`
- **请求方法**: `PUT`
- **请求头**: `authorization: token`
- **响应示例**:

```json
{
  "code": 20000,
  "msg": "注销成功!"
}
```

### 1.3 获取验证码

- **接口路径**: `/v1/login/code`
- **请求方法**: `PUT`
- **请求头**: `authorization: token`
- **响应示例**:

```json
{
  "code": 20000,
  "msg": "注销成功!"
}
```

***

## 2. 用户管理模块 `/v1/user`

### 2.1 获取用户列表

- **接口路径**: `/v1/user/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `userName`: 用户名（可选）
    - `displayName`: 显示名称（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "list": []
  }
}
```

### 2.2 创建用户

- **接口路径**: `/v1/user/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "userName": "用户名",
  "passWord": "密码",
  "displayName": "显示名称",
  "sex": "性别",
  "phone": "手机号",
  "status": "状态"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户创建成功!",
  "data": {
    "id": "用户ID"
  }
}
```

### 2.3 更新用户

- **接口路径**: `/v1/user/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 用户ID
- **请求参数**:

```json
{
  "userName": "用户名",
  "displayName": "显示名称",
  "sex": "性别",
  "phone": "手机号",
  "status": "状态"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户更新成功!",
  "data": {
    "id": "用户ID"
  }
}
```

### 2.4 删除用户

- **接口路径**: `/v1/user/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 用户ID
- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户删除成功!"
}
```

### 2.5 用户授权

- **接口路径**: `/v1/user/accredit`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "用户ID"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色删除成功!",
  "data": {
    "id": "用户ID",
    "create_time": "创建时间"
  }
}
```

***

## 3. 用户信息模块 `/v1/userInfo`

### 3.1 获取用户信息列表

- **接口路径**: `/v1/userInfo/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `userName`: 用户名（可选）
    - `displayName`: 显示名称（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "list": []
  }
}
```

### 3.2 创建用户信息

- **接口路径**: `/v1/userInfo/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "userName": "用户名",
  "passWord": "密码",
  "displayName": "显示名称",
  "sex": "性别",
  "phone": "手机号",
  "status": "状态",
  "sort": "排序"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色创建成功!",
  "data": {
    "id": "用户ID"
  }
}
```

### 3.3 更新用户信息

- **接口路径**: `/v1/userInfo/update`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "用户ID",
  "userName": "用户名",
  "passWord": "密码",
  "displayName": "显示名称",
  "status": "状态",
  "sort": "排序",
  "description": "描述"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色更新成功!",
  "data": {
    "id": "用户ID",
    "update_time": "更新时间"
  }
}
```

### 3.4 删除用户信息

- **接口路径**: `/v1/userInfo/delete`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "用户ID"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色删除成功!",
  "data": {
    "id": "用户ID",
    "create_time": "删除时间"
  }
}
```

***

## 4. 角色管理模块 `/v1/roleInfo`

### 4.1 获取角色列表

- **接口路径**: `/v1/roleInfo/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `name`: 角色名称（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "list": []
  }
}
```

### 4.2 创建角色

- **接口路径**: `/v1/roleInfo/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "角色名称",
  "code": "角色编码",
  "dataScope": "数据范围",
  "description": "描述",
  "status": "状态",
  "sort": "排序"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色创建成功!",
  "data": {}
}
```

### 4.3 更新角色

- **接口路径**: `/v1/roleInfo/update`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "角色ID",
  "name": "角色名称",
  "code": "角色编码",
  "dataScope": "数据范围",
  "description": "描述",
  "status": "状态",
  "sort": "排序"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色更新成功!",
  "data": {
    "id": "角色ID",
    "updateTime": "更新时间"
  }
}
```

### 4.4 删除角色

- **接口路径**: `/v1/roleInfo/delete`
- **请求方法**: `DELETE`
- **请求参数**:

```json
{
  "id": "角色ID（多个用逗号分隔）"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色删除成功!",
  "data": {
    "id": "角色ID"
  }
}
```

***

## 5. 菜单管理模块 `/v1/sysMenu`

### 5.1 获取菜单列表

- **接口路径**: `/v1/sysMenu/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `menuName`: 菜单名称（可选）
    - `moduleId`: 模块ID（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "items": []
  }
}
```

### 5.2 创建菜单

- **接口路径**: `/v1/sysMenu/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "菜单名称",
  "path": "路径",
  "parentId": "父级ID",
  "sort": "排序",
  "visible": "是否可见",
  "remark": "备注",
  "moduleId": "模块ID",
  "icon": "图标",
  "component": "组件",
  "redirect": "重定向",
  "keepAlive": "是否缓存",
  "type": "类型",
  "alwaysShow": "总是显示"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "菜单创建成功!",
  "data": {}
}
```

### 5.3 更新菜单

- **接口路径**: `/v1/sysMenu/update`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "菜单ID",
  "name": "菜单名称",
  "path": "路径",
  "parentId": "父级ID",
  "sort": "排序",
  "visible": "是否可见",
  "remark": "备注",
  "moduleId": "模块ID",
  "icon": "图标",
  "component": "组件",
  "redirect": "重定向",
  "keepAlive": "是否缓存",
  "type": "类型",
  "alwaysShow": "总是显示"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "菜单更新成功!",
  "data": {
    "id": "菜单ID",
    "update_time": "更新时间"
  }
}
```

### 5.4 删除菜单

- **接口路径**: `/v1/sysMenu/delete`
- **请求方法**: `DELETE`
- **请求参数**: `id` - 菜单ID（query参数）
- **响应示例**:

```json
{
  "code": 20000,
  "msg": "菜单删除成功!",
  "data": {
    "id": "菜单ID"
  }
}
```

### 5.5 获取路由菜单

- **接口路径**: `/v1/sysMenu/getMenuRouter`
- **请求方法**: `GET`
- **响应示例**:

```json
{
  "code": 20000,
  "data": []
}
```

### 5.6 获取菜单管理列表

- **接口路径**: `/v1/sysMenu/getMenus`
- **请求方法**: `GET`
- **响应示例**:

```json
{
  "code": 20000,
  "data": []
}
```

### 5.7 获取菜单（包含模块）

- **接口路径**: `/v1/sysMenu/getMenusByModule`
- **请求方法**: `GET`
- **响应示例**:

```json
{
  "code": 20000,
  "data": []
}
```

***

## 6. 模块管理模块 `/v1/sysModule`

### 6.1 获取模块列表

- **接口路径**: `/v1/sysModule/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `moduleValue`: 模块值（可选）
    - `moduleName`: 模块名称（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "list": []
  }
}
```

### 6.2 创建模块

- **接口路径**: `/v1/sysModule/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "moduleName": "模块名称",
  "moduleValue": "模块值",
  "status": "状态"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "模块创建成功!",
  "data": {
    "id": "模块ID"
  }
}
```

### 6.3 更新模块

- **接口路径**: `/v1/sysModule/update`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "模块ID",
  "moduleName": "模块名称",
  "moduleValue": "模块值",
  "status": "状态",
  "moduleUrl": "模块URL",
  "component": "组件"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "模块更新成功!",
  "data": {
    "id": "模块ID",
    "update_time": "更新时间"
  }
}
```

### 6.4 删除模块

- **接口路径**: `/v1/sysModule/delete`
- **请求方法**: `DELETE`
- **请求参数**: `id` - 模块ID（query参数）
- **响应示例**:

```json
{
  "code": 20000,
  "msg": "模块删除成功!",
  "data": {
    "id": "模块ID"
  }
}
```

***

## 7. 权限管理模块 `/v1/permission`

### 7.1 获取角色权限

- **接口路径**: `/v1/permission/getRolePermission`
- **请求方法**: `GET`
- **请求参数**: `roleId` - 角色ID（query参数）
- **响应示例**:

```json
{
  "code": 20000,
  "data": []
}
```

### 7.2 设置角色权限

- **接口路径**: `/v1/permission/setRolePermission`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "roleId": "角色ID",
  "menuIds": ["菜单ID1", "菜单ID2"],
  "id": "权限ID（可选）"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色权限成功!",
  "data": {
    "permissionId": "权限ID"
  }
}
```

***

## 8. 字典管理模块 `/v1/dictInfo`

### 8.1 获取字典类型列表

- **接口路径**: `/v1/dictInfo/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `keywords`: 关键字（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "list": []
  }
}
```

### 8.2 创建字典类型

- **接口路径**: `/v1/dictInfo/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "字典名称",
  "code": "字典编码",
  "remark": "备注",
  "status": "状态"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "字典创建成功!",
  "data": {}
}
```

### 8.3 更新字典类型

- **接口路径**: `/v1/dictInfo/update`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "字典ID",
  "name": "字典名称",
  "code": "字典编码",
  "remark": "备注",
  "status": "状态"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "字典更新成功!",
  "data": {
    "id": "字典ID",
    "updateTime": "更新时间"
  }
}
```

### 8.4 删除字典类型

- **接口路径**: `/v1/dictInfo/delete`
- **请求方法**: `DELETE`
- **请求参数**:

```json
{
  "ids": "字典ID（多个用逗号分隔）"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "字典删除成功!",
  "data": {
    "id": "字典ID"
  }
}
```

### 8.5 获取字典数据列表

- **接口路径**: `/v1/dictInfo/dictList`
- **请求方法**: `GET`
- **请求参数**:
    - `dictId`: 字典ID（必填）
    - `page`: 页码
    - `limit`: 每页数量
    - `name`: 名称（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "list": []
  }
}
```

### 8.6 创建字典数据

- **接口路径**: `/v1/dictInfo/createDictItem`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "名称",
  "value": "值",
  "sort": "排序",
  "status": "状态",
  "remark": "备注",
  "dictId": "字典ID"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "字典数据创建成功!",
  "data": {}
}
```

### 8.7 更新字典数据

- **接口路径**: `/v1/dictInfo/updateDictItem`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "id": "字典数据ID",
  "name": "名称",
  "value": "值",
  "sort": "排序",
  "status": "状态",
  "remark": "备注"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "字典数据更新成功!",
  "data": {
    "id": "字典数据ID"
  }
}
```

### 8.8 删除字典数据

- **接口路径**: `/v1/dictInfo/deleteDictItem`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "ids": "字典数据ID（多个用逗号分隔）"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "字典删除成功!",
  "data": {
    "id": "字典数据ID"
  }
}
```

***

## 9. 会议室管理模块 `/v1/meetroom`

### 9.1 获取会议室列表

- **接口路径**: `/v1/meetroom/list`
- **请求方法**: `GET`
- **响应示例**:

```json
{
  "code": 200,
  "data": []
}
```

### 9.2 获取会议室详情

- **接口路径**: `/v1/meetroom/get`
- **请求方法**: `GET`
- **请求参数**: `id` - 会议室ID（query参数）
- **响应示例**:

```json
{
  "code": 200,
  "msg": "查询成功",
  "data": {}
}
```

### 9.3 创建会议室

- **接口路径**: `/v1/meetroom/insert`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "会议室名称",
  "content": "内容"
}
```

- **响应示例**:

```json
{
  "code": 200,
  "msg": "创建成功"
}
```

### 9.4 保存会议室

- **接口路径**: `/v1/meetroom/save`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "layout_name": "布局名称",
  "cells": "座位信息"
}
```

- **响应示例**:

```json
{
  "code": 200,
  "msg": "保存成功",
  "data": {
    "id": "会议室ID"
  }
}
```

### 9.5 更新会议室

- **接口路径**: `/v1/meetroom/update`
- **请求方法**: `POST`
- **请求参数**: `id` - 会议室ID（query参数）
- **请求体**: 需要更新的字段
- **响应示例**:

```json
{
  "code": 200,
  "msg": "更新成功"
}
```

***

## 10. 会议室布局管理模块 `/v1/meetroomlayout`

### 10.1 获取会议室布局列表

- **接口路径**: `/v1/meetroomlayout/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `limit`: 每页数量
    - `userName`: 用户名（可选）
    - `displayName`: 显示名称（可选）
    - `status`: 状态（可选，0或1）
- **响应示例**:

```json
{
  "code": 20000,
  "data": {
    "total": 100,
    "items": []
  }
}
```

### 10.2 根据会议室ID获取布局

- **接口路径**: `/v1/meetroomlayout/getlayoutByMeetRoomId`
- **请求方法**: `GET`
- **请求参数**: `id` - 会议室ID（query参数）
- **响应示例**:

```json
{
  "code": 200,
  "msg": "查询成功",
  "data": []
}
```

### 10.3 创建会议室布局

- **接口路径**: `/v1/meetroomlayout/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "布局名称",
  "img": "图片",
  "cells": "座位信息",
  "meetRoomId": "会议室ID",
  "createUserId": "创建用户ID"
}
```

- **响应示例**:

```json
{
  "code": 200,
  "msg": "保存成功!",
  "data": {
    "id": "布局ID"
  }
}
```

### 10.4 删除会议室布局

- **接口路径**: `/v1/meetroomlayout/delMeetingRoomLayout`
- **请求方法**: `POST`
- **请求参数**: `id` - 布局ID（query参数）
- **响应示例**:

```json
{
  "code": 200,
  "msg": "删除成功!"
}
```

### 10.5 更新会议室布局

- **接口路径**: `/v1/meetroomlayout/update`
- **请求方法**: `POST`
- **请求参数**: `id` - 布局ID（query参数）
- **请求体**: 需要更新的字段
- **响应示例**:

```json
{
  "code": 200,
  "msg": "更新成功!",
  "data": {
    "id": "布局ID"
  }
}
```

***

## 11. 验证码模块 `/v1/captcha`

### 11.1 生成验证码

- **接口路径**: `/v1/captcha/generate`
- **请求方法**: `GET`
- **响应类型**: `image/svg+xml`
- **响应示例**: SVG格式的验证码图片

***

## 12. 演示模块 `/v1/demo`

### 12.1 测试接口

- **接口路径**: `/v1/demo/in`
- **请求方法**: `GET`
- **响应示例**:

```json
{
  "text": "fdf"
}
```

### 12.2 登录接口

- **接口路径**: `/v1/demo/login`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "username": "用户名",
  "password": "密码"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "登录成功!",
  "token": "jwt_token_string"
}
```

### 12.3 注销接口

- **接口路径**: `/v1/demo/loginOut`
- **请求方法**: `DELETE`
- **请求头**: `authorization: token`
- **响应示例**:

```json
{
  "code": 20000,
  "msg": "注销成功!"
}
```

***

## 13. 结算管理模块 `/v1/busCheckout`

### 13.1 获取结算列表

- **接口路径**: `/v1/busCheckout/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 13.2 获取结算详情

- **接口路径**: `/v1/busCheckout/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 结算ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 13.3 创建结算

- **接口路径**: `/v1/busCheckout/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "title": "结算标题",
  "type": "结算类型",
  "totalFee": 1000,
  "totalHour": 10,
  "beginDateTime": "2026-04-01 00:00:00",
  "endDateTime": "2026-04-30 23:59:59",
  "courseIds": ["course1", "course2"],
  "sectionIds": ["section1", "section2"],
  "scheduleIds": ["schedule1", "schedule2"],
  "studentIds": ["student1", "student2"],
  "userId": "user1"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "结算创建成功!",
  "data": {
    "id": "结算ID"
  }
}
```

### 13.4 更新结算

- **接口路径**: `/v1/busCheckout/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 结算ID
- **请求参数**:

```json
{
  "title": "新结算标题",
  "totalFee": 1500,
  "totalHour": 15
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "结算更新成功!",
  "data": {
    "id": "结算ID",
    "title": "新结算标题",
    "totalFee": 1500,
    "totalHour": 15
  }
}
```

### 13.5 删除结算

- **接口路径**: `/v1/busCheckout/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 结算ID
- **响应示例**:

```json
{
  "message": "结算删除成功"
}
```

***

## 14. 课程管理模块 `/v1/busCourse`

### 14.1 获取课程列表

- **接口路径**: `/v1/busCourse/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 14.2 获取课程详情

- **接口路径**: `/v1/busCourse/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 课程ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 14.3 创建课程

- **接口路径**: `/v1/busCourse/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "课程名称",
  "subjectId": "科目ID",
  "address": "上课地址",
  "beginTime": "09:00",
  "endTime": "11:00",
  "beginDate": "2026-04-01",
  "endDate": "2026-06-30",
  "totalHour": 40,
  "totalFee": 4000,
  "hourlyfee": 100,
  "content": "课程内容",
  "userId": "user1"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "课程创建成功!",
  "data": {
    "id": "课程ID"
  }
}
```

### 14.4 更新课程

- **接口路径**: `/v1/busCourse/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 课程ID
- **请求参数**:

```json
{
  "name": "新课程名称",
  "hourlyfee": 120
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "课程更新成功!",
  "data": {
    "id": "课程ID",
    "name": "新课程名称",
    "hourlyfee": 120
  }
}
```

### 14.5 删除课程

- **接口路径**: `/v1/busCourse/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 课程ID
- **响应示例**:

```json
{
  "message": "课程删除成功"
}
```

***

## 15. 课程安排模块 `/v1/busCourseSchedule`

### 15.1 获取课程安排列表

- **接口路径**: `/v1/busCourseSchedule/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 15.2 获取课程安排详情

- **接口路径**: `/v1/busCourseSchedule/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 课程安排ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 15.3 创建课程安排

- **接口路径**: `/v1/busCourseSchedule/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "hourlyfee": 100,
  "totalFee": 200,
  "totalHour": 2,
  "subjectId": "科目ID",
  "beginDateTime": "2026-04-01 09:00:00",
  "endDateTime": "2026-04-01 11:00:00",
  "teachMode": 1,
  "courseId": "course1",
  "studentId": "student1",
  "userId": "user1"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "课程安排创建成功!",
  "data": {
    "id": "课程安排ID"
  }
}
```

### 15.4 更新课程安排

- **接口路径**: `/v1/busCourseSchedule/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 课程安排ID
- **请求参数**:

```json
{
  "hourlyfee": 120,
  "status": 1
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "课程安排更新成功!",
  "data": {
    "id": "课程安排ID",
    "hourlyfee": 120,
    "status": 1
  }
}
```

### 15.5 删除课程安排

- **接口路径**: `/v1/busCourseSchedule/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 课程安排ID
- **响应示例**:

```json
{
  "message": "课程安排删除成功"
}
```

***

## 16. 课节管理模块 `/v1/busCourseSection`

### 16.1 获取课节列表

- **接口路径**: `/v1/busCourseSection/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 16.2 获取课节详情

- **接口路径**: `/v1/busCourseSection/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 课节ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 16.3 创建课节

- **接口路径**: `/v1/busCourseSection/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "课节名称",
  "content": "课节内容",
  "address": "上课地址",
  "beginDateTime": "2026-04-01 09:00:00",
  "endDateTime": "2026-04-01 11:00:00",
  "hourlyfee": 100,
  "totalFee": 200,
  "totalHour": 2,
  "courseId": "course1",
  "studentId": ["student1", "student2"],
  "userId": "user1"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "课节创建成功!",
  "data": {
    "id": "课节ID"
  }
}
```

### 16.4 更新课节

- **接口路径**: `/v1/busCourseSection/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 课节ID
- **请求参数**:

```json
{
  "name": "新课节名称",
  "content": "新课节内容"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "课节更新成功!",
  "data": {
    "id": "课节ID",
    "name": "新课节名称",
    "content": "新课节内容"
  }
}
```

### 16.5 删除课节

- **接口路径**: `/v1/busCourseSection/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 课节ID
- **响应示例**:

```json
{
  "message": "课节删除成功"
}
```

***

## 17. 分组管理模块 `/v1/busGroup`

### 17.1 获取分组列表

- **接口路径**: `/v1/busGroup/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 17.2 获取分组详情

- **接口路径**: `/v1/busGroup/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 分组ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 17.3 创建分组

- **接口路径**: `/v1/busGroup/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "分组名称",
  "sort": 1,
  "remark": "分组备注",
  "userId": "user1"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "分组创建成功!",
  "data": {
    "id": "分组ID"
  }
}
```

### 17.4 更新分组

- **接口路径**: `/v1/busGroup/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 分组ID
- **请求参数**:

```json
{
  "name": "新分组名称",
  "sort": 2
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "分组更新成功!",
  "data": {
    "id": "分组ID",
    "name": "新分组名称",
    "sort": 2
  }
}
```

### 17.5 删除分组

- **接口路径**: `/v1/busGroup/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 分组ID
- **响应示例**:

```json
{
  "message": "分组删除成功"
}
```

***

## 18. 学生管理模块 `/v1/busStudent`

### 18.1 获取学生列表

- **接口路径**: `/v1/busStudent/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 18.2 获取学生详情

- **接口路径**: `/v1/busStudent/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 学生ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 18.3 创建学生

- **接口路径**: `/v1/busStudent/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "学生姓名",
  "gender": 1,
  "phone": "13800138000",
  "address": "学生地址",
  "groupId": "group1",
  "userId": "user1"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "学生创建成功!",
  "data": {
    "id": "学生ID"
  }
}
```

### 18.4 更新学生

- **接口路径**: `/v1/busStudent/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 学生ID
- **请求参数**:

```json
{
  "name": "新学生姓名",
  "phone": "13900139000"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "学生更新成功!",
  "data": {
    "id": "学生ID",
    "name": "新学生姓名",
    "phone": "13900139000"
  }
}
```

### 18.5 删除学生

- **接口路径**: `/v1/busStudent/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 学生ID
- **响应示例**:

```json
{
  "message": "学生删除成功"
}
```

***

## 19. 部门管理模块 `/v1/sysDept`

### 19.1 获取部门列表

- **接口路径**: `/v1/sysDept/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 19.2 获取部门详情

- **接口路径**: `/v1/sysDept/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 部门ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 19.3 创建部门

- **接口路径**: `/v1/sysDept/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "部门名称",
  "parent_id": 0,
  "sort": 1,
  "phone": "010-12345678",
  "principal": "部门负责人",
  "status": 1
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "部门创建成功!",
  "data": {
    "id": "部门ID"
  }
}
```

### 19.4 更新部门

- **接口路径**: `/v1/sysDept/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 部门ID
- **请求参数**:

```json
{
  "name": "新部门名称",
  "sort": 2
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "部门更新成功!",
  "data": {
    "id": "部门ID",
    "name": "新部门名称",
    "sort": 2
  }
}
```

### 19.5 删除部门

- **接口路径**: `/v1/sysDept/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 部门ID
- **响应示例**:

```json
{
  "message": "部门删除成功"
}
```

***

## 20. 角色管理模块 `/v1/sysRole`

### 20.1 获取角色列表

- **接口路径**: `/v1/sysRole/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 20.2 获取角色详情

- **接口路径**: `/v1/sysRole/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 角色ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 20.3 创建角色

- **接口路径**: `/v1/sysRole/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "name": "角色名称",
  "code": "role_code",
  "status": 1,
  "remark": "角色备注"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色创建成功!",
  "data": {
    "id": "角色ID"
  }
}
```

### 20.4 更新角色

- **接口路径**: `/v1/sysRole/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 角色ID
- **请求参数**:

```json
{
  "name": "新角色名称",
  "status": 1
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "角色更新成功!",
  "data": {
    "id": "角色ID",
    "name": "新角色名称",
    "status": 1
  }
}
```

### 20.5 删除角色

- **接口路径**: `/v1/sysRole/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 角色ID
- **响应示例**:

```json
{
  "message": "角色删除成功"
}
```

***

## 21. 用户管理模块 `/v1/sysUser`

### 21.1 获取用户列表

- **接口路径**: `/v1/sysUser/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 21.2 获取用户详情

- **接口路径**: `/v1/sysUser/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 用户ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 21.3 创建用户

- **接口路径**: `/v1/sysUser/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "username": "用户名",
  "nickname": "昵称",
  "phone": "13800138000",
  "email": "user@example.com",
  "sex": 1,
  "status": 1,
  "dept_id": 1
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户创建成功!",
  "data": {
    "id": "用户ID"
  }
}
```

### 21.4 更新用户

- **接口路径**: `/v1/sysUser/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 用户ID
- **请求参数**:

```json
{
  "nickname": "新昵称",
  "phone": "13900139000"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户更新成功!",
  "data": {
    "id": "用户ID",
    "nickname": "新昵称",
    "phone": "13900139000"
  }
}
```

### 21.5 删除用户

- **接口路径**: `/v1/sysUser/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 用户ID
- **响应示例**:

```json
{
  "message": "用户删除成功"
}
```

***

## 22. 用户管理模块（扩展） `/v1/sysUsers`

### 22.1 获取用户列表

- **接口路径**: `/v1/sysUsers/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 22.2 获取用户详情

- **接口路径**: `/v1/sysUsers/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 用户ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 22.3 创建用户

- **接口路径**: `/v1/sysUsers/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "username": "用户名",
  "nickname": "昵称",
  "password": "密码",
  "mobile": "13800138000",
  "email": "user@example.com",
  "gender": 1,
  "status": 1
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户创建成功!",
  "data": {
    "id": "用户ID"
  }
}
```

### 22.4 更新用户

- **接口路径**: `/v1/sysUsers/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 用户ID
- **请求参数**:

```json
{
  "nickname": "新昵称",
  "mobile": "13900139000"
}
```

- **响应示例**:

```json
{
  "code": 20000,
  "msg": "用户更新成功!",
  "data": {
    "id": "用户ID",
    "nickname": "新昵称",
    "mobile": "13900139000"
  }
}
```

### 22.5 删除用户

- **接口路径**: `/v1/sysUsers/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 用户ID
- **响应示例**:

```json
{
  "message": "用户删除成功"
}
```

***

## 23. 登录日志模块 `/v1/sysLoginLog`

### 23.1 获取登录日志列表

- **接口路径**: `/v1/sysLoginLog/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
- **响应示例**:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 0,
    "totalPages": 0
  }
}
```

### 23.2 获取登录日志详情

- **接口路径**: `/v1/sysLoginLog/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 日志ID
- **响应示例**:

```json
{
  "success": true,
  "data": {}
}
```

### 23.3 创建登录日志

- **接口路径**: `/v1/sysLoginLog/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "username": "用户名",
  "ip": "192.168.1.1",
  "address": "北京市",
  "system": "Windows 10",
  "browser": "Chrome",
  "status": 1,
  "behavior": "用户登录"
}
```

### 23.4 更新登录日志

- **接口路径**: `/v1/sysLoginLog/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 日志ID

### 23.5 删除登录日志

- **接口路径**: `/v1/sysLoginLog/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 日志ID

***

## 24. 菜单管理模块（新） `/v1/sysMenuNew`

### 24.1 获取菜单列表

- **接口路径**: `/v1/sysMenuNew/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量

### 24.2 获取菜单详情

- **接口路径**: `/v1/sysMenuNew/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 菜单ID

### 24.3 创建菜单

- **接口路径**: `/v1/sysMenuNew/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "parent_id": 0,
  "menu_type": 1,
  "title": "菜单标题",
  "name": "menuName",
  "path": "/path",
  "component": "ComponentName",
  "rank": 1,
  "icon": "icon-name"
}
```

### 24.4 更新菜单

- **接口路径**: `/v1/sysMenuNew/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 菜单ID

### 24.5 删除菜单

- **接口路径**: `/v1/sysMenuNew/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 菜单ID

***

## 25. 在线用户模块 `/v1/sysOnlineUser`

### 25.1 获取在线用户列表

- **接口路径**: `/v1/sysOnlineUser/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量

### 25.2 获取在线用户详情

- **接口路径**: `/v1/sysOnlineUser/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 用户ID

### 25.3 创建在线用户记录

- **接口路径**: `/v1/sysOnlineUser/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "username": "用户名",
  "ip": "192.168.1.1",
  "address": "北京市",
  "system": "Windows 10",
  "browser": "Chrome"
}
```

### 25.4 更新在线用户记录

- **接口路径**: `/v1/sysOnlineUser/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 用户ID

### 25.5 删除在线用户记录

- **接口路径**: `/v1/sysOnlineUser/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 用户ID

***

## 26. 操作日志模块 `/v1/sysOperationLog`

### 26.1 获取操作日志列表

- **接口路径**: `/v1/sysOperationLog/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量

### 26.2 获取操作日志详情

- **接口路径**: `/v1/sysOperationLog/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 日志ID

### 26.3 创建操作日志

- **接口路径**: `/v1/sysOperationLog/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "username": "用户名",
  "ip": "192.168.1.1",
  "address": "北京市",
  "system": "Windows 10",
  "browser": "Chrome",
  "status": 1,
  "summary": "操作摘要",
  "module": "系统模块"
}
```

### 26.4 更新操作日志

- **接口路径**: `/v1/sysOperationLog/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 日志ID

### 26.5 删除操作日志

- **接口路径**: `/v1/sysOperationLog/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 日志ID

***

## 27. 角色菜单关联模块 `/v1/sysRoleMenu`

### 27.1 获取角色菜单关联列表

- **接口路径**: `/v1/sysRoleMenu/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
    - `roleId`: 角色ID（可选）

### 27.2 获取角色菜单关联详情

- **接口路径**: `/v1/sysRoleMenu/detail/:roleId/:menuId`
- **请求方法**: `GET`
- **路径参数**:
    - `roleId`: 角色ID
    - `menuId`: 菜单ID

### 27.3 创建角色菜单关联

- **接口路径**: `/v1/sysRoleMenu/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "roleId": 1,
  "menuId": 1
}
```

### 27.4 批量创建角色菜单关联

- **接口路径**: `/v1/sysRoleMenu/batchCreate`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "roleId": 1,
  "menuIds": [1, 2, 3]
}
```

### 27.5 删除角色菜单关联

- **接口路径**: `/v1/sysRoleMenu/delete/:roleId/:menuId`
- **请求方法**: `DELETE`
- **路径参数**:
    - `roleId`: 角色ID
    - `menuId`: 菜单ID

### 27.6 根据角色ID删除所有关联

- **接口路径**: `/v1/sysRoleMenu/deleteByRoleId/:roleId`
- **请求方法**: `DELETE`
- **路径参数**: `roleId` - 角色ID

***

## 28. 系统日志模块 `/v1/sysSystemLog`

### 28.1 获取系统日志列表

- **接口路径**: `/v1/sysSystemLog/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量

### 28.2 获取系统日志详情

- **接口路径**: `/v1/sysSystemLog/detail/:id`
- **请求方法**: `GET`
- **路径参数**: `id` - 日志ID

### 28.3 创建系统日志

- **接口路径**: `/v1/sysSystemLog/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "level": 1,
  "module": "系统模块",
  "url": "/api/path",
  "method": "GET",
  "ip": "192.168.1.1",
  "address": "北京市",
  "system": "Windows 10",
  "browser": "Chrome",
  "takes_time": 100
}
```

### 28.4 更新系统日志

- **接口路径**: `/v1/sysSystemLog/update/:id`
- **请求方法**: `POST`
- **路径参数**: `id` - 日志ID

### 28.5 删除系统日志

- **接口路径**: `/v1/sysSystemLog/delete/:id`
- **请求方法**: `DELETE`
- **路径参数**: `id` - 日志ID

***

## 29. 用户角色关联模块 `/v1/sysUserRole`

### 29.1 获取用户角色关联列表

- **接口路径**: `/v1/sysUserRole/list`
- **请求方法**: `GET`
- **请求参数**:
    - `page`: 页码
    - `pageSize`: 每页数量
    - `userId`: 用户ID（可选）

### 29.2 获取用户角色关联详情

- **接口路径**: `/v1/sysUserRole/detail/:userId/:roleId`
- **请求方法**: `GET`
- **路径参数**:
    - `userId`: 用户ID
    - `roleId`: 角色ID

### 29.3 创建用户角色关联

- **接口路径**: `/v1/sysUserRole/create`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "userId": 1,
  "roleId": 1
}
```

### 29.4 批量创建用户角色关联

- **接口路径**: `/v1/sysUserRole/batchCreate`
- **请求方法**: `POST`
- **请求参数**:

```json
{
  "userId": 1,
  "roleIds": [1, 2, 3]
}
```

### 29.5 删除用户角色关联

- **接口路径**: `/v1/sysUserRole/delete/:userId/:roleId`
- **请求方法**: `DELETE`
- **路径参数**:
    - `userId`: 用户ID
    - `roleId`: 角色ID

### 29.6 根据用户ID删除所有关联

- **接口路径**: `/v1/sysUserRole/deleteByUserId/:userId`
- **请求方法**: `DELETE`
- **路径参数**: `userId` - 用户ID

***

## 注意事项

1. 所有接口都需要添加版本号前缀 `/v1`
2. 需要认证的接口需要在请求头中添加 `authorization` 字段
3. 分页参数统一使用 `page` 和 `limit`
4. 删除接口支持批量删除，多个ID用逗号分隔
5. 所有时间格式为 `YYYY-MM-DD HH:mm:ss`
6. 状态字段：0表示禁用，1表示启用

***

## 更新日志

- **2026-04-03**: 初始版本，添加所有接口文档
- **2026-04-03**: 更新版本，添加数据库表格对应的CRUD接口
- **2026-04-03**: 更新版本，添加新增的系统日志、在线用户、角色菜单关联等接口
