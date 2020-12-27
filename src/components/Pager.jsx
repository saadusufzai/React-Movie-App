import React from 'react'

const Pager = ({page, setPage}) => {
    return (
        <div className="pagination">
        <a  onClick={() =>setPage(--page)}>&laquo;</a>
        <a className={`${page === 1 ? 'active': ''}`} onClick={() =>setPage(1)}>1</a>
        <a className={`${page === 2 ? 'active': ''}`} onClick={() =>setPage(2)}>2</a>
        <a className={`${page === 3 ? 'active': ''}`} onClick={() =>setPage(3)}>3</a>
        <a className={`${page === 4 ? 'active': ''}`} onClick={() =>setPage(4)}>4</a>
        <a className={`${page === 5 ? 'active': ''}`} onClick={() =>setPage(5)}>5</a>
        <a className={`${page === 6 ? 'active': ''}`} onClick={() =>setPage(6)}>6</a>
        <a className={`${page === 7 ? 'active': ''}`} onClick={() =>setPage(7)}>7</a>
        <a className={`${page === 8 ? 'active': ''}`} onClick={() =>setPage(8)}>8</a>
        <a className={`${page === 9 ? 'active': ''}`} onClick={() =>setPage(9)}>9</a>
        <a className={`${page === 10 ? 'active': ''}`} onClick={() =>setPage(10)}>10</a>
        <a onClick={() =>setPage(++page)}>&raquo;</a>
      </div>
    )
}

export default Pager
