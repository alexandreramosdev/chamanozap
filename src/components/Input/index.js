import React from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import Clipboard from "react-clipboard.js"
import { Input, Button } from "semantic-ui-react"

const FInput = ({ field, ...props }) => <Input {...field} {...props} />

const InputFormik = ({ errors, touched, values }) => (
  <Form>
    <div style={{ padding: "5px" }}>
      <p style={{ color: "gray" }}>Digite o n° ( Ex.:55 11 97718-5120 )</p>
      <Field
        size="huge"
        name="tel"
        type="tel"
        component={FInput}
        placeholder="5511977185120"
      />
      {errors.tel && touched.tel && (
        <p style={{ color: "red" }}>{errors.tel}</p>
      )}
    </div>

    <Button.Group size="big">
      <Button positive type="submit" disabled={!errors.tel && !values.tel}>
        Chamar
      </Button>
      <div className="or" data-text="ou" />
      <Clipboard
        className={`${
          !errors.tel && !values.tel ? "ui button disabled" : "ui button"
        }`}
        disabled={!values.tel}
        onSuccess={() => console.info("Link copiado com sucesso!")}
        data-clipboard-text={`https://wa.me/${values.tel}`}
        button-title="Copie o link e compatilhe "
      >
        Copie link
      </Clipboard>
    </Button.Group>
  </Form>
)

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^[1-9]{2,3}[0-9]{2,3}[0-9]{4,5}[0-9]{4,5}$/

const Formik = withFormik({
  mapPropsToValues({ tel }) {
    return {
      tel: tel || "",
    }
  },
  validationSchema: Yup.object().shape({
    tel: Yup.string().matches(phoneRegExp, "Numero de telefone invalido"),
  }),
  handleSubmit: ({ tel }) => {
    window.open(`https://wa.me/${tel}`)
  },
})(InputFormik)

export default Formik
