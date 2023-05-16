import {createSlice} from "@reduxjs/toolkit";

const initialData: Array<any> = ["apple_1", "apple_2", "apple_3", "apple_4", "apple_5", "apple_6", "apple_7", "apple_8",
    "apple_9", "apple_10"]

const initialState = {
    item: initialData,
    itemCount: 0
}

const ActivityItemSlice = createSlice({
    name: "activityItem",
    initialState: initialState,
    reducers: {
        deleteItem: (state: any, {payload}) => {
            state.item.pop()
            state.itemCount = state.itemCount + 1
        },
        reset: (state: any) => {
            state.itemCount = 0
            state.item = initialData
        }
    }
})

export const {deleteItem, reset} = ActivityItemSlice.actions
export default ActivityItemSlice
