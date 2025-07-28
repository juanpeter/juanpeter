import ReactPaginate from 'react-paginate';

export const NavigatorTest = () =>{

  // TODO: Make pagination items labeled after the items array.
const items = ['07/21/2025', '07/22/2025', '07/27/2025'];

    return (

    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
