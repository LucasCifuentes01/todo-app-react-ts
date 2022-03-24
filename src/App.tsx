import { LayoutContainer } from "./styled-components/Layout";
import { H1 } from "./styled-components/fonts";
import TaskContainer from "./components/TaskContainer";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <LayoutContainer>
        <H1>ToDo App</H1>
        <Form />
        <TaskContainer />
      </LayoutContainer>
    </div>
  );
}

export default App;
