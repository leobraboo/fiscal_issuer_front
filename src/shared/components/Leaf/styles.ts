import styled from "styled-components";
import { Accordion, Button } from 'react-bootstrap';

export const StyledAccordion = styled(Accordion)`

.accordion-button:focus{
    box-shadow: none;
}

.accordion-button:not(.collapsed){
    background-color: #DCDCDC;
    color: black;
    font-weight: bold;
}

.accordion-button::after {
    color: var(--bs-accordion-bg);
}
`

export const ContentButtons = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const BButton = styled(Button)`
    background: whitesmoke;
    color: BlueViolet;
    font-weight: bold;
    border: 1px solid #8A2BE2;

    &:hover {
    background: BlueViolet;
    color: whitesmoke;
  }
`