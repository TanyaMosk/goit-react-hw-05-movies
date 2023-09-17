import { LoadMoreButton } from "./LoadMore.styled";

const LoadMore = ({ loadMore }) => {
    return <LoadMoreButton type="button" onClick={loadMore}>LOAD MORE</LoadMoreButton> 
}

export default LoadMore;