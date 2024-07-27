import FetchedTodosList from "./FetchedTodosList";
import Todos from "./Todos/Todos";
import { store } from "./store/store";

function App() {
  // console.log(store.getState());
  

  return (
    <>
      <div className="gap-5 px-5 mt-2 w-100 d-flex flex-column align-items-center justify-content-center">
        <Todos />
        {/* <Users/> */}
        
      </div>
    </>
  );
}

export default App;
