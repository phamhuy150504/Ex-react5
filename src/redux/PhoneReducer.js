import dataPhone from '../data/dataPhone.json'

const initState = {
    dataPhone: dataPhone,
    detail: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
}

const PhoneReducer = (state = initState, action) => {
    switch(action.type) { 
        case 'CHANGE_DETAIL': {
            let index = state.dataPhone.findIndex(item => item.maSP === action.payload)
            let cloneDetailPhone = {...state.dataPhone[index]}
            if (index !== -1) {
                state.detail = cloneDetailPhone
            } 
            return {...state}
        }
        default : {
            return {...state}
        }
    }
    return state
};

export default PhoneReducer