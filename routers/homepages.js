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

router.post("/:id/stories", async (req, res) => {
  const homepage = await Homepage.findByPk(req.params.id);
  const { name, imageUrl, content } = req.body;
  console.log("3w3w3w3w3w3w3", homepage);
  console.log("4w4w4w4w4", req.body);
  const story = await Story.create({
    name,
    imageUrl,
    content,
    homepageId: homepage.id,
  });
  console.log("44444444?", story);

  return res.status(201).send(story);
});

module.exports = router;
