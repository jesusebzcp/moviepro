import {useAppDispatch, useAppSelector} from '@/core';
import {setLoading, setUser} from '@/core/slices/auth';
import {loginRequest} from '@/core/slices/auth/actions';
import {CONSTANTS} from '@/constants';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import EncryptedStorage from 'react-native-encrypted-storage';

import * as yup from 'yup';

export interface LoginArgs {
  email: string;
  password: string;
}

export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.auth);

  const handleSingOut = useCallback(async () => {
    await EncryptedStorage.removeItem(CONSTANTS.KEY_JWT);
    dispatch(setUser(null));
  }, [dispatch]);

  const loginSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .required('El email es obligatorio!')
          .email('El email no es valido'),
        password: yup
          .string()
          .required('La contraseña es obligatoria')
          .min(6, 'Debería de tener al menos 6 caracteres'),
      }),
    [],
  );

  const {
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
    setError,
    reset,
  } = useForm<LoginArgs>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = handleSubmit(async values => {
    try {
      dispatch(setLoading(true));
      const {data} = await loginRequest({
        identifier: values.email,
        password: values.password,
      });
      await EncryptedStorage.setItem(CONSTANTS.KEY_JWT, data.jwt);
      dispatch(setUser(data.user));
      reset();
    } catch (error: any) {
      setError('password', {
        message: 'Ocurrió algo inesperado',
      });
    } finally {
      dispatch(setLoading(false));
    }
  });

  return {
    loading,
    errorsForm: errors,
    handleSubmit,
    setValue,
    values: getValues(),
    handleLogin,
    handleSingOut,
  };
};
