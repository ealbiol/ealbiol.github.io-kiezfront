import Dropdown from "react-bootstrap/Dropdown";

//Activity Rate

// Using Activity Rate subproperties for other properties such as:

//InhabitantsDensity

export default function CitizenAverageAgeDropDown(props) {
    const { neighborhoodProperties } = props;
    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.citizenAverageAge?.thirty}>
                {neighborhoodProperties?.citizenAverageAge?.thirty}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.citizenAverageAge?.forty}>
                {neighborhoodProperties?.citizenAverageAge?.forty}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.citizenAverageAge?.fifty}>
                {neighborhoodProperties?.citizenAverageAge?.fifty}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.citizenAverageAge?.sixty}>
                {neighborhoodProperties?.citizenAverageAge?.sixty}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.citizenAverageAge?.seventy}>
                {neighborhoodProperties?.citizenAverageAge?.seventy}
            </Dropdown.Item>
        </div>
    )
}