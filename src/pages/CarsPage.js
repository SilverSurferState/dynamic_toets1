import {Cars} from "../components/Cars";
import {Status} from "../components/Statuses";

export function CarsPage(props) {
    const {cars} = props
    const status = {description: "new arrival", "amount": 5}
    return (
        <div className="mx-3" >
            <Cars cars={cars} title="Auto's"/>
            <Cars cars={cars.filter(car => car.status !== "sold")} title="Auto's TE KOOP"/>
            <Status status={status}></Status>
        </div>
    );
}