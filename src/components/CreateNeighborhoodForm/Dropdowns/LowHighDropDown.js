import Dropdown from "react-bootstrap/Dropdown";

//Activity Rate

// Using Activity Rate subproperties for other properties such as:

//inhabitantsDensity
//gymDensity
//restaurantsDensity
//greenAreaDensity
//cleanness
//airQuality

export default function LowHighDropDown(props) {
    const { neighborhoodProperties } = props;
    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.activityRate?.veryLow}>
                {neighborhoodProperties?.activityRate?.veryLow}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.activityRate?.low}>
                {neighborhoodProperties?.activityRate?.low}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.activityRate?.medium}>
                {neighborhoodProperties?.activityRate?.medium}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.activityRate?.high}>
                {neighborhoodProperties?.activityRate?.high}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.activityRate?.veryHigh}>
                {neighborhoodProperties?.activityRate?.veryHigh}
            </Dropdown.Item>
        </div>
    )
}