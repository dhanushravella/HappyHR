import React from 'react';
import { Divider, Collapse, Row, Col, Tooltip, Button, Tag, Tour } from 'antd';
import { useRef, useState, useEffect } from 'react';
import { PrinterOutlined, StockOutlined } from '@ant-design/icons';
import { DashboardLayout } from '@/layout';
import PayCard from '@/components/CarousalCard';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { green } from '@mui/material/colors';
import { HaiCardSlider } from '@/components/HaiCardSlider';
import { request } from '@/request';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const Payroll = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [payListData, setPayListData] = useState([]);
  const [activePayData, setActivePayData] = useState(null);
  const [payData, setPayData] = useState(null);
  const [activeCard, setActiveCard] = useState('No Card Selected');
  const steps = [
    {
      title: 'Latest Payslip Records',
      description: 'This section has the latest payslip records.',
      target: () => ref1.current,
    },
    {
      title: 'Employee Details',
      description: 'This section shows employee details for the selected payslip.',
      target: () => ref2.current,
    },
    {
      title: 'Pay Details',
      description:
        'This section details all the pay components processed under the chosen payslip period.',
      target: () => ref3.current,
    },
    {
      title: 'Payslip Report',
      description:
        'To generate a payslip report, click on the print icon on the top right corner of the payslip.',
      target: () => ref4.current,
    },
  ];
  const fabStyle = {
    position: 'absolute',
    bgcolor: green[500],
    top: 100,
    right: 32,
  };

  const [open, setOpen] = useState(false);
  let options = {};
  const entity = 'payrolls';
  useEffect(() => {
    // Combo Data
    const payList = async () => {
      options = {
        empCode: JSON.parse(window.localStorage.auth).emp_code || 'VVDN/3994',
        months: 8,
        type: 'smart',
      };
      let queryData = request.payList({ entity, options });
      return queryData;
    };
    payList().then((res) => {
      if (res && res.success === true) setPayListData(res.result);
    });
  }, []);

  const handleItemClick = (item) => {
    setActiveCard(item);
    const payData = async () => {
      options = {
        empCode: JSON.parse(window.localStorage.auth).emp_code || 'VVDN/3994',
        month: item,
        type: 'smart',
      };
      let queryData = request.payData({ entity, options });
      return queryData;
    };
    payData().then((res) => {
      if (res && res.success === true) setPayData(res.result[0]);
    });
    var payMonths = payListData[item];
    setActivePayData(payMonths);
  };

  const [drawOpen, setDrawOpen] = React.useState(false);

  function handleDrawOpen() {
    setDrawOpen(!open);
  }

  function handleDrawClose() {
    setDrawOpen(false);
  }

  return (
    <>
      <DashboardLayout>
        <Fab onClick={handleDrawOpen} sx={fabStyle} aria-label={'Expand'} color={'inherit'}>
          <KeyboardArrowLeftIcon />
        </Fab>
        <HaiCardSlider
          title={'Pay cards'}
          items={payListData}
          width={'400'}
          height={'200'}
          chartType={'pie'}
          id={'payMonthSlide'}
          toggleIcon={false}
          onClickHandle={(item) => handleItemClick(item)}
        ></HaiCardSlider>
        <Divider style={{ padding: 0, margin: 10 }}></Divider>
        {activePayData && (
          <>
            <Row gutter={[24, 24]}>
              <Col
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 24 }}
              >
                <Collapse
                  size="small"
                  items={[
                    {
                      key: '1',
                      label: (
                        <div className="strong">
                          Payslip for the period of <Tag color={'cyan'}>{activeCard}</Tag>{' '}
                          <Tooltip title="Print Report">
                            <PrinterOutlined
                              style={{ fontSize: '16px', position: 'absolute', right: '50px' }}
                              ref={ref4}
                              onClick={(event) => {
                                event.stopPropagation();
                              }}
                            />
                          </Tooltip>
                          <Tooltip title="Show Tour">
                            <Button
                              type="primary"
                              shape="circle"
                              icon={<StockOutlined />}
                              onClick={(event) => {
                                setOpen(true);
                                event.stopPropagation();
                              }}
                              style={{ position: 'absolute', right: '100px' }}
                            />
                          </Tooltip>
                        </div>
                      ),
                      children: (
                        <PayCard
                          title=""
                          titleAlign={'left'}
                          info={payData}
                          colSize={24}
                          midSize={24}
                        ></PayCard>
                      ),
                    },
                  ]}
                />
              </Col>
            </Row>
            <HaiCardSlider
              title={'Pay cards'}
              items={activePayData}
              width={'500'}
              height={'400'}
              chartType={'bar'}
              id={'payDataSlide'}
              toggleIcon={true}
              onClickHandle={(item) => console.log(item)}
            ></HaiCardSlider>
          </>
        )}
        <Drawer
          PaperProps={{ style: { width: '40%' } }}
          anchor={'right'}
          open={drawOpen}
          onClose={handleDrawClose}
        >
          <Typography
            id="decorated-list-demo"
            level="body3"
            textTransform="uppercase"
            fontWeight="lg"
            mb={1}
          >
            Insights for the pay cycle of {activeCard}
          </Typography>
          <List>
            <ListItem>
              🧅 You are in the 75th percentile in terms of deductions when compared with all those
              employees who are earning on the same scale as you. Probably you can revisit your
              investments to save more tax. (Note: I am improving to provide more insights and
              compare more properties to come upwith such more suggestions)
            </ListItem>
            <ListItem>
              🍤 2 Your deductions seems to be the same average, that depicts that you have planned
              your investments to ensure that you save more tax while there was an increase in your
              net pay
            </ListItem>
            <ListItem>
              🥓 You netpay is sligtly higher than last month as well as 20% increase when comapred
              to the average of last 8 months
            </ListItem>
          </List>
        </Drawer>
      </DashboardLayout>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export default Payroll;
