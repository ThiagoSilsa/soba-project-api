import prisma from "../../prisma/client.js";

class RoleRepository {
  async getRoles() {
    return await prisma.role.findMany()


  }
}

export default new RoleRepository();
