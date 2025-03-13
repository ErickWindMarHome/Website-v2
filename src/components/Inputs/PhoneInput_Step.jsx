import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { postValidationNumber } from '../../hooks/fetchDataApi'
import { useDebounce } from '@uidotdev/usehooks'
import { useMutation } from '@tanstack/react-query'

const PhoneInput = ({ className, errorRequired, errorPattern, phoneValided }) => {
  const {
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext()

  const [Error, setErrorState] = useState(null)

  const debouncedPhone = useDebounce(watch('Phone'), 500)

  const postValidationNumberMutation = useMutation({
    mutationFn: (phoneNumber_) => postValidationNumber([phoneNumber_]),
    onSuccess: () => {},
    onError: (error) => {
      setErrorState({
        type: 'manual',
        message: 'Error al validar el número de teléfono. Inténtalo de nuevo más tarde.',
      })
      console.error('Error al validar el número de teléfono', error)
    },
  })

  const isValidPhoneNumber = (value) => /^[2-9]\d{9}$/.test(value)

  useEffect(() => {
    const phoneValue = watch('Phone')

    if (!phoneValue?.length) {
      setError('Phone', {
        type: 'manual',
        message: errorRequired,
      })
    } else {
      clearErrors('Phone')
    }

    if (phoneValue?.length === 10 && !isValidPhoneNumber(phoneValue)) {
      setError('Phone', {
        type: 'manual',
        message: 'El número de teléfono no es válido. Debe comenzar con un dígito entre 2 y 9.',
      })
    } else if (phoneValue?.length === 10 && isValidPhoneNumber(phoneValue)) {
      clearErrors('Phone')
    }
  }, [watch('Phone'), setError, clearErrors])

  const validatePhoneNumber = async (value) => {
    if (value.length === 10 && isValidPhoneNumber(value)) {
      try {
        const result = await postValidationNumberMutation.mutateAsync(value)
        const contactability = result?.data?.results[0]?.Phone_Contactability

        if (contactability === 'Inválida') {
          setErrorState({
            type: 'manual',
            message: 'Tu número de teléfono no es válido, por favor verifícalo y vuelve a intentarlo.',
          })
          setError('Phone', {
            type: 'manual',
            message: 'Tu número de teléfono no es válido, por favor verifícalo y vuelve a intentarlo.',
          })
        } else {
          setValue('Phone', value)
          clearErrors('Phone')
          phoneValided(true)
          setErrorState(null)
        }
      } catch (error) {
        setErrorState({
          type: 'manual',
          message: 'Error al validar el número de teléfono. Inténtalo de nuevo más tarde.',
        })
        setError('Phone', {
          type: 'manual',
          message: 'Error al validar el número de teléfono. Inténtalo de nuevo más tarde.',
        })
      }
    } else {
      setErrorState({
        type: 'manual',
        message: errorPattern,
      })
      setError('Phone', {
        type: 'manual',
        message: errorPattern,
      })
    }
  }

  useEffect(() => {
    if (debouncedPhone && debouncedPhone.length === 10) {
      validatePhoneNumber(debouncedPhone)
    }
  }, [debouncedPhone])

  const handleChange = (e) => {
    phoneValided(false)
    setValue('Phone', e.target.value)
  }

  return (
    <>
      <input
        type="text"
        maxLength={10}
        placeholder="Ingrese su número de teléfono"
        className={className}
        value={watch('Phone')}
        onChange={handleChange}
      />
      {errors?.Phone && <p className="text-center text-sm text-red-500">{errors.Phone.message}</p>}
      {Error && !errors?.Phone && <p className="text-center text-sm text-red-500">{Error.message}</p>}
    </>
  )
}

export default PhoneInput
