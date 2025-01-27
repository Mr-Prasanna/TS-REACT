import CourseGoal from "./components/CourseGoal.tsx";
import User from "./components/User.tsx";
function App() {
  const users = [{ name: "John" }, { name: "Mary" }, { name: "Luke" }];
  return (
    <main>
      <CourseGoal title="React + TS" children="Learn it" />
      <ul>
        {users.map((user, index) => (
          <User name={user.name} />
        ))}
      </ul>
    </main>
  );
}

export default App;
