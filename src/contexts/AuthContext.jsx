import { createContext, useContext, useEffect, useReducer } from 'react';
const StateContext = createContext({
  authenticated: false,
  user: null,
  user_type: ' ',
  loading: true,
});
StateContext.displayName = 'AuthState';

const DispatchContext = createContext(null);
DispatchContext.displayName = 'AuthDispatch';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        user_type: payload.type,
        user: payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
      };

    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const AuthProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    user: null,
    authenticated: false,
    loading: true,
  });

  useEffect(() => {
    function setLoadingFalse() {
      const token = localStorage.getItem('token');
      dispatch('LOGIN', {
        type: 'admin',
        data: 'Hallo Semuanya',
      });

      dispatch('STOP_LOADING');
    }
    setLoadingFalse();
  }, []);
  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
