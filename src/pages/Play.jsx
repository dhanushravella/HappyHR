import { DashboardLayout } from '@/layout';
import React from 'react';
import { useState } from 'react';
import { HaiDataGrid } from '../components/HaiDataGrid';

import { Col, Divider, Row, Tag } from 'antd';

const TopCard = ({ title, tagContent, tagColor, prefix }) => {
  return (
    <Col
      className="gutter-row"
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 6 }}
    >
      <div className="whiteBox shadow" style={{ color: '#595959', fontSize: 13, height: '106px' }}>
        <div className="pad15 strong" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <h3 style={{ color: '#22075e', marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={11} style={{ textAlign: 'left' }}>
              <div className="left">{prefix}</div>
            </Col>
            <Col className="gutter-row" span={2}>
              <Divider
                style={{
                  padding: '10px 0',
                  justifyContent: 'center',
                }}
                type="vertical"
              ></Divider>
            </Col>
            <Col
              className="gutter-row"
              span={11}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Tag
                color={tagColor}
                style={{
                  margin: '0 auto',
                  justifyContent: 'center',
                }}
              >
                {tagContent}
              </Tag>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default function Play() {
  const [state, setState] = useState('generalSettings');

  const isActive = (tab) => {
    return state === tab ? true : false;
  };

  const handleTabChange = (tab) => {
    setState(tab);
  };
     var columns = [
       { title: 'Name', field: 'name' },
       { title: 'Surname', field: 'surname' },
       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
       {
         title: 'Birth City',
         field: 'birthCity',
         lookup: { 1: 'Linz', 2: 'Vöcklabruck', 3: 'Salzburg' },
       },
     ];

     var rows = [
       { id: '1', name: 'Max', surname: 'Mustermann', birthYear: 1987, birthCity: 'Linz' },
       { id: '2', name: 'Cindy', surname: 'Musterfrau', birthYear: 1995, birthCity: 'Salzburg' },
     ];
  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>
        <TopCard title={'Present'} tagColor={'cyan'} prefix={'As of today'} tagContent={'7/31'} />

        <TopCard title={'Absent'} tagColor={'volcano'} prefix={'As of today'} tagContent={'7/31'} />
        <TopCard title={'On AR'} tagColor={'gold'} prefix={'As of today'} tagContent={'7/31'} />
        <TopCard title={'On OD'} tagColor={'green'} prefix={'As of today'} tagContent={'0/31'} />
      </Row>
      <div className="space30"></div>

      {/* <LocalizationProvider 
     dateAdapter={AdapterDayjs}>

     {/* <DateCalendar
     autoFocus={'true'}
     //displayWeekNumber={'true'}

     >

    </DateCalendar>
     </LocalizationProvider> */}

      {/* const  Columns =[ 
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      { title: 'Birth City', field: 'birthCity', lookup: { 1: 'Linz', 2: 'Vöcklabruck', 3: 'Salzburg' } }
     ]
    {/* //  const gridData=[
    //       { name: 'Max', surname: 'Mustermann', birthYear: 1987, birthCity: 1 },
    //       { name: 'Cindy', surname: 'Musterfrau', birthYear: 1995, birthCity: 2 }
    //   ] 
    const data = [
         {id: '1', name: 'Max', surname: 'Mustermann', birthYear: 1987, birthCity: 1} ,
           {id: '2', name: 'Cindy', surname: 'Musterfrau', birthYear: 1995, birthCity: 2 }
    ]; */}
      <Col>
      
        <HaiDataGrid rows ={rows} columns = {columns} />
        {/* //  rows = {data}
    // columns = {Columns} */}

        {/* </HaiDataGrid> */}
      </Col>
    </DashboardLayout>
  );
}
