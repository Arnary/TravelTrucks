import { Formik, Form, Field } from "formik";
import css from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const BookingForm = () => {
    const [startDate, setStartDate] = useState(null);

    const initialValues = {
        username: "",
        email: "",
        date: "",
        comment: ""
    };

    const handleSubmit = (values, action) => {
        toast.success('Success! You have booked your camper!', {
            position: "bottom-right"
        });
        setStartDate(null);
        action.resetForm();
    }
    
    return (
        <div className={css["form-container"]}> 
            <h3 className={css["form-title"]}>Book your campervan now</h3>
            <p className={css["form-description"]}>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {({ setFieldValue }) => (
                <Form className={css.form}>
                    <Field className={css.input} name="username" placeholder="Name*" required/>
                    <Field className={css.input} name="email" placeholder="Email*" required/>      
                    <DatePicker className={css.input}
                        placeholderText="Booking date*"
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setFieldValue('date', date);
                            }
                        }
                        required
                    />
                    <Field className={css.textarea} as="textarea" type="text" rows="3" name="comment" placeholder="Comment" />
                    <button type="submit" className={css["send-btn"]}>Send</button>
            </Form>
            )}
            </Formik>
        </div>
    )
}

export default BookingForm;
