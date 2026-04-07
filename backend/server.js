const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const pool = require('./db');
const { generateAccessToken, generateRefreshToken, verifyToken } = require('./jwt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 登录接口
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 查询用户
    const [users] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (users.length === 0) {
      return res.json({ code: 1, message: '用户名或密码错误' });
    }

    const user = users[0];

    // 验证密码
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ code: 1, message: '用户名或密码错误' });
    }

    // 生成令牌
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // 计算过期时间
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 2); // 2小时过期

    const refreshTokenExpiresAt = new Date();
    refreshTokenExpiresAt.setDate(refreshTokenExpiresAt.getDate() + 30); // 30天过期

    // 保存刷新令牌到数据库
    await pool.execute(
      'INSERT INTO refresh_tokens (user_id, refresh_token, expires_at) VALUES (?, ?, ?)',
      [user.id, refreshToken, refreshTokenExpiresAt]
    );

    // 返回数据
    res.json({
<<<<<<< HEAD
      code: 20000,
=======
      code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
      message: '登录成功',
      data: {
        accessToken,
        refreshToken,
        expires: expiresAt,
        avatar: user.avatar,
        username: user.username,
        nickname: user.nickname,
        roles: JSON.parse(user.roles),
        permissions: JSON.parse(user.permissions)
      }
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 刷新令牌接口
app.post('/refresh-token', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.json({ code: 1, message: '刷新令牌不能为空' });
    }

    // 验证刷新令牌
    const decoded = verifyToken(refreshToken);
    if (!decoded) {
      return res.json({ code: 1, message: '刷新令牌无效' });
    }

    // 查询数据库中的刷新令牌
    const [tokens] = await pool.execute(
      'SELECT * FROM refresh_tokens WHERE user_id = ? AND refresh_token = ? AND expires_at > NOW()',
      [decoded.id, refreshToken]
    );

    if (tokens.length === 0) {
      return res.json({ code: 1, message: '刷新令牌无效或已过期' });
    }

    // 查询用户信息
    const [users] = await pool.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);
    if (users.length === 0) {
      return res.json({ code: 1, message: '用户不存在' });
    }

    const user = users[0];

    // 生成新的令牌
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    // 计算过期时间
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 2); // 2小时过期

    const newRefreshTokenExpiresAt = new Date();
    newRefreshTokenExpiresAt.setDate(newRefreshTokenExpiresAt.getDate() + 30); // 30天过期

    // 删除旧的刷新令牌，保存新的刷新令牌
    await pool.execute('DELETE FROM refresh_tokens WHERE user_id = ?', [user.id]);
    await pool.execute(
      'INSERT INTO refresh_tokens (user_id, refresh_token, expires_at) VALUES (?, ?, ?)',
      [user.id, newRefreshToken, newRefreshTokenExpiresAt]
    );

    // 返回数据
    res.json({
<<<<<<< HEAD
      code: 20000,
=======
      code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
      message: '令牌刷新成功',
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        expires: expiresAt
      }
    });
  } catch (error) {
    console.error('刷新令牌错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 验证令牌接口
app.get('/verify-token', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({ code: 1, message: '未提供授权令牌' });
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.json({ code: 1, message: '令牌无效' });
    }

    // 查询用户信息
    const [users] = await pool.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);
    if (users.length === 0) {
      return res.json({ code: 1, message: '用户不存在' });
    }

    const user = users[0];

    res.json({
<<<<<<< HEAD
      code: 20000,
=======
      code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
      message: '令牌有效',
      data: {
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        roles: JSON.parse(user.roles),
        permissions: JSON.parse(user.permissions)
      }
    });
  } catch (error) {
    console.error('验证令牌错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 测试接口
app.get('/test', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({ code: 1, message: '未提供授权令牌' });
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.json({ code: 1, message: '令牌无效' });
    }

    res.json({
<<<<<<< HEAD
      code: 20000,
=======
      code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
      message: '测试成功',
      data: {
        user: decoded
      }
    });
  } catch (error) {
    console.error('测试接口错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
