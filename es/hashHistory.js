import createHashHistory from 'history3/lib/createHashHistory';
import createRouterHistory from './createRouterHistory';
export default createRouterHistory(createHashHistory);