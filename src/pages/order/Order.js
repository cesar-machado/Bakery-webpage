import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Order.css";
import Modal from "../../components/modal/Modal";

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
  mobile: Yup.number().required("Required"),
});

const Order = () => {
  const [dropdown, setDropdown] = useState(false);

  function onSubmit(values, { resetForm }) {
    console.log(JSON.stringify(values, null, 2));
    resetForm({ values: "" });
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
            mobile: "",
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
            description: "",
          }}
        >
          {({ isValid, setFieldValue }) => (
            <Form>
              <h1>Contact</h1>
              <div className="form-control-group" id="form-resposive">
                <label> Your Name</label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <ErrorMessage id="error" name="firstName" />
                {/* <label>Last Name</label> */}
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-control-group" id="form-resposive">
                <label>Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" Email"
                />
              </div>
              <div className="form-control-group" id="form-resposive">
                <label>Mobile Phone</label>
                <Field
                  id="mobile"
                  name="mobile"
                  type="phone"
                  placeholder="Mobile Phone"
                />
                <ErrorMessage id="error" name="mobile" />
              </div>
              <div className="form-control-group" id="form-resposive">
                <label>Home</label>
                <Field
                  id="zipCode"
                  name="cep"
                  type="text"
                  onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                  placeholder="zip code"
                />
                {/* <label>Logradouro</label> */}
                <Field
                  id="address"
                  name="logradouro"
                  type="text"
                  placeholder="Address"
                />
                {/* <label>Número</label> */}
              </div>
              <div className="form-last" id="form-resposive">
                {/* <label>Complemento</label> */}
                {/* <Field
                  id="complemento"
                  name="complemento"
                  type="text"
                  placeholder="Complemento"
                /> */}
                {/* <label>bairro</label> */}
                {/* <Field
                  id="bairro"
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                /> */}
                <Field
                  id="number"
                  name="numero"
                  type="text"
                  placeholder="Number"
                />
                <Field
                  id="city"
                  name="cidade"
                  type="text"
                  placeholder="Cidade"
                />
              </div>
              <div className="form-description">
                <label>Describe your Cake</label>
                <Field
                  as="textarea"
                  id="textArea"
                  name="description"
                  type="textarea"
                  // placeholder="Describe your cake"
                />
              </div>
              <button
                className="btn-form"
                type="submit"
                disabled={!isValid}
                onClick={setDropdown}
              >
                Submit
              </button>
              {dropdown ? <Modal onClose={() => setDropdown(false)} /> : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Order;
