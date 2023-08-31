import { SearchBoxButton, SearchBoxForm, SearchBoxInput } from "./SearchBox.styled"

export const SearchBox = ({onSubmit}) => {
    
    return (
        <SearchBoxForm onSubmit={onSubmit}>
          <SearchBoxButton type="submit">Search</SearchBoxButton>
          <SearchBoxInput
            name="query"           
            type="text"                    
            placeholder="Search movies"/>
        </SearchBoxForm>

    )
}