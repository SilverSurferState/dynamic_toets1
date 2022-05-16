import {Cars} from "../components/Cars";
import {Status, Statuses} from "../components/Statuses";
import {Section} from "../components/Section";

export function CarsPage(props) {
    const {cars} = props
    const status = {description: "new arrival", "amount": 5}
    const statuses = [{description: "new arrival", "amount": 5}, {description: "for sale", "amount": 3},{description: "sold", "amount": 1}]
    return (
        <div className="mx-3" >
            <Cars cars={cars} title="Auto's"/>
            <Cars cars={cars.filter(car => car.status !== "sold")} title="Auto's TE KOOP"/>
            <Section title="Test Status"><Status status={status}></Status></Section>
            <Statuses statuses={statuses} title="Test Statuses"></Statuses>
        </div>
    );
}