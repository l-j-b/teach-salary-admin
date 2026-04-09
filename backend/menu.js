const express = require('express');
const pool = require('./db');
const router = express.Router();

// 新增菜单接口
router.post('/create', async (req, res) => {
  try {
    const {
      menu_type,
      parent_id,
      title,
      name,
      path,
      component,
      rank,
      redirect,
      icon,
      extra_icon,
      enter_transition,
      leave_transition,
      active_path,
      auths,
      frame_src,
      frame_loading,
      keep_alive,
      hidden_tag,
      fixed_tag,
      show_link,
      show_parent
    } = req.body;

    // 验证必填字段
    if (!title) {
      return res.json({ code: 1, message: '菜单名称不能为空' });
    }

    // 插入菜单数据
    const [result] = await pool.execute(
      `INSERT INTO sys_menu (
        menu_type, parent_id, title, name, path, component, rank, redirect, 
        icon, extra_icon, enter_transition, leave_transition, active_path, auths, 
        frame_src, frame_loading, keep_alive, hidden_tag, fixed_tag, show_link, show_parent
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        menu_type || 0,
        parent_id || 0,
        title,
        name || '',
        path || '',
        component || '',
        rank || 99,
        redirect || '',
        icon || '',
        extra_icon || '',
        enter_transition || '',
        leave_transition || '',
        active_path || '',
        auths || '',
        frame_src || '',
        frame_loading || true,
        keep_alive || false,
        hidden_tag || false,
        fixed_tag || false,
        show_link !== undefined ? show_link : true,
        show_parent || false
      ]
    );

    // 返回成功响应
    res.json({
      code: 20000,
      message: '新增菜单成功',
      data: {
        id: result.insertId
      }
    });
  } catch (error) {
    console.error('新增菜单错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 获取菜单列表接口
router.get('/', async (req, res) => {
  try {
    const [menus] = await pool.execute('SELECT * FROM sys_menu ORDER BY rank ASC');
    res.json({
      code: 20000,
      message: '获取菜单列表成功',
      data: menus
    });
  } catch (error) {
    console.error('获取菜单列表错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

module.exports = router;