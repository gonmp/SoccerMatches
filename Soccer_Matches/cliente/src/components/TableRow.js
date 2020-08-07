import React from 'react';

const TableRow = ({ match }) => {
  const showResults = (result) => {
    let string;
    switch (result) {
      case 'AWAY':
        string = 'Equipo visitante';
        break;
      case 'HOME':
        string = 'Equipo local';
        break;
      case 'DRAW':
        string = 'Empate';
        break;
    }

    return string;
  };

  const showGoals = (goals) => {
    if (goals === null) {
      return 'No hay información / NC';
    }

    return goals;
  };
  return (
    <tr>
      <td>{match.league}</td>
      <td>{match.numberTeamsLeague}</td>
      <td>{match.homeTeam}</td>
      <td>{match.awayTeam}</td>
      <td>{showResults(match.result)}</td>
      <td>{showGoals(match.homeFinalGoals)}</td>
      <td>{showGoals(match.awayFinalGoals)}</td>
      <td>{showGoals(match.homeExtraGoals)}</td>
      <td>{showGoals(match.awayExtraGoals)}</td>
      <td>{showGoals(match.homeFirstHalfGoals)}</td>
      <td>{showGoals(match.awayFirstHalfGoals)}</td>
      <td>{showGoals(match.homeSecondHalfGoals)}</td>
      <td>{showGoals(match.awaySecondHalfGoals)}</td>
    </tr>
  );
};

export default TableRow;
