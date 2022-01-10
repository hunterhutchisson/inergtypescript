

import React, {useState, FormEvent} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateSelectState, selectStateData, stateDataObject } from '../features/map/mapSlice';


const SelectState = () => {
    const dispatch = useAppDispatch();
    const stateData = useAppSelector(selectStateData)
    const [selectedState, setSelectedState] = useState(null)

    const handleSelectState = (e: FormEvent) => {
        let state = stateData.find(({state})=> state === e.target.value)
        if(state){
          dispatch(updateSelectState(state))
        }
    }
    const handleResetState = () => {
        setSelectedState(null)
        dispatch(updateSelectState(null))
    }
    return (
      <>
      <div className='row'>
        <div className='col-12'>
      <h1>State Breakdowns</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
      <select defaultValue={selectedState} onChange={handleSelectState}>
        <option hidden value="defaultValue">Pick a State</option>
        {stateData.map(state => {
          return <option key={state.state} value={state.state}>{state.state}</option>
        })}
      </select>
      <button onClick={handleResetState}>Reset</button>
        </div>
      </div>
      </>
    )
}

export default SelectState
