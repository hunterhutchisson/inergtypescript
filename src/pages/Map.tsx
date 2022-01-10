

import React, {useState, useEffect, FormEvent, FC} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Plot from 'react-plotly.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectViewTheme, selectStateData, stateDataObject } from '../features/map/mapSlice';



const Map = ({stateObj}: {stateObj: stateDataObject | null}) => {
    const stateDataGlobal = useAppSelector(selectStateData)
    const viewTheme = useAppSelector(selectViewTheme)
    const [dataForBar, setDataForBar] = useState(stateObj ? [{
        y: [stateObj.positive, stateObj.hospitalizedCurrently, (stateObj.positive-stateObj.hospitalizedCurrently-stateObj.death),stateObj.death],
        x: ['Total Cases', 'Active Cases', 'Recovered','Deaths'],
        type: 'bar'
    }]:"")
    const [layoutForBar, setLayoutForBar] = useState(stateObj ? {
        width: 600,
        height: 500,
        title: `${stateObj.state} covid cases`
    }:"")

    const [viewport, setViewport] = useState({
        longitude:-97,
        latitude:40,
        width: "100%",
        height: "700px",
        zoom: 3
    })

    const [individualShow, setIndividualShow] = useState<stateDataObject | null>(null)

    useEffect(() => {
        const listener = (e: { key: string; }) => {
            if(e.key === "Escape"){
                setIndividualShow(null)
            }
        }
        window.addEventListener("keydown", listener)
        return() =>{
            window.removeEventListener("keydown", listener)
        }
    }, [])
    return (
        <>
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken="pk.eyJ1IjoiaHVudGVyaHV0Y2giLCJhIjoiY2t3anVreTA4MWxzMTJwcHd4cnRtY3ZkbyJ9.QOq8G9tShJdU1j_q26-tMg" 
            mapStyle={(viewTheme === "night") ? 'mapbox://styles/hunterhutch/ckwjv9etg27z614r7bdgamfwl':'mapbox://styles/hunterhutch/ckxctvmvk1dsc14okoj98g9ev'}
            onViewportChange={(viewport: React.SetStateAction<{ longitude: number; latitude: number; width: string; height: string; zoom: number; }>) => {
                setViewport(viewport)
            }}
            >
                {stateObj 
                ?
                <>
                <Marker latitude={stateObj.coordinates.latitude} longitude={stateObj.coordinates.longitude}>
                    <button className="btn-size" onClick={(e) => {
                        e.preventDefault();
                        setIndividualShow(stateObj)
                                setDataForBar([{
                                    y: [stateObj.positive, stateObj.hospitalizedCurrently, (stateObj.positive-stateObj.hospitalizedCurrently-stateObj.death),stateObj.death],
                                    x: ['Total Cases', 'Active Cases', 'Recovered','Deaths'],
                                    type: 'bar'
                                }])
                                setLayoutForBar({
                                    width: 400,
                                    height: 300,
                                    title: `${stateObj.state} covid cases`
                                })
                        }}><FontAwesomeIcon icon="syringe" className="icon-size" />
                    </button>
                </Marker>
                </>
                :
                <>
                    {stateDataGlobal.map((state: stateDataObject, index)=>{
                        return(
                        <Marker key={index} latitude={state.coordinates.latitude} longitude={state.coordinates.longitude}>
                            <button className="btn-size" onClick={(e) => {
                                e.preventDefault();
                                setIndividualShow(state)
                                setDataForBar([{
                                    y: [state.positive, state.hospitalizedCurrently, (state.positive-state.hospitalizedCurrently-state.death),state.death],
                                    x: ['Total Cases', 'Active Cases', 'Recovered','Deaths'],
                                    type: 'bar'
                                }])
                                setLayoutForBar({
                                    width: 400,
                                    height: 300,
                                    title: `${state.state} covid cases`
                                })
                            }}><FontAwesomeIcon icon="syringe" className="icon-size"/></button>
                        </Marker>
                        )
                    })}
                </>
                }

                {individualShow
                ? 
                <Popup latitude={individualShow.coordinates.latitude} 
                longitude={individualShow.coordinates.longitude}
                onClose={()=>{
                    // setShowInfo(false)
                    setIndividualShow(null)
                }}
                >
                    <Plot data={dataForBar} layout={layoutForBar} />
                </Popup>
                :null}
            </ReactMapGL>
        </>
    )
}

export default Map
