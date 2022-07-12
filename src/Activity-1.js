import Child from "./Child";

export default function App () {
    return (
        <div className="App">
            <Child state="default"/>
            <Child state="bar"/>
            <Child state="foo"/>
        </div>
    );
}