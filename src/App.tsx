import "./App.css";

import { CatList } from "./components/cat-list";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { persistQueryClient, PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});


function App() {
  return (
    <div className="App">
      {/* Use Reducer */}
      {/* <ShoppingCart/> */}

      {/* Redux Implementation     */}
      {/* <Provider store={store}>
        <ShoppingCartRedux />

        <MyCart/>
      </Provider> */}
      {/* <QueryClientProvider client={new QueryClient()}>
        <CatList />
      </QueryClientProvider> */}
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: localStoragePersister }}
      >
        <CatList />
      </PersistQueryClientProvider>
      {/* <PetList /> */}
      {/* <ShoppingCart/> */}
      {/* <ClassComponent/> */}
      {/* <FunComponent/> */}
      {/* <ColorMe/> */}
    </div>
  );
}

export default App;
