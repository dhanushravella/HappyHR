import React from 'react';
import './HorizontalSlide.css';
import styled from 'styled-components';
import $ from 'jquery';
import { Row, Col, Popover, Tag, Empty, Divider, Tooltip } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { Column, Pie } from '@ant-design/plots';

const PopOverData = ({ popItem }) => {
  return (
    popItem &&
    popItem.length > 0 &&
    popItem.map((item) => (
      <div className="pad5">
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

class HorizontalSlide extends React.Component {
  state = {
    activeItem: '',
    activeIndex: 0,
    prevItem: '',
    prevIndex: 0,
  };
  constructor(props) {
    super(props);

    this.scroll = this.scroll.bind(this);
    this.click = this.click.bind(this);
  }

  scroll(direction) {
    let far = ($(`.menu${this.props.id}`).width() / 2) * direction;
    let pos = $(`.menu${this.props.id}`).scrollLeft() + far;

    $(`.menu${this.props.id}`).animate({ scrollLeft: pos }, 800);
  }

  click(item, idx) {
    this.setState({
      activeItem: item,
      prevIndex: this.state.activeIndex,
      activeIndex: idx,
      prevItem: this.state.activeItem,
    });
    if (
      idx !== 0 &&
      idx !== Object.keys(this.props.data).length - 1 &&
      idx !== this.state.activeIndex
    ) {
      let i = 1;
      if (this.state.prevIndex > idx) {
        i = -1;
      }
      let far = ($(`.menu${this.props.id}`).width() / 2) * i;
      let pos = $(`.menu${this.props.id}`).scrollLeft() + far;
      $(`.menu${this.props.id}`).animate({ scrollLeft: pos }, 800);
    }
    this.props.onClickHandle(item);
  }

  // componentDidMount()
  // {
  //   fetch("http://jsonplaceholder.typicode.com/photos")
  //   .then(response=> response.json())
  //   .then(photos=>this.setState({Data: photos }));
  //   // .then((photos)=> this.setState({Data:photos}));
  //   console.log(this.state.Data);
  //
  // }

  render() {
    const Car = styled.div`
      padding: 5px;
      display: inline-block;
      width: ${this.props.width}px;
      height: ${this.props.height}px;
    `;

    return (
      <Row gutter={(12, 12)}>
        <Col span={1}>
          <a
            style={{ textDecoration: 'none' }}
            className={`prev2 pv${this.props.id}`}
            onClick={this.scroll.bind(null, -1)}
          >
            &#10094;
          </a>
        </Col>
        <Col span={22} className={`main   menu${this.props.id} row`}>
          {Object.keys(this.props.data).map((item, idx) => (
            <Car key={idx} onClick={this.click.bind(null, item, idx)}>
              <div className={this.state.activeItem === item ? 'slideactive' : ''}>
                <h5 className="mrg10" style={{ color: '#22075e', textAlign: 'center' }}>
                  {item}
                </h5>
                {typeof this.props.data[item] && this.props.data[item].length > 0
                  ? Object.keys(this.props.data[item]) &&
                    Object.keys(this.props.data[item]).map((card, idy) => (
                      <div className={'pad5'}>
                        <Row gutter={[0, 0]}>
                          <Col className="gutter-row" span={11} style={{ textAlign: 'left' }}>
                            <div className="left">{this.props.data[item][card].fieldDesc}</div>
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
                            <Tag
                              color={'green'}
                              style={{
                                margin: '0 auto',
                                justifyContent: 'center',
                              }}
                            >
                              {this.props.data[item][card].PayheadValue}
                            </Tag>
                          </Col>
                        </Row>
                      </div>
                    ))
                  : Object.keys(this.props.data[item]) &&
                    Object.keys(this.props.data[item]).map((card, idy) =>
                      item === '' ? (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                      ) : (
                        <div className="pad5">
                          <Row gutter={[0, 0]}>
                            <Col className="gutter-row" span={11} style={{ textAlign: 'left' }}>
                              <div className="left">{card}</div>
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
                                  width: '50vw',
                                }}
                                content={
                                  this.props.data[item][card] &&
                                  this.props.data[item][card].length > 0 ? (
                                    <Row gutter={[0, 0]}>
                                      <Col
                                        xs={{ span: 24 }}
                                        sm={{ span: 24 }}
                                        md={{ span: 24 }}
                                        lg={{ span: 12 }}
                                      >
                                        <PopOverData
                                          popItem={this.props.data[item][card]}
                                        ></PopOverData>
                                      </Col>
                                      <Col md={{ span: 24 }} lg={{ span: 12 }}>
                                        {/*<Column {...chartData} />*/}
                                        <ChartData
                                          payItem={this.props.data[item][card]}
                                          title={item}
                                          chartType={this.props.chartType}
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
                                  {/*Loop through the this.props.data[item][card] and sum the payheadvalue*/}
                                  {this.props.data[item][card].reduce(
                                    (a, b) => a + (parseFloat(b.PayheadValue) || 0),
                                    0
                                  )}
                                </Tag>
                              </Popover>
                            </Col>
                          </Row>
                        </div>
                      )
                    )}
              </div>
            </Car>
          ))}
        </Col>
        <Col span={1}>
          <a
            style={{ textDecoration: 'none' }}
            className={`next2 nt${this.props.id}`}
            onClick={this.scroll.bind(null, 1)}
          >
            &#10095;
          </a>
        </Col>
      </Row>
    );
  }
}

export default HorizontalSlide;
