import RoleService from "./../services/RoleService.js";

class RoleController {
  async getRoles(req, res) {
    try {
      const roles = await RoleService.getRoles();
      res.status(200).json({ data: roles });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RoleController();
