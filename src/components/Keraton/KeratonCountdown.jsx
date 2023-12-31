import {React} from 'react';
import Countdown from 'react-countdown';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonCountdown(props) {
  const {keratonDate} = props;

  const Completionist = () =>
    <h2 className="keraton-completed">is now.</h2>;

  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <DisplayBlocks timeArray={[days, hours, minutes, seconds]} stringArray={[days === 1 ? "day" : "days", hours === 1 ? "hour" : "hours", minutes === 1 ? "minute" : "minutes", seconds === 1 ? "second" : "seconds"]} />
    }
  };
  return (
    <div>
      <Countdown
        date={keratonDate}
        renderer={renderer}
      />
    </div>
  )
}

function DisplayBlocks(props) {
  const {timeArray, stringArray} = props;
  const displayTime = timeArray.map((time, i) => {
    return (
      <Col className="col-6 mx-auto">
        <TimeBlock time={time} stringArray={stringArray} index={i}></TimeBlock>
      </Col>
    )
  });
  return (
    <Row className="countdown-row justify-content-center mb-3 mx-auto">
      {displayTime}
    </Row>
  )
}

function TimeBlock(props) {
  const {time, stringArray, index} = props;
  return (
    <Card className="keraton-countdown-card col-6 mx-auto px-2 py-2 my-2">
      <Card.Title className="countdown-title">{time}</Card.Title>
      <Card.Title className="countdown-sub-title">{stringArray[index].toUpperCase()}</Card.Title>
    </Card>
  )
}

export default KeratonCountdown;