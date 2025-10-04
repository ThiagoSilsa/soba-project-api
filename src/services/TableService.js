import TableRepository from "../repository/TableRepository.js";

class TableService {
  async getTables() {
    return await TableRepository.getTables();
  }
}

export default new TableService();
