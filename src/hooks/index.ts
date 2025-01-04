import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';
import { useEffect, useRef } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default function useUpdateEffect(callback: () => void, dependencies: unknown) {
  const firstRenderRef = useRef(true);

  // Since ref persists value between renders (and itself doesn't trigger a render when value is changed), we can simply just set ref to a failing condition on our 1st render so that component only is re-rendered when dependencies change and not also "onMount"
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, [callback, dependencies]);
}
