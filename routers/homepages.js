const { Router } = require("express");
const auth = require("../auth/middleware");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    // const param = req.params;
    const homePages = await Homepage.findAll();
    res.send(homePages);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const pageId = req.params.id;
  // console.log("HALLO", pageId);
  try {
    // console.log("ok hoi");
    const onePage = await Homepage.findByPk(pageId, {
      include: [Story],
    });
    res.send(onePage);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
