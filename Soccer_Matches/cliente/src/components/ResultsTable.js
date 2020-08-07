import React from 'react';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';

const ResultsTable = ({ matches }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Liga</th>
          <th>Cantidad de equipos</th>
          <th>Equipo local</th>
          <th>Equipo visitante</th>
          <th>Resultados</th>
          <th>Goles del local</th>
          <th>Goles del vistante</th>
          <th>Goles del local - TE</th>
          <th>Goles del visitante - TE</th>
          <th>Goles del local - 1</th>
          <th>Goles del visitante - 1</th>
          <th>Goles del local - 2</th>
          <th>Goles del visitante - 2</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(matches)
          ? matches.map((match) => <TableRow key={match.id} match={match} />)
          : null}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
