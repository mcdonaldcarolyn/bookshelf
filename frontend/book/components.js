
import { Col, Row, Button } from "react-bootstrap";


export function Book(props) {
  const { book } = props;
  const toggleButtonText = book.finished ? "Unfinish" : "Finish"
                      
}