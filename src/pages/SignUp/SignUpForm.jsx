import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { PiWarningCircleThin } from "react-icons/pi";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import * as yup from "yup";

import { stateAndLGA, countries } from "../../constants/dummy";
import "./signupform.scss";
import { initializePaymemt } from "../../services/paymentServices";
import { registerUser } from "../../services/userServices";

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  surname: yup.string().required("Surname is required"),
  otherNames: yup.string().required("Other names are required"),
  ward: yup.string().required("Ward is required"),
  town: yup.string().required("Town is required"),
  localGovernment: yup.string().required("Local Government is required"),
  senatorialDistrict: yup.string().required("Senatorial District is required"),
  state: yup.string().required("State is required"),
  nationality: yup.string().required("Nationality is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  maritalStatus: yup.string().required("Marital status is required"),
  profession: yup.string().required("Profession is required"),
  membershipType: yup.string().required("Membership type is required"),
  passportPhoto: yup.mixed().required("Passport photo is required"),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [localGovernments, setLocalGovernments] = useState([]);
  const [states, setStates] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const membershipType = watch("membershipType");
  const amount =
    membershipType === "executive"
      ? 10000 * 100
      : membershipType === "other"
      ? 5000 * 100
      : 0;
  const userDetails = getValues();

  const {
    surname,
    otherNames,
    email,
    nationality,
    state,
    senatorialDistrict,
    localGovernment,
    town,
    ward,
    phoneNumber,
    maritalStatus,
    profession,
    passportPhoto,
  } = userDetails;

  useEffect(() => {
    // Fetch States and Local Governments from a new reliable API
    const mappedStates = stateAndLGA.map((item) => ({
      label: item.state,
      value: item.state,
    }));
    setStates(mappedStates);

    // Fetch Nationalities
     const mappedCountries = countries.map((country) => ({
      label: country,
      value: country,
    }));
    setNationalities(mappedCountries);
  }, []);

  const handleStateChange = (selectedState) => {
    // Find the selected state's LGAs and map them to the Select format
    const selectedStateData = stateAndLGA.find(
      (state) => state.state === selectedState?.value
    );
    const mappedLGAs = selectedStateData
      ? selectedStateData.lga.map((lga) => ({ label: lga, value: lga }))
      : [];
    setLocalGovernments(mappedLGAs);
  };

  const onSubmit = async () => {
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData();

    formData.append("surname", surname);
    formData.append("otherNames", otherNames);
    formData.append("email", email);
    formData.append("nationality", nationality);
    formData.append("state", state);
    formData.append("senatorialDistrict", senatorialDistrict);
    formData.append("localGovernment", localGovernment);
    formData.append("town", town);
    formData.append("ward", ward);
    formData.append("phoneNumber", phoneNumber);
    formData.append("maritalStatus", maritalStatus);
    formData.append("profession", profession);
    formData.append("membershipType", membershipType);
    formData.append("passportPhoto", passportPhoto[0], passportPhoto[0]?.name);

    try {
      const userResponse = await registerUser(formData);

      if (userResponse?.status === 201) {
        if (amount > 0) {
          const paymentResponse = await initializePaymemt({
            amount,
            email,
            callback_url: "https://naaf-gules.vercel.app/home",
          });

          if (paymentResponse?.status === 200) {
            window.location.href =
              paymentResponse?.data?.data?.authorization_url;
          } else {
            setErrorMessage(paymentResponse?.message);
          }
        } else {
          console.log('Volunteer registration complete');
          alert('Registration successful!');
        }
      } else {
        setErrorMessage(userResponse?.message);
        
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-form__wrapper">
      <div className="signup-form__container">
        <h2 className="signup-form__title">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-group">
            <label>Surname</label>
            <input
              type="text"
              {...register("surname")}
              className="form-input"
            />
            <p className="form-error">{errors.surname?.message}</p>
          </div>

          <div className="form-group">
            <label>Other Names</label>
            <input
              type="text"
              {...register("otherNames")}
              className="form-input"
            />
            <p className="form-error">{errors.otherNames?.message}</p>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email")} className="form-input" />
            <p className="form-error">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label>Nationality</label>
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={nationalities}
                  className="form-select"
                  placeholder="Select Nationality"
                  value={
                    nationalities.find(
                      (option) => option.value === field.value
                    ) || null
                  }
                  onChange={(selectedOption) =>
                    field.onChange(selectedOption?.value)
                  }
                />
              )}
            />
            <p className="form-error">{errors.nationality?.message}</p>
          </div>

          <div className="form-group">
            <label>State</label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={states}
                  className="form-select"
                  placeholder="Select State"
                  value={
                    states.find((option) => option.value === field.value) ||
                    null
                  }
                  onChange={(selected) => {
                    field.onChange(selected?.value);
                    handleStateChange(selected);
                  }}
                />
              )}
            />
            <p className="form-error">{errors.state?.message}</p>
          </div>
          <div className="form-group">
            <label>Local Government</label>
            <Controller
              name="localGovernment"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={localGovernments}
                  className="form-select"
                  placeholder="Select Local Government"
                  value={
                    localGovernments.find(
                      (option) => option.value === field.value
                    ) || null
                  }
                  onChange={(selected) => {
                    field.onChange(selected?.value);
                  }}
                />
              )}
            />
            <p className="form-error">{errors.localGovernment?.message}</p>
          </div>

          <div className="form-group">
            <label>Senatorial District</label>
            <input
              type="text"
              {...register("senatorialDistrict")}
              className="form-input"
              placeholder="Enter Senatorial District"
            />
            <p className="form-error">{errors.senatorialDistrict?.message}</p>
          </div>

          <div className="form-group">
            <label>Town</label>
            <input type="text" {...register("town")} className="form-input" />
            <p className="form-error">{errors.town?.message}</p>
          </div>

          <div className="form-group">
            <label>Ward</label>
            <input type="text" {...register("ward")} className="form-input" />
            <p className="form-error">{errors.ward?.message}</p>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber")}
              className="form-input"
            />
            <p className="form-error">{errors.phoneNumber?.message}</p>
          </div>

          <div className="form-group">
            <label>Marital Status</label>
            <select {...register("maritalStatus")} className="form-input">
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            <p className="form-error">{errors.maritalStatus?.message}</p>
          </div>

          <div className="form-group">
            <label>Profession</label>
            <input
              type="text"
              {...register("profession")}
              className="form-input"
            />
            <p className="form-error">{errors.profession?.message}</p>
          </div>

          <div className="form-group">
            <label>Upload Passport Photo</label>
            <input
              type="file"
              {...register("passportPhoto")}
              className="form-input"
              accept="image/*"
            />
            <p className="form-error">{errors.passportPhoto?.message}</p>
          </div>

          <div className="form-group">
            <label>Membership Type</label>
            <select {...register("membershipType")} className="form-input">
              <option value="">Select Membership Type</option>
              <option value="executive">Executive Member - ₦10,000</option>
              <option value="other">Other Member - ₦5,000</option>
              <option value="volunteer">Volunteer - Free</option>
            </select>
            <p className="form-error">{errors.membershipType?.message}</p>
          </div>

          {errorMessage && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "red",
                fontSize: "14px",
              }}
            >
              <PiWarningCircleThin
                className="fill-red-600 w-[20px] h-[20px]"
                style={{ marginRight: "4px" }}
              />
              <p>{errorMessage}</p>
            </div>
          )}

          {/* <button type="submit" className="form-button">Register</button> */}
          <button className="form-button" type="submit" disabled={loading}>
            {loading ? "Processing..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
