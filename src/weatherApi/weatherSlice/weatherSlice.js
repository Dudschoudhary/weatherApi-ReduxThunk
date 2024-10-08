import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchWeatherData = createAsyncThunk('fetchWeatherData', async (cityName) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}
        &appid=b10b069104fd1765b46354a9dcc40585`);
        
        return response.data;
    }

    catch (error) {

    }

})



const initialState = {
    weatherData: null,
    cityName: '',
    status: 'idle',
    error: null
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCityName: (state, action) => {
            state.cityName = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.status = "Loating"
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.status = "succeed"
                console.log(action.payload)
                state.weatherData = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.status = action.error.message
            })

    }
})

export const { setCityName } = weatherSlice.actions;

export default weatherSlice.reducer