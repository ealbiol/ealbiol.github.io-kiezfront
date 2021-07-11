import Dropdown from "react-bootstrap/Dropdown";


export default function ArchitectureDropdown(props) {
    const { neighborhoodProperties } = props;

    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.architecturePredominance?.oldTown}>

                {neighborhoodProperties?.architecturePredominance?.oldTown}

            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.architecturePredominance?.historic}>
                {neighborhoodProperties?.architecturePredominance?.historic}

            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.architecturePredominance?.plattenbau}>
                {neighborhoodProperties?.architecturePredominance?.plattenbau}

            </Dropdown.Item>
            <Dropdown.Item eventKey={neighborhoodProperties?.architecturePredominance?.modern}>
                {neighborhoodProperties?.architecturePredominance?.modern}

            </Dropdown.Item>
            <Dropdown.Item eventKey={neighborhoodProperties?.architecturePredominance?.newConstruction}>
                {neighborhoodProperties?.architecturePredominance?.newConstruction}


            </Dropdown.Item>
        </div>
    )
}
