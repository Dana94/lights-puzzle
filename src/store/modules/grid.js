import board from '../../data/board';

const state = {
  board: [],
  moves: 0,
  focus_x: 0,
  focus_y: 0
};

const mutations = {
  'SET_BOARD'(state, board){
    state.board = board;
  },

  // change light value 1/0
  'ACTIVATE'(state, {row, col}) {
    state.board[row][col] = state.board[row][col] === 1 ? 0 : 1;
  },
  'RESET'(state){
    state.board = state.board.map(x => x.map(y => y * 0));
    state.moves = 0;
  },
  'INCREASE_COUNT'(state){
    state.moves += 1;
  },
  'FOCUS_UP'(state, {row, col}){
    state.focus_x = row - 1 < 0 ? 2 : row - 1;
    console.log(row, col, '\n', state.focus_x, state.focus_y);
  }

};

const actions = {
  // create grid first
  initBoard({commit}){
    commit('SET_BOARD', board);
  },
  // change light setting for grid and its associate grids
  activate({commit}, payload){
    commit('ACTIVATE', payload);
  },
  reset({commit}) {
    commit('RESET');
  },
  increaseCount({commit}){
    commit('INCREASE_COUNT');
  },
  focusUp({commit}, payload){
    commit('FOCUS_UP', payload);
  }

};

const getters = {
  createBoard(state) {
    return state.board;
  },
  moves(state) {
    return state.moves;
  },
  // check if won
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
    return state.board[row][col] == 1;
  },
  isInFocus: (state) => ({row, col}) => {
    console.log(state.focus_x, state.focus_y, '    ', row, col, state.focus_x == row && state.focus_y == col);
    return state.focus_x == row && state.focus_y == col;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
