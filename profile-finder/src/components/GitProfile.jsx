import { useEffect, useState } from "react";
import { GitFinder } from "./GitFinder";

export const GitProfile = () => {
    const [ userName, setUserName ] = useState("erashish41");
    const [ userData, setUserData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);


    const fetchGitHubUserData = async() => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();
            if(data){
                setUserData(data);
                setLoading(false)};
                setUserName("")
                console.log(data);
                
        } catch (error) {
            setError(error.message)
            console.log(error);
        }
    }

    const handleOnClickButton = () => {
        fetchGitHubUserData();
    }

    useEffect(() => {
        fetchGitHubUserData();
    }, [])

    if(loading){
        return (
            <div>Loading! Please wait</div>
        )
    }

    if(error){
        return (
            <div>Error! {message.error}</div>
        )
    }

    return (
        <div className="container">
            <h1>Find Github Profile by Username</h1>
            <div className="content">
                <input 
                    name="search-by-usrename"
                    type="text" 
                    placeholder="enter Github username..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)} 
                    />
            </div>
            <button onClick={handleOnClickButton}>Search profile</button>
            {
                userData !== null ? <GitFinder user={userData} /> : null
            }
        </div>
    )
}