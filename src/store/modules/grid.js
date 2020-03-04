import { boardLevel1, boardLevel2, boardLevel3 } from '../../data/boards';

const state = {
  board: [],
  moves: 0,
  level: 0,
  focus: {
    x: 0,
    y: 0
  },
  gameWon: false
};

const mutations = {
  'SET_BOARD'(state, boardLevel){
    state.board = boardLevel;
  },
  // change light value 1/0
  'ACTIVATE'(state, {row, col}) {
    state.board[row][col] = state.board[row][col] === 1 ? 0 : 1;
    // top
    if (row - 1 >= 0) {
        state.board[row - 1][col] = state.board[row - 1][col] === 1 ? 0 : 1;
    }
    // left
    if (col - 1 >= 0) {
        state.board[row][col - 1] = state.board[row][col - 1] === 1 ? 0 : 1;
    }
    // right
    if (col + 1 <= state.board[0].length - 1) {
      state.board[row][col + 1] = state.board[row][col + 1] === 1 ? 0 : 1;
    }
    // bottom
    if (row + 1 <= state.board.length - 1) {
        state.board[row + 1][col] = state.board[row + 1][col] === 1 ? 0 : 1;
    }
  },
  'RESET'(state){
    state.board = state.board.map(x => x.map(y => y * 0));
    state.moves = 0;
  },
  'INCREASE_COUNT'(state){
    state.moves += 1;
  },
  'SET_LEVEL'(state, level) {
    state.level = level;
  },
  // so someone can use arrow eys to navigate the board
  'SET_FOCUS'(state, { x, y }) {
    if (x >= 0 && y >= 0 && y <= state.board[0].length - 1 && x <= state.board.length - 1) {
      state.focus.x = x;
      state.focus.y = y;
    }
    // up arrow will focus on the bottom most grid in the column
    if (x < 0) {
      state.focus.x = state.board.length - 1;
    }
    // down arrow will focus on the top most grid in the column
    if (x > state.board.length - 1) {
      state.focus.x = 0;
    }

    // left arrow will focus on right most square in the row
    if (y < 0) {
      state.focus.y = state.board[0].length - 1;
    }

    // right arrow will focus on left most square in the row
    if (y > state.board[0].length - 1) {
      state.focus.y = 0;
    }
  },
  'SET_GAME_WON'(state, { gameWon }) {
    state.gameWon = gameWon;
  }
};

const actions = {
  initBoard({commit}){
    let boardLevel;

    switch (state.level) {
      case (1):
      boardLevel = boardLevel1.map(row => [ ...row ] );
      break;

      case (2):
      boardLevel = boardLevel2.map(row => [ ...row ] );
      break;

      case (3):
      boardLevel = boardLevel3.map(row => [ ...row ] );
      break;
    }
    commit('SET_BOARD', boardLevel);
  },
  activate({commit}, payload){
    commit('ACTIVATE', payload);
  },
  reset({commit}) {
    commit('RESET');
    commit('SET_GAME_WON', { gameWon: false });
  },
  increaseCount({commit}){
    commit('INCREASE_COUNT');
  },
  setLevel({commit}, payload) {
    commit('SET_LEVEL', payload);
  },
  endGame({commit}) {
    commit('SET_LEVEL', 0);
    commit('SET_GAME_WON', { gameWon: false });
    commit('RESET');
  },
  setFocus({commit}, payload) {
    commit('SET_FOCUS', payload);
  },
  setGameProgress({commit}, payload) {
    commit('SET_GAME_WON', payload);
  }
};

const getters = {
  getBoard(state) {
    return state.board;
  },
  getMoves(state) {
    return state.moves;
  },
  gameWon: (state) => ({check}) => {
    let won = true;
    state.board.forEach(row => {
      row.forEach(col => {
        if(col == 0){
          won = false;
          return won;
        }
      })
    });
    return won;
  },
  isOn: (state) => ({row, col}) => {
    return state.board[row][col] === 1;
  },
  getLevel(state) {
    return state.level;
  },
  getFocus(state) {
    return state.focus;
  },
  isGameWon(state) {
    return state.gameWon;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
