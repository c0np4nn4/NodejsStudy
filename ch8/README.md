# MongoDB

## note
- 일단 `MongoDB`를 설치해야 합니다.
- [공식 사이트](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)를 따라하는 것이 가장 정확합니다...
- 책과 달리 `mongosh` 로 shell 을 실행해야 합니다.
- 책에서 소개하는 `db.users.save()`도 deprecate된 메서드로.. `db.users.insertOne()` 을 사용해야 합니다.

---
## CRUD
- 일단 db, collection 순서로 만들어 둡니다.
```bash
> use nodejs; # nodejs 라는 이름의 데이터베이스를 만듭니다.
> db # 현재 db 를 표시합니다.
> db.createCollection('users') # users 라는 이름의 컬렉션을 생성합니다.
```
- collection 에 들어가는 데이터인 document 는 특정한 형식이 없습니다.
- Create
    - `db.users.insertOne({...})`
- Read
    - `db.users.find({})`
    - ```bash
    nodejs> db.users.find({}, {_id:0, name: 1, married:1})
[ { name: 'zero', married: false }, { name: 'nero', married: true } ]

    ```
- Update
    - `db.users.update()`
- Delete
    - `db.users.remove()`

---
## Mongoose
- `MySQL`에 있는 `Sequelize` 와 같은 개념입니다.
