import axios from 'axios';
import type { AppThunk } from '../../store';
import type { ThemeType } from '../../../../types/theme/theme';

export const loadGameThunk: AppThunk = () => async (dispatch) => {
  try {
    const response = await axios<ThemeType>('/api/games/setgame');
    if (response.status === 200) {
      dispatch({ type: 'SET_GAME', payload: response.data });
    }
  } catch (error) {
    console.log(error, 'Ошибка в loadGameThunk');
  }
};

export const endGameThunk: AppThunk = () => async (dispatch) => {
  try {
    axios('/api/games/endgame')
      .then(() => dispatch({ type: 'END_GAME' }))
      .catch(() => dispatch({ type: 'END_ERROR' }));
  } catch (error) {
    console.log(error, 'Ошибка в endGameThunk');
  }
};

export const checkAnswerThunk: AppThunk = (formData) => async (dispatch) => {
  try {
    axios('/api/games/checkanswer', formData)
      .then((res) => dispatch({ type: 'CHECK_ANSWER', payload: res.data }))
      .catch(() => dispatch({ type: 'CHECK_ERROR' }));
  } catch (error) {
    console.log(error, 'Ошибка в checkAnswerThunk');
  }
};
