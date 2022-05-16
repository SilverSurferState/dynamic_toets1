
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import PropTypes from "prop-types";


export function Status(props){
    const {status} = props;
    console.log(status)
    return <>
        <Section>
            <MyCard title={status.description}>
                {status.amount}
            </MyCard>
        </Section>
    </>

}

Status.propTypes = {
    description: PropTypes.string,
    amount : PropTypes.number
}