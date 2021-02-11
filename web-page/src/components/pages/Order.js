import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Order.css";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Order = () => {
  function onSubmit(values, actions) {
    alert(
      "Seu pedido Foi recebi em breve entraremos em contato para confirmar o pedido!"
    );
    console.log(JSON.stringify(values, null, 2));
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        // setFieldValue("uf", data.uf);
      });
  }
  return (
    <div className="order">
      <div className="order-container">
        
        <Formik
          onSubmit={onSubmit}
          validateOnMount
          validationSchema={schema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
          }}
        >
          {({ isValid, setFieldValue }) => (
            <Form>
              <h1>Contact</h1>
              <div className="form-control-group">
                <label> Your Name</label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <ErrorMessage id='error' name="firstName" />
                {/* <label>Last Name</label> */}
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-control-group">
                <label>Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" Email"
                />
              </div>
              <div className="form-control-group">
                <label>Home</label>
                <Field
                  id="cep"
                  name="cep"
                  type="text"
                  onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                  placeholder="Cep"
                />
                {/* <label>Logradouro</label> */}
                <Field
                  id="rua"
                  name="logradouro"
                  type="text"
                  placeholder="Rua"
                />
                {/* <label>Número</label> */}
                <Field
                  id="numero"
                  name="numero"
                  type="text"
                  placeholder="Número"
                />
              </div>
              <div className="form-last">
                {/* <label>Complemento</label> */}
                <Field
                  id="complemento"
                  name="complemento"
                  type="text"
                  placeholder="Complemento"
                />
                {/* <label>bairro</label> */}
                <Field
                  id="bairro"
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                />
                <Field
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Cidade"
                />
              </div>
              <div className="form-control-group">
                {/* <label>Estado</label> */}

                {/* <Field component="select" name="uf">
                  <option value={null}>Selecione o Estado</option>
                  <option value="SP">São Paulo</option>
                  <option value="SC">Santa Catarina</option>
                </Field> */}
              </div>
              <button className='btn-form' type="submit" disabled={!isValid}>
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Order;

// disabled={!isValid}
