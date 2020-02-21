import { boardLevel1 } from '../../data/boardLevel1';
import boardLevel2 from '../../data/boardLevel2';

const state = {
  board: [],
  moves: 0,
  level: 0,
};

const level1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const mutations = {
  'SET_BOARD'(state){
    state.board = [ ...level1 ];
  },
  'CLEAR_BOARD'(state){
    state.board = [];
    console.log('CLEAR_BOARD', state.board);
  },

  // change light value 1/0
  'ACTIVATE'(state, {row, col}) {
    state.board[row][col] = state.board[row][col] === 1 ? 0 : 1;
  },
  'RESET'(state){
    state.board = state.board.map(x => x.map(y => y * 0));
    console.log('reset', state.board);
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
    // this works...
    // let boardLevelTest = [ ...boardLevel1 ];
    // boardLevelTest[0] = '111';
    // console.log('CHANGED?', boardLevel1)

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
    console.log('ACTIVATE', state.board);
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
