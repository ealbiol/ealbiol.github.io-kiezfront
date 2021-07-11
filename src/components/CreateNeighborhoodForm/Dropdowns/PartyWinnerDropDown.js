import Dropdown from "react-bootstrap/Dropdown";


export default function PartyWinnerDropdown(props) {
    const { neighborhoodProperties } = props;
    return (
        <div>
            <Dropdown.Item eventKey={neighborhoodProperties?.partyWinner?.cdu}>

                {neighborhoodProperties?.partyWinner?.cdu}

            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.partyWinner?.spd}>
                {neighborhoodProperties?.partyWinner?.spd}

            </Dropdown.Item>

            <Dropdown.Item eventKey={neighborhoodProperties?.partyWinner?.grune}>
                {neighborhoodProperties?.partyWinner?.grune}

            </Dropdown.Item>
            <Dropdown.Item eventKey={neighborhoodProperties?.partyWinner?.afd}>
                {neighborhoodProperties?.partyWinner?.afd}

            </Dropdown.Item>
            <Dropdown.Item eventKey={neighborhoodProperties?.partyWinner?.linke}>
                {neighborhoodProperties?.partyWinner?.linke}


            </Dropdown.Item>
        </div>
    )
}