import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserWidget() {
    return (
        <>
            <span classID="user">
                <FontAwesomeIcon icon={faUser} />
            </span>
        </>
    );
}

export default UserWidget;
