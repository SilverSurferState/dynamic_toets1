import {Cars} from "../components/Cars";

export function CarsPage(props) {
    const {cars} = props

    return (
        <div className="mx-3" >
            <Cars cars={cars} title="Auto's"/>
            <Cars cars={cars.filter(car => car.status !== "sold")} title="Auto's TE KOOP"/>
        </div>
    );
}