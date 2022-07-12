import { useState } from "react";

export default function Mycomponent () {
    const [message] = useState("Welcome to Techmojo!");
    return (
        <h1>{message}</h1>
    );
}