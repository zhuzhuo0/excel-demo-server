import express from "express";

const router = express.Router();

// 获取文档列表
router.get("/excels", (req, res) => {
  res.send("demo");
});

// 获取文档信息
router.get("/excels/:id", (req, res) => {
  res.send("demo");
});

// 获取指定版本文档信息
router.get("/excels/:id/:version", (req, res) => {
  res.send("demo");
});

// 更新文档（部分更新）
router.patch("/excels/:id/:version", (req, res) => {
  res.send("demo");
});

// 更新文档（完整更新）
router.put("/excels/:id", (req, res) => {
  res.send("demo");
});

// 删除文档
router.delete("/excels/:id", (req, res) => {
  res.send("demo");
});

// 新建文档
router.post("/excels", (req, res) => {
  res.send("demo");
});

export default router;
