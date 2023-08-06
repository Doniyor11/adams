
import { routeHistory } from '@/shared/config/routing/historyRouter';

export function AppError() {
  return (
   <>
     <h1>Что-то пошло не так</h1>
     <button onClick={() => routeHistory.back()}>Вернуться</button>
   </>
  );
}
