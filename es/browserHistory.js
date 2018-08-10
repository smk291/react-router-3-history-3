import createBrowserHistory from 'history3/lib/createBrowserHistory';
import createRouterHistory from './createRouterHistory';
export default createRouterHistory(createBrowserHistory);