import React from "react";
import { useParams } from "react-router-dom";


export function SuccessPage() {
   let { success } = useParams();
   const successId = success;
   return (
        <div className="success">
            <h1>Group { successId } Successfully Created!</h1>
        </div>
   )
}