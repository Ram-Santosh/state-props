import List from "./List";

export default function Todo () {
    return (
        <>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk","Cook","Bake"]} />
        <h2>Tommorow</h2>
        <List tasks={["Study","Code","Eat"]} />
        </>
    );
}