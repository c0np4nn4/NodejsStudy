const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://p4nn4:12341234@localhost:27017/admin', { dbName: 'nodejs' })
      .then(() => console.log('몽고디비 연결 성공'))
      .catch(error => console.log('몽고디비 연결 에러', error));

  };

  connect();

  mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
  });

  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
  });

  require('./user');
  require('./comment');
};
