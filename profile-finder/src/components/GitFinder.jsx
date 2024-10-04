export const GitFinder = ({user}) => {

    const {id, login, name, bio, company, created_at, avatar_url} = user;

    return (
        <div className="main-container">
            <div>
                <img src={avatar_url}/>
            </div>
            <div>
                <a href={`https://github.com/$`}>{name || login}</a>
            </div>
        </div>
    )
}