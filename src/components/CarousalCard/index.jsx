import React from 'react';
import { Divider, Row, Col, Popover, Tag, Empty, Tooltip } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import { WarningOutlined } from '@ant-design/icons';

const PopOverData = ({ popItem }) => {
  return (
    popItem &&
    popItem.length > 0 &&
    popItem.map((item) => (
      <div className="pad10">
        <Row gutter={[0, 0]}>
          <Col span={14}>{item.fieldDesc}</Col>
          <Col span={2}>-</Col>
          <Col span={8}>
            <Tag
              color={'green'}
              style={{
                margin: '0 auto',
                justifyContent: 'center',
              }}
            >
              {item.PayheadValue}
            </Tag>
          </Col>
        </Row>
      </div>
    ))
  );
};

const ChartData = ({ payItem, chartType }) => {
  const data = payItem.map((item) => {
    return {
      type: item.fieldDesc,
      value:
        parseFloat(
          item.PayheadValue === 'YES' ? 1 : item.PayheadValue.toString().replace(/,/g, '')
        ) || 0,
    };
  });

  const chartConfig = {
    data,
    xField: 'type',
    yField: 'value',
    angleField: 'value',
    colorField: 'type',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return <div>{chartType === 'pie' ? <Pie {...chartConfig} /> : <Column {...chartConfig} />}</div>;
};

const DrillChartData = ({ payItem, title, chartType }) => {
  const data =
    payItem &&
    Object.keys(payItem).map((item) => {
      return {
        type: item,
        value:
          parseFloat(payItem[item].value === 'YES' ? 1 : payItem[item].value.replace(/,/g, '')) ||
          0,
        children: payItem[item].breakDown.map((item) => {
          return {
            type: item,
            value:
              parseFloat(
                payItem[item].value === 'YES' ? 1 : payItem[item].value.replace(/,/g, '')
              ) || 0,
          };
        }),
      };
    });

  const chartConfig = {
    data,
    xField: 'type',
    yField: 'value',
    angleField: 'value',
    colorField: 'type',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return <div>{chartType === 'pie' ? <Pie {...chartConfig} /> : <Column {...chartConfig} />}</div>;
};

export default function PayCard({
  title,
  borderColor,
  payData,
  info,
  colSize,
  midSize,
  chartType,
  titleAlign,
  consolidated,
  content,
}) {
  return chartType !== 'onlychart' ? (
    <Col
      className="gutter-row"
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: midSize || 12 }}
      lg={{ span: colSize || 8 }}
      xl={{ span: colSize || 8 }}
      xxl={{ span: colSize || 8 }}
    >
      <div
        className="whiteBox shadow"
        style={{ color: '#595959', fontSize: 13, height: 'auto', border: borderColor }}
      >
        {title && (
          <div
            className="strong"
            style={{ textAlign: titleAlign || 'center', justifyContent: 'center' }}
          >
            <h3 className="mrg10" style={{ color: '#22075e', marginBottom: 0 }}>
              {title}
            </h3>
          </div>
        )}
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        {payData &&
          Object.keys(payData) &&
          Object.keys(payData).map((item) =>
            item === '' ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              <>
                <div className="pad5">
                  <Row gutter={[0, 0]}>
                    <Col className="gutter-row" span={11} style={{ textAlign: 'left' }}>
                      <div className="left">{item}</div>
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
                      span={10}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Popover
                        /*color={item.tagColor}*/
                        overlayStyle={{
                          width: '40vw',
                        }}
                        content={
                          payData[item] && payData[item].length > 0 ? (
                            <Row gutter={[0, 0]}>
                              <Col
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 24 }}
                                lg={{ span: 12 }}
                              >
                                <PopOverData popItem={payData[item]}></PopOverData>
                              </Col>
                              <Col md={{ span: 24 }} lg={{ span: 12 }}>
                                {/*<Column {...chartData} />*/}
                                <ChartData
                                  payItem={payData[item]}
                                  title={item}
                                  chartType={chartType}
                                ></ChartData>
                              </Col>
                            </Row>
                          ) : (
                            <>
                              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </>
                          )
                        }
                        title={<h3 className="mrg10">{item}</h3>}
                      >
                        <Tag
                          color={'green'}
                          style={{
                            margin: '0 auto',
                            justifyContent: 'center',
                          }}
                        >
                          {payData[item].reduce((partialSum, a) => partialSum + a.PayheadValue, 0)}
                        </Tag>
                      </Popover>
                    </Col>
                    {item.outlierReason && (
                      <Col span={1}>
                        <Tooltip title={item.outlierReason}>
                          <WarningOutlined
                            style={{ fontSize: '16px', position: 'absolute', right: '10px' }}
                          />
                        </Tooltip>
                      </Col>
                    )}
                  </Row>
                </div>
              </>
            )
          )}
        {consolidated && consolidated.length > 0 && (
          <div className="pad5">
            <Row gutter={[24, 4]}>
              {consolidated &&
                consolidated.length > 0 &&
                consolidated.map((item) =>
                  item.title === '' ? (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  ) : (
                    <>
                      <Col
                        className="gutter-row"
                        xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 6 }}
                        lg={{ span: 6 }}
                        xl={{ span: 4 }}
                        style={{ textAlign: 'center' }}
                      >
                        <Popover
                          /*color={item.tagColor}*/
                          overlayStyle={{
                            width: '40vw',
                          }}
                          content={
                            item && item.breakDown && item.breakDown.length > 0 ? (
                              <Row gutter={[0, 0]}>
                                <Col
                                  xs={{ span: 24 }}
                                  sm={{ span: 24 }}
                                  md={{ span: 24 }}
                                  lg={{ span: 12 }}
                                >
                                  <PopOverData popItem={item}></PopOverData>
                                </Col>
                                <Col md={{ span: 24 }} lg={{ span: 12 }}>
                                  {/*<Column {...chartData} />*/}
                                  <ChartData
                                    payItem={item}
                                    title={item.title}
                                    chartType={chartType}
                                  ></ChartData>
                                </Col>
                              </Row>
                            ) : (
                              <>
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                              </>
                            )
                          }
                          title={<h3 className="mrg10">{item.title}</h3>}
                        >
                          <Tag
                            color={item.tagColor}
                            style={{
                              margin: '0 auto',
                              justifyContent: 'center',
                              textAlign: 'center',
                              width: '100%',
                            }}
                          >
                            <h2 className="mrg10">{item.value}</h2> {item.title}
                          </Tag>
                        </Popover>
                      </Col>
                    </>
                  )
                )}
            </Row>
          </div>
        )}
        {info && Object.keys(info).length !== 0 && (
          <Row gutter={[8, 8]}>
            {info &&
              Object.keys(info).length !== 0 &&
              Object.keys(info).map((item) => {
                if (item === 'payData' || item === 'consolidatedData') return null;
                return (
                  <>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 24 }}
                      lg={{ span: 12 }}
                      xl={{ span: 8 }}
                    >
                      <div className="pad8">
                        <Row gutter={[0, 24]}>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10} style={{ textAlign: 'left' }}>
                            <div className="left strong">{item}</div>
                          </Col>
                          <Col className="gutter-row" span={1}>
                            :
                          </Col>
                          <Col
                            className="gutter-row"
                            span={12}
                            style={{
                              display: 'flex',
                            }}
                          >
                            {true ? (
                              <Tooltip title={'CHANGE'}>
                                <Tag color={'blue'}>
                                  <div className="left">{info[item]}</div>
                                </Tag>
                              </Tooltip>
                            ) : (
                              <>{info[item]}</>
                            )}
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </>
                );
              })}
          </Row>
        )}
        {content}
      </div>
    </Col>
  ) : (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 8 }}>
      <DrillChartData
        payItem={payData.payData}
        title={payData.title}
        chartType={'pie'}
      ></DrillChartData>
    </Col>
  );
}
