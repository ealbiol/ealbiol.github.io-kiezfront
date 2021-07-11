import Dropdown from "react-bootstrap/Dropdown";


export default function ArchitectureDropdown(props) {
    const { NeighborhoodsName } = props;

    return (
        <div>
            {
                NeighborhoodsName.map((neighborhood, index) => {
                    return (
                        <Dropdown.Item key={index} eventKey={neighborhood?.name?.toUpperCase()}>

                            {neighborhood?.name?.toUpperCase()}

                        </Dropdown.Item>
                    )
                })
            }


        </div>
    )
}