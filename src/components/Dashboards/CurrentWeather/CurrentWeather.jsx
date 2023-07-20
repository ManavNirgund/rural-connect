import { useFormik } from 'formik'
import React from 'react'

const CurrentWeather = () => {

    const formik = useFormik({
        initialValues: {
            country: "",
            city: "",
        }
    })

  return (
    <div>
        
    </div>
  )
}

export default CurrentWeather