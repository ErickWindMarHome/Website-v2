import { MunicipiosPR, translationsForm } from '../../utils/data'
import { getUTMs } from '../../features/getUTM/getUTM'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import PhoneInput from '../Inputs/PhoneInput_Normal'

export default function FormsLeads({ id, phone, email, city, tittle, products, florida, estilos, boton, destination, placeholder, lenguaje }) {
  const utms = getUTMs()
  const [validedPhone, setValidedPhone] = useState(false)

  const {
    register,
    formState: { errors },
    reset,
  } = useForm({})

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  const metods = useForm({
    mode: 'onBlur',
  })

  console.log(errors)
  useEffect(() => {
    reset()
  }, [reset])
  return (
    <>
      <div className={estilos?.div ?? ''}>
        <h1 className={estilos?.tittle}>{tittle}</h1>
        <FormProvider {...metods}>
          <form
            //onSubmit={handleSubmit(onSubmit)}
            name="form"
            id={id ?? 'form'}
            action="https://forms.zohopublic.com/windmarhomepr/form/Leads1/formperma/1rAl0b5EQcHm06FT8iAg_R0vz-HJwapPN38nmTWW3ls/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            {/* <!-- To Track referrals , place the referrer name within the " " in the above hidden input field --> */}
            <input type="hidden" name="zf_redirect_url" value="" />
            {/* <!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --> */}
            <input type="hidden" name="zc_gad" value="" />
            {/* <!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --> */}
            <p></p>

            <div className="w-full justify-between">
              <div className="flex flex-col">
                <label className={estilos.label ?? 'hidden'}>
                  Nombre
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('Name_First', {
                    required: 'Nombre requerido',
                    pattern: {
                      value: /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/,
                      message: 'Ingrese solo letras y/o espacios.',
                    },
                  })}
                  className={estilos.inputText}
                  type="text"
                  name="Name_First"
                  placeholder={placeholder && 'First Name'}
                />
                {errors.Name_First && <p className={estilos.error ?? 'text-red-500'}>{errors.Name_First.message}</p>}
              </div>
              <div className="flex flex-col">
                <label className={estilos.label ?? 'hidden'}>
                  Apellido
                  <strong className={estilos.error ?? 'text-red-500'}>*</strong> :
                </label>
                <input
                  {...register('Name_Last', {
                    required: 'Apellido requerido',
                    pattern: {
                      value: /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/,
                      message: 'Ingrese solo letras y/o espacios.',
                    },
                  })}
                  className={estilos.inputText}
                  type="text"
                  name="Name_Last"
                  placeholder={placeholder && 'Apellido'}
                />
                {errors.Name_Last && <p className={estilos.error ?? 'text-red-500'}>{errors.Name_Last.message}</p>}
              </div>
            </div>
            {phone && (
              <PhoneInput
                className={estilos?.inputText}
                errorRequired={translationsForm[lenguaje].reqPhone}
                errorPattern={translationsForm[lenguaje].errorPhone}
              />
            )}

            {email && (
              <div className="flex w-full flex-col">
                <label className={estilos.label ?? 'hidden'}> Email :</label>
                <input
                  {...register('Email', {
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: 'Ingrese un email valido',
                    },
                  })}
                  className={estilos.inputText}
                  type="text"
                  name="Email"
                  placeholder={placeholder && 'Email'}
                />
                {errors.Email && <p className={estilos.error ?? 'text-red-500'}>{errors.Email.message}</p>}
              </div>
            )}
            {city && (
              <div className="flex w-full flex-col">
                <label className={estilos.label ?? 'hidden'} htmlFor="">
                  Municipio :
                </label>
                <select className={estilos.select} name="Dropdown" {...register('Dropdown')}>
                  <option value="-">--</option>
                  {MunicipiosPR.map((municipio, index) => {
                    return (
                      <>
                        <option key={index} value={municipio}>
                          {municipio}
                        </option>
                      </>
                    )
                  })}
                </select>
              </div>
            )}

            {/* <label className={estilos.label??"hidden"}> 
UTM Campaign 
</label> */}

            <input {...register('SingleLine4')} type="hidden" name="SingleLine4" value={utms.utm_campaign ?? 'Direct'} placeholder="" />
            {/* <label className={estilos.label??"hidden"}> 
UTM Medium 
</label> */}
            <input {...register('SingleLine5')} type="hidden" name="SingleLine5" value={utms.utm_medium ?? 'Direct'} placeholder="" />
            {/* <label className={estilos.label??"hidden"}> 
UTM Source 
</label> */}
            <input {...register('SingleLine6')} type="hidden" name="SingleLine6" value={utms.utm_source ?? 'LeadSource'} placeholder="" />
            {/* <label className={estilos.label??"hidden"}> 
UTM Content 
</label> */}
            <input {...register('SingleLine7')} type="hidden" name="SingleLine7" value={utms.utm_content ?? 'Direct'} placeholder="" />
            {/* <label className={estilos.label??"hidden"}> 
UTM Term 
</label> */}
            <input {...register('SingleLine3')} type="hidden" name="SingleLine3" value={utms.utm_term ?? 'Direct'} placeholder="" />
            <button className={estilos.button} disabled={Object.keys(errors).length > 0} type="submit">
              {boton ?? 'Enviar'}
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
