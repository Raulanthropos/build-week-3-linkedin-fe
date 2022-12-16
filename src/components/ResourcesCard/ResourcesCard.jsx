import { Col, Container, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { GiRadarDish } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";

import "./resourcesCard.css";

const ResourcesCard = () => {
  return (
    <div className="resources-card custom-card pb-0">
      <Container>
        <div className="header-card">Resources</div>
        <Row className="mb-3">
          <Col>
            <div className="d-flex text-light-grey align-items-center">
              <span className="mr-1 d-flex align-items-center">
                <AiFillEye />
              </span>
              Private to you
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-column">
              <div className="header-small">
                <span className="mr-2">
                  <GiRadarDish className="card-icon" />
                </span>
                Creator mode <span>Off</span>
              </div>
              <div>
                Get discovered, showcase content on your profile, and get access
                to creator tools
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className="d-flex flex-column">
              <div className="header-small">
                <span className="mr-2">
                  <MdPeopleAlt className="card-icon" />
                </span>
                My network
              </div>
              <div>
                Get discovered, showcase content on your profile, and get access
                to creator tools
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="mb-0" />
      <div className="show-all-resources show-all-btn header-small-gray d-flex justify-content-center">
        Show all 5 resources{" "}
        <span className="ml-1">
          <BiRightArrowAlt className="card-icon" />
        </span>
      </div>
    </div>
  );
};

export default ResourcesCard;
