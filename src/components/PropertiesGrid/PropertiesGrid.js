import "./PropertiesGrid.scss";

export default function PropertiesGrid({ NeighborhoodInfo }) {
  return (
    <div className="main-PropertiesGrid ">
      <div className="propertiesGrid-parent">
        
        <PropertiesGridElement
          propertyName={NeighborhoodInfo?.district?.name?.toUpperCase()}
          src={NeighborhoodInfo?.district?.image}
          width="200px"
        />

        <PropertiesGridElement
          propertyName="ARCHITECTURE"
          src={NeighborhoodInfo?.architecturePredominance?.image}
          propertyValue={NeighborhoodInfo?.architecturePredominance?.name}
        />

        <PropertiesGridElement
          propertyName="PARTY WINNER"
          src={NeighborhoodInfo?.partyWinner?.image}
          centered="partyWinner-father-box"
        />

        <PropertiesGridElement
          propertyName="TRANSPORT ZONE"
          backGround={NeighborhoodInfo?.transportZone?.color}
          fontLetter="transport-letter"
          propertyValue={NeighborhoodInfo?.transportZone?.name}
        />

        <PropertiesGridElement
          propertyName="ACTIVITY RATE"
          src={NeighborhoodInfo?.activityRate?.image}
          propertyValue={NeighborhoodInfo?.activityRate?.name}
        />

        <PropertiesGridElement
          propertyName="RESTAURANTS"
          src={NeighborhoodInfo?.restaurantsDensity?.image}
          propertyValue={NeighborhoodInfo?.restaurantsDensity?.name}
        />

        <PropertiesGridElement
          propertyName="NIGHT LIFE"
          src={NeighborhoodInfo?.nightLife?.image}
          propertyValue={NeighborhoodInfo?.nightLife?.name}
        />

        <PropertiesGridElement
          propertyName="CLEANNESS"
          src={NeighborhoodInfo?.cleanness?.image}
          propertyValue={NeighborhoodInfo?.cleanness?.name}
        />

        <PropertiesGridElement
          propertyName="MUSEUMS"
          src={NeighborhoodInfo?.museums?.image}
          propertyValue={NeighborhoodInfo?.museums?.name}
        />

        <PropertiesGridElement
          propertyName="NOISE LEVEL"
          src={NeighborhoodInfo?.noiseLevel?.image}
          propertyValue={NeighborhoodInfo?.noiseLevel?.name}
        />

        <PropertiesGridElement
          propertyName="SUPERMARKETS"
          src={NeighborhoodInfo?.supermarketsDensity?.image}
          propertyValue={NeighborhoodInfo?.supermarketsDensity?.name}
        />

        <PropertiesGridElement
          propertyName="U-BAHN LINES"
          src={NeighborhoodInfo?.ubahnLines?.image}
          fontBlack="black-font"
          propertyValue={NeighborhoodInfo?.ubahnLines?.name}
        />

        <PropertiesGridElement
          propertyName="S-BAHN LINES"
          src={NeighborhoodInfo?.sbahnLines?.image}
          propertyValue={NeighborhoodInfo?.sbahnLines?.name}
        />

        <PropertiesGridElement
          propertyName="LIFE COST"
          src={NeighborhoodInfo?.lifeCost?.image}
          propertyValue={NeighborhoodInfo?.lifeCost?.name}
        />

        <PropertiesGridElement
          propertyName="CINEMAS"
          src={NeighborhoodInfo?.cinemas?.image}
          propertyValue={NeighborhoodInfo?.cinemas?.name}
        />
      </div>
    </div>
  );
}

//Componente Property Grid Element: Plantilla de cada elemento del grid.
//Es otro componente dentro del mismo archivo PropertiesGrid.js
//Parecido al ejercicio 1 de React.
function PropertiesGridElement(props) {
  const {
    propertyName,
    src,
    propertyValue,
    width,
    centered,
    backGround,
    fontLetter,
    fontBlack,
  } = props;
  return (
    <div>
      <div className="property-name">{propertyName}</div>
      <div
        style={{ backgroundColor: backGround }}
        className={`propertiesGrid-parent__properties-child ${centered}`}
      >
        <img
          className="transition"
          width={width ? width : "300px"}
          src={src}
          alt=""
        />
        <div
          className={`propertiesGrid-parent__properties-child__centered ${fontLetter} ${fontBlack}`}
        >
          {propertyValue}
        </div>
      </div>
    </div>
  );
}
