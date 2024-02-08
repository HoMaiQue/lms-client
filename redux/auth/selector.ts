import { createSelector } from 'reselect';
import { RootState } from '../store';
const authSelect = (state: RootState ) => state.auth;

export const tokenRegister = createSelector([authSelect], (auth) => auth.tokenRegister);
