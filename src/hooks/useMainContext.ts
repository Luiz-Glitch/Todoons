import React, { useContext } from 'react';

import { MainContext } from '../contexts/main';

export function useMainContext() {
  return useContext(MainContext);
}
