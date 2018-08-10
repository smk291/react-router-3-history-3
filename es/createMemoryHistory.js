import useQueries from 'history3/lib/useQueries';
import useBasename from 'history3/lib/useBasename';
import baseCreateMemoryHistory from 'history3/lib/createMemoryHistory';

export default function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = baseCreateMemoryHistory(options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = useQueries(useBasename(createHistory))(options);
  return history;
}