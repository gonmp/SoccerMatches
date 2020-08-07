import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TeamForm from './components/TeamForm';
import ResutsTable from './components/ResultsTable';
import Pagination from 'react-js-pagination';

function App() {
  const [matches, setMatches] = useState([]);
  const [team, setTeam] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, changeCurrentPage] = useState(1);
  const [header, setHeader] = useState({});

  const searchMatches = async (pageNumber) => {
    const url = `https://localhost:5001/api/Matches/search?team=${team}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const results = await axios.get(url);
    setHeader(JSON.parse(results.headers['x-pagination']));
    console.log(JSON.parse(results.headers['x-pagination']));
    setMatches(results.data);
    console.log(matches);
  };

  const handlePaginationChange = (pageNumber) => {
    searchMatches(pageNumber);
    changeCurrentPage(pageNumber);
  };

  useEffect(() => {
    //clienteAxios.get().then((result) => console.log(result));
    searchMatches(currentPage);
    //console.log(matches);
  }, [team, pageSize]);

  return (
    <div>
      <TeamForm setTeam={setTeam} setPageSize={setPageSize} />
      <ResutsTable matches={matches} />
      <div className='paging'>
        <Pagination
          activePage={header.CurrentPage}
          totalItemsCount={header.TotalCount}
          itemCountPerPage={header.PageSize}
          onChange={handlePaginationChange.bind(this)}
          itemClass='page-item'
          itemClass='page-link'
          firstPageText='Primero'
          lastPageText='Último'
        />
      </div>
    </div>
  );
}

export default App;
