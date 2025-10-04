import TableService from "../services/TableService.js";

class TableController {
  async getTables(req, res) {
    try {
      const tables = await TableService.getTables();
      res.status(200).json({ data: tables });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TableController();
