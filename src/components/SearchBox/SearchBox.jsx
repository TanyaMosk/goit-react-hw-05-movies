import { SearchBoxButton, SearchBoxForm, SearchBoxInput } from "./SearchBox.styled"

const SearchBox = ({ onSubmit }) => {
    
    return (
        <SearchBoxForm onSubmit={onSubmit}>
            <SearchBoxInput
                name="query"
                type="text"
                placeholder="Search movies" />
            <SearchBoxButton type="submit">Search</SearchBoxButton>
        </SearchBoxForm>

    )
};

export default SearchBox;