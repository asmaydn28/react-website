import { Col } from 'react-bootstrap';


function NotFound() {
  return (
    <>
      <Col xs={{span:12, order:1}} md={{span:8, order:2}} className="mt-5">
      <div className="p-4 bg-white rounded shadow-sm border">
        <h2>404 NOT FOUND!!</h2>
      </div>
      </Col>
    </>
  )
}

export default NotFound

