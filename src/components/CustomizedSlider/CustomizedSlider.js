import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));



const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);




export default function CustomizedSlider(props) {
  // Destructuring
  const { index, property, setJSONFilter, JSONFilter } = props;
  const { min, max, marks, valueText } = property;


  //console.log("Imprimiendo props en customized " , props);

  // Estructuring
  /*props:
  {name:{property.name},
   min:{property.min} ,
   max:{property.max}
  }*/
  // 1 - Actualizar el estado correspondiente al elemento seleccionado
  const classes = useStyles();
  function test(index, e) {
    // Test

    if (e.target.innerText !== "") {
      console.log(e.target.innerText)
      const text = valueText(parseInt(e.target.innerText))
      console.log("TEXT ", text);
      switch (index) {

        case 0:
          // ... Obten el objeto antiguo y sumale lo de la derecha
          // Spread operator
          setJSONFilter({ ...JSONFilter, architecturePredominance: text });
          break;

        case 1:
          setJSONFilter({ ...JSONFilter, inernationality: text });
          break;

        case 2:
          setJSONFilter({ ...JSONFilter, partyWinner: text });
          break;

        case 3:
          setJSONFilter({ ...JSONFilter, transportZone: text });
          break;

        case 4:
          setJSONFilter({ ...JSONFilter, activityRate: text });
          break;

        case 5:
          setJSONFilter({ ...JSONFilter, lifeCost: text });
          break;

        case 6:
          setJSONFilter({ ...JSONFilter, inhabitantsDensity: text });
          break;

        case 7:
          setJSONFilter({ ...JSONFilter, citizenAverageAge: text });
          break;

        case 8:
          setJSONFilter({ ...JSONFilter, gymDensity: text });
          break;

        // NOT WORKING 
        case 9:
          setJSONFilter({ ...JSONFilter, supermarketsDensity: text });
          break;

        // NOT WORKING
        case 10:
          setJSONFilter({ ...JSONFilter, cinemas: text });
          break;

        // NOT WORKING
        case 11:
          setJSONFilter({ ...JSONFilter, museums: text });
          break;

        case 12:
          setJSONFilter({ ...JSONFilter, nightLife: text });
          break;

        case 13:
          setJSONFilter({ ...JSONFilter, airQuality: text });
          break;

        case 14:
          setJSONFilter({ ...JSONFilter, cleanness: text });
          break;

        case 15:
          setJSONFilter({ ...JSONFilter, greenAreasDensity: text });
          break;

        case 16:
          setJSONFilter({ ...JSONFilter, noiseLevel: text });
          break;

        case 17:
          setJSONFilter({ ...JSONFilter, safety: text });
          break;

        case 18:
          setJSONFilter({ ...JSONFilter, privateParkingDensity: text });
          break;

        case 19:
          setJSONFilter({ ...JSONFilter, busLines: text });
          break;

        case 20:
          setJSONFilter({ ...JSONFilter, parkingStreetSlots: text });
          break;
        default:
      }
    }
  }


  return (
    <div className={classes.root}>

      <PrettoSlider onChangeCommitted={(e) => test(index, e)} marks={marks} step={null} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} min={min} max={max} />
      <div className={classes.margin} />

    </div>
  );
}

