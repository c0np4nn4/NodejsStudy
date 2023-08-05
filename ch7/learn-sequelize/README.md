# MySQL
- 아래와 같은 작업을 통해 mysql 관련 이슈들을 해결했다.
```bash
mysql -u root

mysql> show variables like 'validate_password%';
+--------------------------------------+---------+
| Variable_name                        | Value   |
+--------------------------------------+---------+
| validate_password.check_user_name    | ON      |
| validate_password.dictionary_file    |         |
| validate_password.length             | 8       |
| validate_password.mixed_case_count   | 1       |
| validate_password.number_count       | 1       |
| validate_password.policy             | MEDIUM  |
| validate_password.special_char_count | 1       |
+--------------------------------------+---------+

mysql> SET GLOBAL validate_password.policy=LOW;

mysql> SELECT User, Host, plugin FROM mysql.user;
+------------------+-----------+-----------------------+
| User             | Host      | plugin                |
+------------------+-----------+-----------------------+
| debian-sys-maint | localhost | caching_sha2_password |
| mysql.infoschema | localhost | caching_sha2_password |
| mysql.session    | localhost | caching_sha2_password |
| mysql.sys        | localhost | caching_sha2_password |
| root             | localhost | auth_socket           |
+------------------+-----------+-----------------------+

mysql> update user set plugin='mysql_native_password' where user='root';
mysql> flush privileges;

mysql> ALTER user 'root'@'localhost' identified by '12341234';
mysql> exit;
```

- `app.js` 의 `sequelize`가 DB에 접근하고자 할 때, 위 작업을 해줘야 권한 문제 등이 해결되었다.

