const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  res.json(Board.toResponse(board));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  if (!board) {
    res.status('404');
  }
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateBoardById(req.params.id, req.body);
  res.json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const data = await boardsService.deleteBoardById(req.params.id);
  res.json(data);
});

module.exports = router;
