import * as PropTypes from "prop-types";
import {Persons} from "../components/Persons";

Persons.propTypes = {title: PropTypes.string};

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen"/>
        </div>
    );
}