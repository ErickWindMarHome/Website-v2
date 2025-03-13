import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  CDBG_Numero_Cotizacion: '',
  Sales_Rep_Notes: 'Nivel de ingreso: 1 persona - $33,600',
  CDBG_Name: '',
  CDBG_Last_Name: '',
  CDBG_Email: '',
  CDBG_Phone: '',
  CDBG_Sales_Rep: '',
  // Household_members: 1,
  Net_Income: 33600,
  Form_Name: '',
  Last_Name: '',
  First_Name: '',
  File: '',
  Full_Name: '',
  Email: '',
  Phone: '',
  City: '',
  Direcci_n: '',
  Zip_Code: '',
  Lead_Type: '',
  Lead_Source: '',
  Lead_Status: '',
  Referido_Nombre: '',
  Referido_Email: '',
  Referido_Telefono: '',
  Referido_por: '',
  Rol: '',
  PR_Referral_Name: '',
  PR_Referral_Phone: '',
  Language_Preference: '',
  Monthly_Bill: '',
  Utility1: '',
  If_the_Lead_the_homeowner: '',
  Sales_Rep: '',
  Sales_Rep_Email: '',
  Sales_Consultant_Phone: '',
  Street: '',
  UTM_Term: '',
  UTM_Campaign: '',
  UTM_Content: '',
  UTM_Medium: '',
  UTM_Source: '',
  FB_ID: '',
  FB_Ad_Name: '',
  FB_Ad_Set_Name: '',
  FB_Campaign_Name: '',
  Google_Adname: '',
  Google_Adset: '',
  Google_Campaign: '',
  Products: 'Enphase PV',
  CDBG_Ticket_Number: '',
  Name: '',
}

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setCDBG_Numero_Cotizacion: (state, action) => {
      state.CDBG_Numero_Cotizacion = action.payload
    },
    setSales_Rep_Notes: (state, action) => {
      state.Sales_Rep_Notes = action.payload
    },
    setCDBG_Name: (state, action) => {
      state.CDBG_Name = action.payload
    },
    setCDBG_Last_Name: (state, action) => {
      state.CDBG_Last_Name = action.payload
    },
    setCDBG_Email: (state, action) => {
      state.CDBG_Email = action.payload
    },
    setCDBG_Phone: (state, action) => {
      state.CDBG_Phone = action.payload
    },
    setCDBG_Sales_Rep: (state, action) => {
      state.CDBG_Sales_Rep = action.payload
    },
    // setHousehold_members: (state, action) => {
    //   state.Household_members = action.payload;
    // },
    setNet_Income: (state, action) => {
      state.Net_Income = action.payload
    },
    setForm_Name: (state, action) => {
      state.Form_Name = action.payload
    },
    setLast_Name: (state, action) => {
      state.Last_Name = action.payload
    },
    setFirst_Name: (state, action) => {
      state.First_Name = action.payload
    },
    setFull_Name: (state, action) => {
      state.Full_Name = action.payload
    },
    setEmail: (state, action) => {
      state.Email = action.payload
    },
    setPhone: (state, action) => {
      state.Phone = action.payload
    },
    setCity: (state, action) => {
      state.City = action.payload
    },
    setDirecci_n: (state, action) => {
      state.Direcci_n = action.payload
    },
    setZip_Code: (state, action) => {
      state.Zip_Code = action.payload
    },
    setLead_Type: (state, action) => {
      state.Lead_Type = action.payload
    },
    setLead_Source: (state, action) => {
      state.Lead_Source = action.payload
    },
    setLead_Status: (state, action) => {
      state.Lead_Status = action.payload
    },
    setReferido_Nombre: (state, action) => {
      state.Referido_Nombre = action.payload
    },
    setReferido_Email: (state, action) => {
      state.Referido_Email = action.payload
    },
    setReferido_Telefono: (state, action) => {
      state.Referido_Telefono = action.payload
    },
    setReferido_por: (state, action) => {
      state.Referido_por = action.payload
    },
    setPR_Referral_Name: (state, action) => {
      state.PR_Referral_Name = action.payload
    },
    setPR_Referral_Phone: (state, action) => {
      state.PR_Referral_Phone = action.payload
    },
    setLanguage_Preference: (state, action) => {
      state.Language_Preference = action.payload
    },
    setMonthly_Bill: (state, action) => {
      state.Monthly_Bill = action.payload
    },
    setUtility1: (state, action) => {
      state.Utility1 = action.payload
    },
    setIf_the_Lead_the_homeowner: (state, action) => {
      state.If_the_Lead_the_homeowner = action.payload
    },
    setSales_Rep: (state, action) => {
      state.Sales_Rep = action.payload
    },
    setSales_Rep_Email: (state, action) => {
      state.Sales_Rep_Email = action.payload
    },
    setSales_Consultant_Phone: (state, action) => {
      state.Sales_Consultant_Phone = action.payload
    },
    setStreet: (state, action) => {
      state.Street = action.payload
    },
    setUTM_Term: (state, action) => {
      state.UTM_Term = action.payload
    },
    setUTM_Campaign: (state, action) => {
      state.UTM_Campaign = action.payload
    },
    setUTM_Content: (state, action) => {
      state.UTM_Content = action.payload
    },
    setUTM_Medium: (state, action) => {
      state.UTM_Medium = action.payload
    },
    setUTM_Source: (state, action) => {
      state.UTM_Source = action.payload
    },
    setFB_ID: (state, action) => {
      state.FB_ID = action.payload
    },
    setFB_Ad_Name: (state, action) => {
      state.FB_Ad_Name = action.payload
    },
    setFB_Ad_Set_Name: (state, action) => {
      state.FB_Ad_Set_Name = action.payload
    },
    setFB_Campaign_Name: (state, action) => {
      state.FB_Campaign_Name = action.payload
    },
    setGoogle_Adname: (state, action) => {
      state.Google_Adname = action.payload
    },
    setGoogle_Adset: (state, action) => {
      state.Google_Adset = action.payload
    },
    setGoogle_Campaign: (state, action) => {
      state.Google_Campaign = action.payload
    },
    setProducts: (state, action) => {
      state.Products = action.payload
    },
    setCDBG_Ticket_Number: (state, action) => {
      state.CDBG_Ticket_Number = action.payload
    },
    setFile: (state, action) => {
      state.File = action.payload
    },
    setRol: (state, action) => {
      state.Rol = action.payload
    },
    setName: (state, action) => {
      state.Name = action.payload
    },

    // setForm_Type: (state, action) => {
    //   state.Form_Type = action.payload;
    // },
  },
})

export const {
  setCDBG_Numero_Cotizacion,
  setSales_Rep_Notes,
  setCDBG_Name,
  setCDBG_Last_Name,
  setCDBG_Email,
  setCDBG_Phone,
  setCDBG_Sales_Rep,
  //setHousehold_members,
  setNet_Income,
  setForm_Name,
  setLast_Name,
  setFirst_Name,
  setFull_Name,
  setEmail,
  setPhone,
  setCity,
  setDirecci_n,
  setZip_Code,
  setLead_Type,
  setLead_Source,
  setLead_Status,
  setReferido_Nombre,
  setReferido_Email,
  setReferido_Telefono,
  setReferido_por,
  setPR_Referral_Name,
  setPR_Referral_Phone,
  setLanguage_Preference,
  setMonthly_Bill,
  setUtility1,
  setIf_the_Lead_the_homeowner,
  setSales_Rep,
  setSales_Rep_Email,
  setSales_Consultant_Phone,
  setStreet,
  setUTM_Term,
  setUTM_Campaign,
  setUTM_Content,
  setUTM_Medium,
  setUTM_Source,
  setFB_ID,
  setFB_Ad_Name,
  setFB_Ad_Set_Name,
  setFB_Campaign_Name,
  setGoogle_Adname,
  setGoogle_Adset,
  setGoogle_Campaign,
  setProducts,
  setCDBG_Ticket_Number,
  setFile,
  setRol,
  setName,
} = formDataSlice.actions

export default formDataSlice.reducer
