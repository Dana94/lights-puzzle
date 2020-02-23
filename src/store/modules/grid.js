import { boardLevel1, boardLevel2 } from '../../data/boards';

const state = {
  board: [],
  moves: 0,
  level: 0,
};

const mutations = {
  'SET_BOARD'(state){
    state.board = boardLevel1.map(x => [ ...x ] );
  },
  'CLEAR_BOARD'(state){
    state.board = [];
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
    // let boardLevel;
    // switch (state.level) {
    //   case (1):
    //   boardLevel = [ ...boardLevel1 ];
    //   break;
    // }
    commit('SET_BOARD');
  },
  clearBoard({commit}) {
    commit('CLEAR_BOARD');
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
  },
  endGame({commit}) {
    commit('SET_LEVEL', 0);
    commit('RESET');
  }
};

const getters = {
  getBoard(state) {
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
    return state.board[row][col] === 1;
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
