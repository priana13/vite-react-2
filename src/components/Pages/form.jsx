import React, { useState } from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import './form.css';

const MyField = (props) => {
  const {
    values: { textA },
    touched,
    setFieldValue,
  } = useFormikContext();



  const [field, meta] = useField(props);

  React.useEffect(() => {
   
      setFieldValue("textC", `${props.nilai}`);
   
  }, [ textA, touched.textA , props.nilai]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

function SimpleForm() {
  // Note that we provide initalValues all 3 fields.
  const initialValues = { textA: '', textB: '', textC: '' };

  const [nilai , setNilai] = useState(0);


  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => console.log(values)}
      >
        <div className="section">
          <h1>Nilai {nilai}</h1>         
         
          <Form>
            <label>
              textA
              <Field name="textA" className="border-2 border-gray-500 rounded-md text-center" />
            </label>           
            <label>
              textC
              <MyField name="textC" nilai={nilai} className="border-2 border-gray-500 rounded-md text-center"/>
            </label>
            <div>
                Varian: 
                <button type="button" onClick={() => setNilai(20000)} className="bg-gray-200 px-4 py-1 rounded-lg mx-2 shadow hover:bg-gray-300">L</button> 
                <button type="button" onClick={() => setNilai(30000)} className="bg-gray-200 px-4 py-1 rounded-lg mx-2 shadow hover:bg-gray-300">X</button> 
                <button type="button" onClick={() => setNilai(45000)} className="bg-gray-200 px-4 py-1 rounded-lg mx-2 shadow hover:bg-gray-300">XL</button> 
            </div><br />
            

            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
      
    </div>
  );
}

export default SimpleForm;