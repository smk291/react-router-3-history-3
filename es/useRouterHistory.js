import useQueries from 'history3/lib/useQueries';
import useBasename from 'history3/lib/useBasename';

export default function useRouterHistory(createHistory) {
  return function (options) {
    var history = useQueries(useBasename(createHistory))(options);
    return history;
  };
}