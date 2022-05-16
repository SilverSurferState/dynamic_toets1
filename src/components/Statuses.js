
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";


export function Status(props){
    const {status} = props;
    console.log(status)
    return <>
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <MyCard title={status.description}>
                {status.amount}
            </MyCard>
        </Col>
    </>

}

export function Statuses(props){
    const {statuses, title} = props;
    return <>
        <Section title={title}>
            {statuses.map((status, index) => <Status key={index} status={status} ></Status>)}
        </Section>

    </>
}

Status.propTypes = {
    description: PropTypes.string,
    amount : PropTypes.number
}

Statuses.propTypes = {
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string
}