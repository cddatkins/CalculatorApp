import React from "react";
import "./Button.css";

function IsOperator(val) {
    return !isNaN(val) || val === ".";
}

export default function Button(props) {

    return <div className={`btn-wrapper ${IsOperator(props.children)? null: "operator"}`}
    onClick={() => {props.handleClick(props.children)}}
    style={props.style}>{props.children}</div>;
}