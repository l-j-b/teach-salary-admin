const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 模拟用户数据
const users = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    nickname: '管理员',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait&image_size=square',
    roles: ['admin'],
    permissions: ['*:*:*']
  },
  {
    id: 2,
    username: 'user',
    password: '123456',
    nickname: '普通用户',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square',
    roles: ['user'],
    permissions: []
  }
];

// JWT配置
const JWT_SECRET = 'your_jwt_secret_key_here';
const JWT_EXPIRES_IN = '2h';

// 生成访问令牌
function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username, roles: user.roles },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// 生成刷新令牌
function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

// 验证令牌
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// 登录接口
app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // 查找用户
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return res.json({ code: 1, message: '用户名或密码错误' });
    }

    // 生成令牌
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // 计算过期时间
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 2); // 2小时过期

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
        roles: user.roles,
        permissions: user.permissions
      }
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 刷新令牌接口
app.post('/refresh-token', (req, res) => {
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

    // 查找用户
    const user = users.find(u => u.id === decoded.id);
    if (!user) {
      return res.json({ code: 1, message: '用户不存在' });
    }

    // 生成新的令牌
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    // 计算过期时间
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 2); // 2小时过期

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
app.get('/verify-token', (req, res) => {
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

    // 查找用户
    const user = users.find(u => u.id === decoded.id);
    if (!user) {
      return res.json({ code: 1, message: '用户不存在' });
    }

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
        roles: user.roles,
        permissions: user.permissions
      }
    });
  } catch (error) {
    console.error('验证令牌错误:', error);
    res.json({ code: 1, message: '服务器错误' });
  }
});

// 测试接口
app.get('/test', (req, res) => {
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
