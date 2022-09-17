import { Routes as ROUTES, Route } from 'react-router-dom';
import { routes as RouteList } from './routes';
export default function Routes() {
  return (
    <ROUTES>
      {RouteList.map((route, index) => {
        return route.visible ? <Route key={index} {...route} /> : null;
      })}
    </ROUTES>
  );
}
