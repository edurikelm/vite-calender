import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';
// import { getEnvcVariables } from '../helpers'; mostrar las variables de entorno

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  console.log(status)

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return <h3>Cargando</h3>;
  }

  // const authStatus = 'not-autenticated';

  // console.log(getEnvcVariables());

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}

    </Routes>
  );
};
