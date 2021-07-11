import Dropdown from "react-bootstrap/Dropdown";


export default function LifeCostDropDown(props) {
    const { neighborhoodProperties } = props;
    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.lifeCost?.veryEconomic}>
                {neighborhoodProperties?.lifeCost?.veryEconomic}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.lifeCost?.economic}>
                {neighborhoodProperties?.lifeCost?.economic}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.lifeCost?.medium}>
                {neighborhoodProperties?.lifeCost?.medium}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.lifeCost?.expensive}>
                {neighborhoodProperties?.lifeCost?.expensive}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.lifeCost?.veryExpensive}>
                {neighborhoodProperties?.lifeCost?.veryExpensive}
            </Dropdown.Item>
        </div>
    )
}