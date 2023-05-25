import { Cloud, ICloud } from "react-icon-cloud";
import './CustomCloud.css';

export const CustomCloud = (  { skills }: any) => {

 const cloudProps: Omit<ICloud, 'children'> = {
    containerProps: {
      style: {
      }
    },
    options: {
      textColour:"#ECC86C",
      clickToFront: 500,
      depth: 1,
      imageScale: 0.1,
      reverse: true,
      tooltipDelay: 0,
      zoomMin: 0.50,
      zoom: 0.88,
      zoomMax: 0.88,
      wheelZoom: true,
      dragControl: true,
      bgOutlineThickness: 2,
      bgRadius: 10,
      padding: 50,
      outlineMethod: "none",
      noSelect: true,
    },
    canvasProps: {
      style: {
      }
    }
  }

  return <Cloud {...cloudProps}>
       {skills.length !== 0 ? 
        skills.map((skill: any, index : number) => (
              <a key={index}>
                {skill.name}
                <img src={skill.icon} alt={skill.name} height={1500} width={1500}/>
              </a>
          ))
        : <a> No skills found </a>
        }
      </Cloud>
}