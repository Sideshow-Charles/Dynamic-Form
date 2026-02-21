import PeopleConfigForm from "./components/PeopleConfigForm";

/**
 * App shell — the form component is rendered below.
 */
function App() {
  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
      <h2>People Configuration</h2>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Select people and configure their details.
      </p>
      <PeopleConfigForm />
    </div>
  );
}

export default App;
