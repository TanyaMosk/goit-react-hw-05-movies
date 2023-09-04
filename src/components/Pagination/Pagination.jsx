import { StyledReactPaginate } from './Pagination.styled';

const Pagination = ({ pages, pageChange, activePage }) => {
    const active = activePage - 1;

    return (
        <StyledReactPaginate
            pageCount={pages}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={pageChange}
            activeClassName={"active"}
            previousLabel={"<<"}
            nextLabel={">>"}
            forcePage={active}
        />
    )
};

export default Pagination;