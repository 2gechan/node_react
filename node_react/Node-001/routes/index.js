import DB from "../models/index.js";
import express from "express";
import multer from "multer";
import fs from "fs";
import Sequelize from "sequelize";

const router = express.Router();
const BOARD = DB.models.tbl_board;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});

router.get("/board", async (req, res, next) => {
  const board = await BOARD.findAll();
  res.json(board);
});

const storageOption = {
  filename: (req, file, cb) => {
    const originName = file.originalname;
    const filePrix = `${Date.now()}-${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    cb(null, "");
  },
};
const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage });

router.post("/insert", uploadMiddleWare.none(""), async (req, res) => {
  const body = req.body;
  const boardDto = JSON.parse(body.BOARD);
  // console.log(boardDto);
  await BOARD.create(boardDto);
  res.json({ ok: true });
});

router.get("/findone", async (req, res) => {
  const id = req.query.id;

  const findBoard = await BOARD.findOne({
    where: { b_seq: id },
  });

  await findBoard.increment("b_viewcount", { by: 1 });

  res.json(findBoard);
});

router.get("/delete", async (req, res) => {
  const id = req.query.id;
  // console.log(id);
  BOARD.destroy({ where: { b_seq: id } });
  res.json({ ok: true });
});

router.post("/update", uploadMiddleWare.none(""), async (req, res) => {
  const body = req.body;
  const boardDto = JSON.parse(body.UPDATE);
  console.log(boardDto.b_title);

  await BOARD.update(
    {
      b_title: boardDto.b_title,
      b_content: boardDto.b_content,
      b_nickname: boardDto.b_nickname,
    },
    {
      where: { b_seq: boardDto.b_seq },
    }
  );
  res.json({ ok: true });
});

const Op = Sequelize.Op;

router.get("/best", async (req, res, next) => {
  const board = await BOARD.findAll({
    where: { b_viewcount: { [Op.gt]: 30 } },
  });

  res.json(board);
});
export default router;
