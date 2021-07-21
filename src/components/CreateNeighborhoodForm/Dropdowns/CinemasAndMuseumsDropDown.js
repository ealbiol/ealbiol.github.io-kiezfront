import Dropdown from "react-bootstrap/Dropdown";



export default function CinemasAndMuseumsDropDown(props) {
    const { neighborhoodProperties } = props;
    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.cinemas?.zero}>
                {neighborhoodProperties?.cinemas?.zero}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.cinemas?.oneToTwo}>
                {neighborhoodProperties?.cinemas?.oneToTwo}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.cinemas?.threeToFive}>
                {neighborhoodProperties?.cinemas?.threeToFive}
            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.cinemas?.plusFive}>
                {neighborhoodProperties?.cinemas?.plusFive}
            </Dropdown.Item>

        </div>
    )
}