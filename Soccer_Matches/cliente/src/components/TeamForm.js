import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';

const TeamForm = ({ setTeam, setPageSize }) => {
  const handleChangeTeam = (e) => {
    setTeam(e.target.value);
  };

  const handleChangeSize = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <div className='container-form'>
      <h2 className='text-center'>Buscar partidos por equipo</h2>
      <Form className='my-5'>
        <Form.Label className='label-form'>Equipo</Form.Label>
        <Form.Control
          type='text'
          name='team'
          placeholder='Nombre del equipo'
          onChange={handleChangeTeam}
        />
        <Form.Label className='mt-5 label-form'>
          Número de resultados por página
        </Form.Label>
        <Form.Control
          className='mb-4'
          as='select'
          name='pageSize'
          onChange={handleChangeSize}
        >
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
        </Form.Control>
      </Form>
    </div>
  );
};

export default TeamForm;
