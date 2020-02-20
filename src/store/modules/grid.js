import board from '../../data/board';

const state = {
  board: [],
  moves: 0,
  level: 0,
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
  'SET_LEVEL'(state, level) {
    state.level = level;
  }
};

const actions = {
  initBoard({commit}){
    commit('SET_BOARD', board);
  },
  activate({commit}, payload){
    commit('ACTIVATE', payload);
  },
  reset({commit}) {
    commit('RESET');
  },
  increaseCount({commit}){
    commit('INCREASE_COUNT');
  },
  setLevel({commit}, payload) {
    commit('SET_LEVEL', payload);
  }
};

const getters = {
  createBoard(state) {
    return state.board;
  },
  moves(state) {
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
    return state.board[row][col] == 1;
  },
  getLevel(state) {
    return state.level;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
