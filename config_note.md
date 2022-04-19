## 配置

### vscode

1. 安装**Live Server**插件

   ```markdown
   我们一般写网站会将网站部署在Linux上，Linux在这里承载我们的服务并启动一个网站。
   但是我们在学习前端的时候不需要部署到Linux上，有需求就有人研发
   那么这时候就有了Live Server插件。
   ```

​                       ![1.png](https://cdn.acwing.com/media/article/image/2022/04/19/189403_c8798d13bf-1.png) 

2. 安装**Auto Rename Tag**插件

   ```
   自动重命名成对的HTML/XML标签
   ```

   ​            ![2.jpg](https://cdn.acwing.com/media/article/image/2022/04/19/189403_078ae6a3bf-2.jpg) 

3. VsCode 自动格式化

   ![3.jpg](https://cdn.acwing.com/media/article/image/2022/04/19/189403_ae0f9eadbf-3.jpg) 

### linux live-server安装

#### 1.创建docker容器

将镜像传到服务器上

```bash
scp /var/lib/acwing/docker/images/django_lesson_1_0.tar server_name:
```

将镜像加载到本地

```bash
docker load -i django_lesson_1_0.tar
```

22端口用于ssh登录 8080端口用于live-server服务

需要到服务器控制台开放20001和8081端口号

```bash
docker run -p 20001:22 -p 8081:8080 --name web_server -itd django_lesson:1.0
```

进入docker容器

```bash
docker start web_server  # 开启容器
docker attach web_server  # 进入容器
```

设置root密码

```bash
passwd
```

创建普通用户

```bash
adduser web
```

分配sudo权限

```bash
usermod -aG sudo web
```

挂起容器

```markdown
ctrl + p && ctrl + q
```

传配置

```bash
scp .bashrc .vimrc .tmux.conf server_name:
```

#### 2.配置免密登录

```bash
cd ~/.ssh
vim config

host web
	HostName ip地址
	User web
	Port 20001
```

传公钥到容器内

```bash
ssh-copy-id web
```

#### 3.配置live-server环境

进入容器

```bash
ssh web
```

更新apt软件列表

```bsh
sudo apt update
sudo apt upgrade
```

安装nodejs

```bash
# 下载14.16.1版本的压缩包（看官网最新好像出到了17.6.0）
wget https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz

# 解压
tar xf node-v14.16.1-linux-x64.tar.xz

# 安装npm和node
# 若果你的用户名不是web，需要把web位置改成你设置的用户名
sudo ln -s /home/web/node-v14.16.1-linux-x64/bin/npm /usr/local/bin/npm
sudo ln -s /home/web/node-v14.16.1-linux-x64/bin/node /usr/local/bin/node

# 检查是否安装成功
node -v
npm -v
```

安装live-server

```bash
# 用npm下载live-server
npm install -g live-server

# 安装live-server
sudo ln -s /home/web/node-v14.16.1-linux-x64/lib/node_modules/live-server/live-server.js /usr/local/bin/live-server

#安装成功后，要运行live-server 家目录下的node-v14.16.1-linux-x64文件不能删除也不能移动位置

# 查看是否安装成功
live-server -v

# 创建工作目录和网页文件
mkdir web_lesson
cd web_lesson
touch index.html

# 打开一个tmux窗口，在里面运行live-server服务
tmux
live-server
```

在浏览器里输入服务器**IP:8081**即可访问。

往**index.html**中写入内容后保存，网页就会自动刷新。