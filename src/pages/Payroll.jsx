import React from 'react';
import { Divider, Collapse, Row, Col, Tooltip, Button, Tag, Tour } from 'antd';
import { useRef, useState, useEffect } from 'react';
import { PrinterOutlined, StockOutlined } from '@ant-design/icons';
import { DashboardLayout } from '@/layout';
import PayCard from '@/components/CarousalCard';
import PayData from '@/data/PayData.json';
import PayMonths from '@/data/PayMonths.json';
import { HaiCardSlider } from '@/components/HaiCardSlider';
import { request } from '@/request';

const GroupPayData =
  PayData &&
  PayData.payData.reduce((group, payType) => {
    group[payType['prefix']] = group[payType['prefix']] ?? [];
    group[payType['prefix']].push(payType);
    return group;
  }, []);

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
  const [open, setOpen] = useState(false);
  // ?empCode=1110007&months=4&type=smart
  let options = {};
  const entity = 'payrolls';
  useEffect(() => {
    // Combo Data
    const payList = async () => {
      options = { empCode: 'VVDN/3994', months: 8, type: 'smart' };
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
      options = { empCode: 'VVDN/3994', month: item, type: 'smart' };
      let queryData = request.payData({ entity, options });
      return queryData;
    };
    payData().then((res) => {
      if (res && res.success === true) setPayData(res.result[0]);
    });
    var payMonths = payListData[item];
    setActivePayData(payMonths);
  };

  return (
    <>
      <DashboardLayout>
        <HaiCardSlider
          title={'Pay cards'}
          items={payListData}
          width={'400'}
          height={'200'}
          chartType={'pie'}
          id={'payMonthSlide'}
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
              onClickHandle={(item) => console.log(item)}
            ></HaiCardSlider>
          </>
        )}
        {/*<Row gutter={[12, 12]} ref={ref1}>
          {Object.keys(PayMonths).map((month) => (
            <PayCard
              title={month}
              chartType={'pie'}
              payData={PayMonths[month]}
              colSize={6}
              borderColor={'2px solid lightblue'}
            ></PayCard>
          ))}
        </Row>
        <Divider style={{ padding: 0, margin: 10 }}></Divider>
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
                      Payslip for the period of <Tag color={'cyan'}>{PayData.period}</Tag>{' '}
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
                      info={PayData.info}
                      colSize={24}
                      midSize={24}
                    ></PayCard>
                  ),
                },
              ]}
            />
          </Col>
        </Row>
        <Divider style={{ padding: 0, margin: 10 }}></Divider>
        <Row gutter={[24, 24]} ref={ref2}>
          <PayCard
            titleAlign={'left'}
            consolidated={PayData.consolidatedData}
            colSize={24}
            midSize={24}
          ></PayCard>
        </Row>
        <Divider style={{ padding: 0, margin: 10 }}></Divider>
        <Row>
          <Col
            className="gutter-row"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
            xl={{ span: 16 }}
            xxl={{ span: 16 }}
          >
            <Row gutter={[8, 8]} ref={ref3}>
              {GroupPayData &&
                Object.keys(GroupPayData).map((payType) => {
                  return (
                    <PayCard
                      info=""
                      title={payType}
                      chartType={'bar'}
                      payData={GroupPayData[payType]}
                    ></PayCard>
                  );
                })}
            </Row>
          </Col>
          <PayCard
            title={'CHART'}
            chartType={'onlychart'}
            payData={[]}
            colSize={6}
            borderColor={'2px solid lightblue'}
          ></PayCard>
        </Row>*/}
      </DashboardLayout>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export default Payroll;
