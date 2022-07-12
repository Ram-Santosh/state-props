export default function List (props) {
    return (
        props.tasks.join(",")
    );
}