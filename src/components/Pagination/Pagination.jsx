// import ReactPaginate from 'react-paginate';
import { StyledReactPaginate } from './Pagination.styled';

export const Pagination = ({ pages, pageChange, activePage }) => {
    const page = activePage - 1;
    return (         
          <StyledReactPaginate
          pageCount={pages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={pageChange}        
          activeClassName={"active"}  
          previousLabel={"<<"}
          nextLabel={">>"} 
          initialPage={page}  
        />                
    )
}