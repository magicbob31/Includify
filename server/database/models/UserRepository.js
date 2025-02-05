const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "User" as configuration
    super({ table: "User" });
  }

  // The C of CRUD - Create operation

  async create(User) {
    // Execute the SQL INSERT query to add a new User to the "User" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, username, email, password) values (?, ?, ?, ?)`,
      [User.title, User.user_id]
    );

    // Return the ID of the newly inserted User
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific User by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the User
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Users from the "User" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Users
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing User

  // async update(User) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an User by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserRepository;
