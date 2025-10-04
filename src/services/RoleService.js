import RoleRepository from "../repository/RoleRepository.js";

class RoleService {
  async getRoles() {
    return await RoleRepository.getRoles();
  }
}

export default new RoleService();
