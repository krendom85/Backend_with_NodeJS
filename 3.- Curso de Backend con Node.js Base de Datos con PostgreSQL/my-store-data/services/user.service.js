const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres');

const {models}= require('./../libs/sequelize');
const { use } = require('../routes/users.router');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // const client = await getConnection();
    // const rta = await client.query('SELECT * FROM tasks');
    // return rta.rows;
    const rta = await models.User.findAll({
      include:['customer']
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      boom.notFound('user not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
