const express = require("express");
const router = express.Router();

const { getAllCustomers, getCustomersById, addCustomers, updateCustomers, deleteCustomers, dashboardCustomerDetails } = require("../controllers/customControllers");

router.get("/customers", getAllCustomers);
  
router.get("/customers/:id", getCustomersById);

router.post("/customers", addCustomers);
  
router.put("/customers/:id", updateCustomers);
  
router.delete("/customers/:id", deleteCustomers);

router.get("/dashboard-totalcustomers", dashboardCustomerDetails);

module.exports = router;