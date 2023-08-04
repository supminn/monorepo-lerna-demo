export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  passwordError: "",
  confirmPasswordError: "",
};

export default function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.fieldName]: action.payload };
    case "validatePassword":
      if (action.payload.length < 6) {
        return {
          ...state,
          passwordError: "Password must be at least 6 characters long",
        };
      } else if (!/\d/.test(action.payload)) {
        return {
          ...state,
          passwordError: "Password must contain at least one number",
        };
      } else {
        return { ...state, passwordError: "" };
      }
    case "validateConfirmPassword":
      if (action.payload !== state.password) {
        return { ...state, confirmPasswordError: "Passwords do not match" };
      } else {
        return { ...state, confirmPasswordError: "" };
      }
    default:
      throw new Error();
  }
}
