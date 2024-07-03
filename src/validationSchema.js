import * as Yup from "yup";
const phoneRgx = /^(\+[0-9]{1,})*([0-9]{10})$/;

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
    // .matches(phoneRgx, "phone number is not valid")
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

    gender: Yup.string()
    .required("required")
  }),

  Yup.object().shape({
    education: Yup.array()
    .of( 
      Yup.object().shape({
      boarduni: Yup.string()
      .required("board/university is required")
      .max(200, "board university name field should be less then 200 characteres")
      .min(4, "board university name should be at least 4 character long "),

      course: Yup.string()
      .required("course name is required")
      .max(90, "course name field should be less then 50 characteres")
      .min(2, "course name should be at least 4 character long "),

      passyear: Yup.number()
      .required("pass year is required")
      .max(2024, "pass year field should be less then 4 characteres").typeError("pass year should be less then current date")
      .min(1960, "pass year should be at least 4 character long ").typeError("pass year should"),

      percentage: Yup.number()
      .required("percentage is required")
      .min(0, "percentage should be greter then 0")
      .max(100, "percentage should be less then 100"),
    })
    )
    // .required('Must have 3 Education field')
    // .min(3, 'Minimum of 3 friends'),
  }),

  Yup.object().shape({
    experience: Yup.array()
      .of(
        Yup.object().shape({
        company: Yup.string()
        .required("company name is required")
        .max(100, "company name should not be more then 100 character")
        .min(1, "company name should not be less then 1 character"),

        designation: Yup.string()
        .required("Desingnation is required")
        .max(100, "Desingnation should not be more then 100 character")
        .min(1, "Desingnation should not be less then 1 character"),

        fromdate: Yup.date()
        .max(new Date(), "cannot be greter then today"),

        todate: Yup.date().min((Yup.ref("fromdate")),
        ({ min }) => "The value must be > from date").max(new Date(), "date caanot be greater then today")
      })
    )

  }),

  Yup.object().shape({
    // hindi: Yup.string(),
    // english: Yup.string(),
    // gujarati: Yup.string(),
    
    // hindi: Yup.boolean('Select this checkbox please'),
    // hread: Yup.boolean.when("hread", {
    //   is: (hread) =>  hread == true,
    //   then:(hindi)=> hindi.required('Required to Select Status!')
    // }),

    // english: Yup.boolean('Select this checkbox please'),
    // python: Yup.string().when("tpython", {
    //   is: (tpython) => tpython == true,
    //   then:(python)=> python.required('Required to Select Status!')
    // }),

    // gujarati: Yup.boolean('Select this checkbox please'),
    // js: Yup.string().when("tjs", {
    //   is: (tjs) => tjs == true,
    //   then:(js)=> js.required('Required to Select Status!')
    // })
  }),

  Yup.object().shape({
    js: Yup.string(),
    python: Yup.string(),
    java: Yup.string(),

    tjava: Yup.boolean('Select this checkbox please'),
    java: Yup.string().when("tjava", {
      is: (tjava) =>  tjava == true,
      then:(java)=> java.required('Required to Select Status!')
    }),
    tpython: Yup.boolean('Select this checkbox please'),
    python: Yup.string().when("tpython", {
      is: (tpython) => tpython == true,
      then:(python)=> python.required('Required to Select Status!')
    }),
    tjs: Yup.boolean('Select this checkbox please'),
    js: Yup.string().when("tjs", {
      is: (tjs) => tjs == true,
      then:(js)=> js.required('Required to Select Status!')
    })
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