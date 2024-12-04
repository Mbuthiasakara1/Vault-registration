

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import myBackground from "../images/registerbg.jpg";

function RegisterMembers() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    DOB: Yup.date().required("Date of Birth is required"),
    location: Yup.string().required("Location is required"),
    phone: Yup.string().required("Phone is required"),
    occupation: Yup.string().required("Occupation is required"),
    group: Yup.string().required("Group is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const newMember = {
      first_name: values.firstName,
      last_name: values.lastName,
      dob: values.DOB,
      location: values.location,
      phone: values.phone,
      leader: values.leader,
      is_student: values.isStudent,
      school: values.isStudent ? values.school : "",
      is_visitor: values.isVisitor,
      will_be_coming: values.isVisitor ? values.willBeComing : false,
      occupation: values.occupation,
      group: values.group,
      group_id: values.group,
    };

    try {
      const response = await fetch("http://127.0.0.1:5555/adminregistry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMember),
      });

      if (response.ok) {
        setSuccess("Member registered successfully!");
        resetForm();
      } else {
        setError("Failed to register member. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${myBackground})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      <button
        onClick={handleGoBack}
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        Back
      </button>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#333",
          }}
        >
          Register a New Member
        </h1>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            DOB: "",
            location: "",
            phone: "",
            isStudent: false,
            school: "",
            isVisitor: false,
            willBeComing: false,
            occupation: "",
            group: "",
            leader: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label
                  htmlFor="firstName"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor="DOB"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  Date of Birth
                </label>
                <Field
                  id="DOB"
                  name="DOB"
                  type="date"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <ErrorMessage
                  name="DOB"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  Location
                </label>
                <Field
                  id="location"
                  name="location"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  Phone
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Field
                  id="isStudent"
                  name="isStudent"
                  type="checkbox"
                  style={{ marginRight: "8px" }}
                />
                <label htmlFor="isStudent" style={{ color: "#333" }}>
                  Is Student?
                </label>
              </div>

              {values.isStudent && (
                <div>
                  <label
                    htmlFor="school"
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#333",
                    }}
                  >
                    School Name
                  </label>
                  <Field
                    id="school"
                    name="school"
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center" }}>
                <Field
                  id="isVisitor"
                  name="isVisitor"
                  type="checkbox"
                  style={{ marginRight: "8px" }}
                />
                <label htmlFor="isVisitor" style={{ color: "#333" }}>
                  Is Visitor?
                </label>
              </div>

              {values.isVisitor && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Field
                    id="willBeComing"
                    name="willBeComing"
                    type="checkbox"
                    style={{ marginRight: "8px" }}
                  />
                  <label htmlFor="willBeComing" style={{ color: "#333" }}>
                    Will be coming again?
                  </label>
                </div>
              )}

              <div>
                <label
                  htmlFor="occupation"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  Occupation
                </label>
                <Field
                  id="occupation"
                  name="occupation"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <ErrorMessage
                  name="occupation"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor="group"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  AG Group
                </label>
                <Field
                  id="group"
                  name="group"
                  as="select"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value="" disabled>
                    Select Group
                  </option>
                  <option value="1">Transformers</option>
                  <option value="2">Relentless</option>
                  <option value="3">Innovators</option>
                  <option value="4">Pacesetters</option>
                  <option value="5">Ignition</option>
                  <option value="6">Gifted</option>
                  <option value="7">Visionaries</option>
                </Field>
                <ErrorMessage
                  name="group"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Field
                  id="leader"
                  name="leader"
                  type="checkbox"
                  style={{ marginRight: "8px" }}
                />
                <label htmlFor="leader" style={{ color: "#333" }}>
                  Are you a group leader?
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "12px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>

        {success && (
          <div style={{ color: "green", marginTop: "16px" }}>{success}</div>
        )}
        {error && (
          <div style={{ color: "red", marginTop: "16px" }}>{error}</div>
        )}
      </div>
    </div>
  );
}

export default RegisterMembers;
