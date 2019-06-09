import board from '../../data/board';

const state = {
  board: [],
  moves: 0
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
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
