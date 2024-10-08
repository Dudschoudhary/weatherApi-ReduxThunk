import {configureStore} from '@reduxjs/toolkit'
import weatherApiData from '../weatherApi/weatherSlice/weatherSlice'

export const store = configureStore({
    reducer:{
        'weather':weatherApiData
    }
})