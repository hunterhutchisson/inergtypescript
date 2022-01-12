


import React, {FormEvent} from 'react'
import Nav from 'react-bootstrap/Nav'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectViewTheme, updateSelectState, updateSelectViewTheme } from '../../features/map/mapSlice'


function Header() {
    const dispatch = useAppDispatch();
    const viewTheme = useAppSelector(selectViewTheme)
    return (
          <>
  <Nav className="justify-content-end" variant="pills" defaultActiveKey="day" onClick={(e)=>dispatch(updateSelectViewTheme(e.target.id))}>
    <Nav.Item>
      <Nav.Link className={(viewTheme === "night") ? "btn-grey":""} eventKey='day' id="day">Day</Nav.Link>
    </Nav.Item>
    <Nav.Item >
      <Nav.Link className={(viewTheme === "night") ? "btn-grey":""} eventKey="night" id="night">Night</Nav.Link>
    </Nav.Item>
  </Nav>
          </>
      )
}

export default Header;