import Dropdown from "react-bootstrap/Dropdown";


export default function TransportZoneDropdown(props) {
    const { neighborhoodProperties } = props;
    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.transportZone?.a}>

                {neighborhoodProperties?.transportZone?.a}

            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.transportZone?.b}>
                {neighborhoodProperties?.transportZone?.b}

            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.transportZone?.c}>
                {neighborhoodProperties?.transportZone?.c}

            </Dropdown.Item>
        </div>
    )
}