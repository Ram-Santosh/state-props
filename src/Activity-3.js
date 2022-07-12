import { useState } from "react";

export default function Mycomponent () {
    const [messege] = useState("Welcome to TechMojo");
    return (
        <h1>{messege}</h1>
    );
}