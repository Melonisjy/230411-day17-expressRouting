const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

router.post("/", (req, res) => {
  res.send("회원가입");
});

router.put("/id", (req, res) => {
  res.send("회원정보 수정");
});

router.delete("/id", (req, res) => {
  res.send("회원정보 삭제");
});

module.exports = router;
