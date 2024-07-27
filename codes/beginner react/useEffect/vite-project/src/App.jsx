import "bootstrap/dist/css/bootstrap.css";
import Services from "./sevices/use-services";
import useUsers from "./hooks/useUsers";

function App() {
  // custom hook
  const { users, error, isLoading, setUsers } = useUsers();

  const deleteUser = (user) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    Services.deleteUser(user.id).catch((err) => {
      seterror(err.message);
      setUsers(originalUsers);
    });
  };

  const updateUser = (user) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    Services.updateUser(updatedUser).catch((err) => {
      seterror(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <span className="text-danger">{error}</span>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div className="btn-group">
              <button
                className="btn btn-outline-warning"
                onClick={() => updateUser(user)}
              >
                Edit or update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
