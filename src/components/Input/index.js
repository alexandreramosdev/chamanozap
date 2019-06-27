import React, { useState } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import Clipboard from "react-clipboard.js"
import { Input, Button } from "semantic-ui-react"
import SelectCountries from "./selectCountries"

const FInput = ({ field, ...props }) => <Input {...field} {...props} />

const InputFormik = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  handleReset,
}) => {
  const [active, setActive] = useState(false)
  return (
    <Form>
      <div style={{ padding: "5px" }}>
        <p style={{ color: "gray" }}>Digite o n° ( Ex. 11 97718-5120 )</p>
        <SelectCountries
          value={values.countries}
          name="countries"
          onChange={handleChange}
          onBlur={handleBlur}
          className=""
          style={{ display: "block", margin: "0 auto 5px", padding: "3px" }}
        />
        <Field
          size="huge"
          name="tel"
          type="tel"
          component={FInput}
          placeholder="11 97718-5120"
        />
        {errors.tel && touched.tel && (
          <p style={{ color: "red" }}>{errors.tel}</p>
        )}
      </div>

      <Button.Group size="big">
        <Button positive type="submit" disabled={!errors.tel && !values.tel}
          style={{ boxShadow: '0 10px 14px rgba(0,0,0,0.2)' }}
        >
          Chamar
        </Button>
        <div className="or" data-text="ou" />
        <Clipboard
          className={`${
            (!errors.tel && !values.tel) || active
              ? "ui button disabled"
              : "ui button"
            }`}
          onSuccess={() => {
            setActive(true)
            setTimeout(() => {
              setActive(false)
              handleReset()
            }, 5000)
          }}
          data-clipboard-text={`https://wa.me/${values.countries}${values.tel}`}
          button-title="Copie o link e compatilhe "
          style={{ transition: "all 400ms linear", boxShadow: '0 10px 14px rgba(0,0,0,0.2)' }}
        >
          {active ? "link Copiado" : "Copie link"}
        </Clipboard>
      </Button.Group>
      <p style={{ color: "gray" }}>
        {active && `https://wa.me/${values.countries}${values.tel}`}
      </p>
    </Form>
  )
}

const phoneRegExp = /^[0-9]{2,3}[0-9]{4,5}[0-9]{4,5}$/

const Formik = withFormik({
  mapPropsToValues({ tel, countries }) {
    return {
      tel: tel || "",
      countries: countries || "55",
    }
  },
  validationSchema: Yup.object().shape({
    tel: Yup.string().matches(phoneRegExp, "Numero de telefone invalido"),
  }),
  handleSubmit: ({ countries, tel }, { resetForm }) => {
    resetForm({ tel: "" })
    window.open(`https://wa.me/${countries}${tel}`)
  },
})(InputFormik)

export default Formik
