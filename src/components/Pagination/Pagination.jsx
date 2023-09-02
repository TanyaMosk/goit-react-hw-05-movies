// import ReactPaginate from 'react-paginate';
import { StyledReactPaginate } from './Pagination.styled';

export const Pagination = ({pages,pageChange}) => {
    return (         
          <StyledReactPaginate
          pageCount={pages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={pageChange}        
          activeClassName={"active"}  
          previousLabel={"<<"}
          nextLabel={">>"}  
        />                
    )
}