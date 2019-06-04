import board from '../../data/board';

const state = {
  board: []
};

const mutations = {
  'SET_BOARD'(state, board){
    state.board = board;
  },

  // change light value 1/0
  'ACTIVATE'(state, {row, col}) {
    state.board[row][col] = state.board[row][col] === 1 ? 0 : 1;
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
  }
};

const getters = {
  createBoard(state) {
    return state.board;
  },
  // check if won
  gameWon(state) {
    let won = true;
    state.board.forEach(row => {
      console.log(row)
      row.forEach(col => {
        if(col == 0){
          won = false;
          return;
        }
        console.log(col)
      })
      if(!won) {
        return;
      }
    });
  },
  isOn: (state) => ({row, col}) => {
    // console.log(row, col, state.board[row][col])
    // return state.board[row][col] == 1;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
