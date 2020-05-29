const { Router } = require("express");
const auth = require("../auth/middleware");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const homePages = await Homepage.findAll();
    res.send(homePages);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
