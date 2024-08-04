import React from 'react';
import { Row, Col } from 'reactstrap';
import { TiArrowSortedUp } from "react-icons/ti";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProfitCard = () => {
    const percentage = 70;
    return (
        <div className='rounded p-1 h-100' style={{ backgroundColor: "#292A31" }}>
            <Row className="align-items-center">
                <Col xs={7}>
                    <small style={{ color: "#9ca3af", fontSize: "12px" }}>Net Profit</small>
                    <h2 style={{ color: "white", fontSize: "28px", fontWeight: "bold", marginBottom: "4px", marginTop: "4px" }}>$ 6759.25</h2>
                    <span style={{ color: "#4ade80", fontSize: "12px" }}>
                        <TiArrowSortedUp style={{verticalAlign: "middle"}} />
                        3%
                    </span>
                </Col>
                <Col xs={4} className="text-end">
                    <div style={{ width: "80px", height: "80px", marginLeft: "auto" }}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                pathColor: "#4361ee",
                                trailColor: "#374151",
                                textColor: "white",
                                textSize: "22px",
                            })}
                        />
                    </div>
                    {/* <p className='mt-1 mb-0' style={{ fontSize: "10px", color: "#9ca3af" }}>Goal Completed</p> */}
                </Col>
            </Row>
            {/* <p className='m-0 mt-2' style={{ fontSize: "10px", color: "#9ca3af" }}>*The values here has been rounded off.</p> */}
        </div>
    );
}

export default ProfitCard;