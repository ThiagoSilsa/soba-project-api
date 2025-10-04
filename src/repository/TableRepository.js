import prisma from "../../prisma/client.js";

class TableRepository {
  async getTables() {
    return await prisma.table_entity.findMany();
  }
}

export default new TableRepository;
