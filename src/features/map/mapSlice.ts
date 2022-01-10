
import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

import data from '../../assets/data.json';
const stateCoordList = data.states


export interface usData {
    date: number;
    states: number;
    positive: number;
    negative: number;
    pending: number;
    hospitalizedCurrently: number;
    hospitalizedCumulative: number;
    inIcuCurrently: number;
    inIcuCumulative: number;
    onVentilatorCurrently: number;
    onVentilatorCumulative: number;
    dateChecked: string;
    death: number;
    hospitalized: number;
    totalTestResults: number;
    lastModified: string;
    recovered:number | null;
    total: number;
    posNeg: number;
    deathIncrease: number;
    hospitalizedIncrease: number;
    negativeIncrease: number;
    positiveIncrease: number;
    totalTestResultsIncrease: number;
    hash: string;
}

export interface coordinate {
    name: string
    longitude: number
    latitude: number
}

export interface stateDataObject {
    date: number;
    state: string;
    positive: number;
    probableCases:number | null;
    negative:number | null;
    pending:number | null;
    totalTestResultsSource: string;
    totalTestResults: number;
    hospitalizedCurrently: number;
    hospitalizedCumulative: number | null;
    inIcuCurrently: number;
    inIcuCumulative: number | null;
    onVentilatorCurrently: number | null;
    onVentilatorCumulative: number | null;
    recovered: number | null;
    lastUpdateEt: string;
    dateModified: string;
    checkTimeEt: string;
    death: number;
    hospitalized: number | null;
    hospitalizedDischarged: number | null;
    dateChecked: string;
    totalTestsViral: number;
    positiveTestsViral: number | null;
    negativeTestsViral: number | null;
    positiveCasesViral: number;
    deathConfirmed: number | null;
    deathProbable: number | null;
    totalTestEncountersViral: number | null;
    totalTestsPeopleViral: number | null;
    totalTestsAntibody: number | null;
    positiveTestsAntibody: number | null;
    negativeTestsAntibody: number | null;
    totalTestsPeopleAntibody: number | null;
    positiveTestsPeopleAntibody: number | null;
    negativeTestsPeopleAntibody: number | null;
    totalTestsPeopleAntigen: number | null;
    positiveTestsPeopleAntigen: number | null;
    totalTestsAntigen: number | null;
    positiveTestsAntigen: number | null;
    fips: string;
    positiveIncrease: number;
    negativeIncrease: number;
    total: number;
    totalTestResultsIncrease: number;
    posNeg: number;
    positiveScore: number;
    score: number;
    grade: string;
    coordinates: coordinate | null;
}

export interface dataState {
    usData: usData | {};
    stateData: Array<stateDataObject>;
    chosenState: stateDataObject | null;
    viewTheme: string;
};

const initialState: dataState = {
    usData: {},
    stateData: [],
    chosenState: null,
    viewTheme: "day"
};


export const fetchUsData:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/fetchUsData",
async (dummmy, thunkAPI) => {

        let usResponse = await axios.get('https://api.covidtracking.com/v1/us/current.json')
        return usResponse.data[0]

}
)
export const fetchStateData:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/fetchStateData",
async (dummy, thunkAPI) => {

        let statesResponse = await axios.get('https://api.covidtracking.com/v1/states/current.json')  
        let stateList = statesResponse.data
        stateList.map((state: stateDataObject, index: number)=>{
            if(state.state === stateCoordList[index].name){
                return state.coordinates = stateCoordList[index]
            }
        })
        return stateList

}
)

export const mapSlice = createSlice({
    name: 'Map',
    initialState,
    reducers: { 
        updateSelectState: (state, action: PayloadAction<stateDataObject>) => {
            state.chosenState = action.payload
        },
        updateSelectViewTheme: (state, action: PayloadAction<string>) => {
            state.viewTheme = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsData.fulfilled, (state, { payload }) => {
            state.usData = payload;
        })
        builder.addCase(fetchStateData.fulfilled, (state, { payload }) => {
            state.stateData = payload;
        })
    },
});

export const { updateSelectState, updateSelectViewTheme} = mapSlice.actions;

export const selectUsData = (state: RootState) => state.map.usData;

export const selectStateData = (state: RootState) => state.map.stateData;

export const selectChosenState = (state: RootState) => state.map.chosenState;

export const selectViewTheme = (state: RootState) => state.map.viewTheme;

export default mapSlice.reducer

function rejectWithValue(data: any): any {
    throw new Error('Function not implemented.');
}

