import * as Yup from "yup";

export const validationSchema = [
  Yup.object().shape({
    firstname: Yup.string()
    .required("first name is required")
    .max(30, "name field should be less then 30 characteres"),

    lastname: Yup.string()
    .required("last name is required")
    .max(30, "name field should be less then 30 characteres"),

    designation: Yup.string()
    .max(30, "desination should be less then 30 characters")
    .min(2, "designation should be more then 2 characters "),

    email: Yup.string().email()
    .required("Email is required")
    .max(320, "email field should be less then 320 characteres")
    .min(3, "email should be more then 3 characters "),

    phone: Yup.string()
    .required("phone number is required")
    .max(20, "phone field should be less then 20 characteres")
    .min(5, "Phone Number field should be more than 5 characters"),

    dob: Yup.date()
    .max(new Date(), 'DOB cannot be more then current date')
    .required("dob is required"),

    city: Yup.string()
    .required("the city name is required")
    .max(25, "phone field should be less then 25 characteres")
    .min(2, "city name should be more than 2 characters"),
    
    address: Yup.string()
    .required("the address is required")
    .max(320, "address field should be less then 320 characteres")
    .min(2, "address field should be more than 2 characters"),

    address2: Yup.string()
    .max(320, "address2 field should be less then 320 characteres")
    .min(2, "address2 field should be more than2 characters"),

    zipcode: Yup.string()
    .required("the zip code should not be empty")
    .max(10, "zipcode field should be less then 10 characteres")
    .min(5, "zipcode field should be more than 5 characters"),
  }),

  Yup.object().shape({
    boarduni: Yup.string()
    .required("board/university is required")
    .max(200, "board university name field should be less then 200 characteres")
    .min(4, "board university name should be at least 4 character long "),

    course: Yup.string()
    .required("course name is required")
    .max(90, "course name field should be less then 50 characteres")
    .min(2, "course name should be at least 4 character long "),

    passyear: Yup.string()
    .required("pass year is required")
    .max(4, "pass year field should be less then 4 characteres")
    .min(4, "pass year should be at least 4 character long "),

    percentage: Yup.string()
    .required("percentage is required")
    .max(5, "percentage field should be less then 5 characteres")
    .min(5, "percentage should be at least 5 character long "),
  }),

  Yup.object().shape({
    company: Yup.string()
    .required("company name is required")
    .max(100, "company name should not be more then 100 character")
    .min(1, "company name should not be less then 1 character"),

    designation: Yup.string()
    .required("company name is required")
    .max(100, "company name should not be more then 100 character")
    .min(1, "company name should not be less then 1 character"),

    fromdate: Yup.date()
    .required("from date is required"),
    // .max(new Date(), 'From Date cannot be more then current date'),

    todate: Yup.date()
    .required("To date is required"),
    // .max(new Date(), 'To date cannot be more then current date'),
  }),

  Yup.object().shape({

  }),

  Yup.object().shape({

  }),

  Yup.object().shape({
    rname: Yup.string()
    .required("name is required"),
    rcontact: Yup.string()
    .required("contanct is required"),
    rrelation: Yup.string()
    .required("relation is required")
  }),

  Yup.object().shape({
    noticeperiod: Yup.string()
    .required("notice period is required"),
    expectecctc: Yup.string()
    .required("expected ctc is required"),
    actualctc: Yup.string()
    .required("actual ctc is required"),
  }),
]