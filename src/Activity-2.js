import CurrentDate from "./CurrentDate";

export default function App () {
    var date = Date(Date.now());
    return (
        <div>
            <h2>What date is it?</h2>
            <CurrentDate date={date}/>
        </div>
    );
}