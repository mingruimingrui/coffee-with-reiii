import { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, CardBody } from "react-bootstrap";
import PropTypes from "prop-types";
import { BeanInfo } from "../data/beans";

export class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  handleClick(e) {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    const info = this.props.beanInfo;

    const frontCard = (
      <div
        className="MenuCard MenuCardFront shadow-sm"
        onClick={(e) => this.handleClick(e)}
      >
        <Card>
          <Card.Img src={info.imgSrc} />
          <Card.ImgOverlay>
            {info.tastingNotes.map((note) => (
              <p>{note}</p>
            ))}
          </Card.ImgOverlay>
          <CardBody>
            <Card.Title>{info.title}</Card.Title>
            <Card.Text>{info.shortDescription}</Card.Text>
          </CardBody>
        </Card>
      </div>
    );

    const backCard = (
      <Card
        className="MenuCard MenuCardBack shadow-sm"
        onClick={(e) => this.handleClick(e)}
      >
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <hr />
          <Card.Text>
            Origin: {info.origin}
            <br />
            Varietal: {info.varietal}
            <br />
            Processing: {info.processing}
            <br />
            Roaster: {info.roaster}
            <br />
            Roast Level: {info.roastLevel}
            <hr />
            Notes: {info.tastingNotes.join(", ")}
          </Card.Text>
        </Card.Body>
      </Card>
    );

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        {backCard}
        {frontCard}
      </ReactCardFlip>
    );
  }
}

MenuCard.propTypes = {
  beanInfo: PropTypes.instanceOf(BeanInfo),
};
