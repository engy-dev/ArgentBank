import { useEffect, useState } from "react";
import { emptyProfile } from "../services/typesdatas";

/** Fetch the user profile */

export const useUserProfile = (token: string) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(emptyProfile);
    const [serverError, setServerError] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch('http://localhost:3001/api/v1/user/profile', {
            method: "POST",
            headers:{ Authoriztion: "Bearer" + token, accept: "application/json"}
        })
        .then(async response =>{
            const isJson = response.headers.get("content-type")?.includes("application/json");
            const data = isJson && await response.json();
            if (response.ok){
                setApiData(data.body);
                setIsLoading(false);
            } else {
                console.error(response);
                setServerError(true);
            }
        })
        .catch(error =>{
            console.error(error);
            setServerError(true);
        })
    }, [])
    return {isLoading, apiData, serverError}
}