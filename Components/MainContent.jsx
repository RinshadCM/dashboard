import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cards from './Cards';
// import DataCards from './DataCards';
// import ProfitCard from './ProfitCard';
// import ChartData from './ChartData';
// import RecentOrders from './RecentOrders';
// import Reviews from './Reviews';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { PiHamburger } from "react-icons/pi";
import { AiOutlineAim } from "react-icons/ai";
import { MdOutlineLunchDining } from "react-icons/md";
import { Constants } from '../Common/constants';
import ProfitCard from './ProfitCrad';
import ChartActivity from './Chart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

const MainContent = () => {
    const icons = [<AiOutlineAim/>, <PiHamburger/>, <MdOutlineLunchDining/>];
  return (
    <div className="bg-dark p-3" style={{ marginTop: "70px", marginLeft: "60px" }}>
      <h4 className="text-light mb-3 mt-2">Dashboard</h4>
      <Row className="g-5">
  {Constants.cardData.map((item, index) => (
    <Col md="2" xs="6" key={index}>
      <Cards data={item} index={index} />
    </Col>
  ))}
  <Col md="4" xs="12">
    <ProfitCard />
  </Col>
</Row>

      <Row className="mt-4">
        <Col md="8" xs="12">
          <ChartActivity />
        </Col>
        <Col md="4" xs="12">
          <div className="rounded p-3 h-100 d-flex flex-column justify-content-around ms-md-3 mt-4 mt-md-0" style={{ backgroundColor: "#292A31" }}>
            {Constants.secondData.map((item, index) => (
              <div key={index} className="d-flex w-100 my-2 gap-2 align-items-center">
                <span className="d-flex align-items-center justify-content-center" style={{ color: item.iconColor, backgroundColor: item.iconBg, borderRadius: "50%", width: "40px", height: "40px" }}>
                  {icons[index]}
                </span>
                <p className="text-light mb-0">{item.title}</p>
                <span style={{ flexGrow: "1", textAlign: "right", color: "white" }}>
                  <IoMdArrowDroprightCircle />
                </span>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md="8" xs="12">
          <RecentOrders />
        </Col>
        <Col md="4" xs="12">
          <Row>
            <Col xs="12">
              <CustomerFeedback />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
