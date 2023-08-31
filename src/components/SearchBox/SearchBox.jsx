
export const SearchBox = ({onSubmit}) => {
    
    return (
        <form onSubmit={onSubmit}>
          <button type="submit">Search</button>
          <input
            name="query"           
            type="text"                    
            placeholder="Search movies"/>
        </form>

    )
}