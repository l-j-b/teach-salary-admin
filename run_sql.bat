@echo off
setlocal

REM 设置MySQL连接信息
set MYSQL_USER=root
set MYSQL_PASSWORD=123456
set MYSQL_DATABASE=teach_salary_db

REM 执行SQL脚本
mysql -u %MYSQL_USER% -p%MYSQL_PASSWORD% < "E:\myProject\vue-teach-salary-admin\teach-salary-admin\create_tables.sql"

if %errorlevel% equ 0 (
    echo SQL脚本执行成功
) else (
    echo SQL脚本执行失败
)

pause
endlocal
