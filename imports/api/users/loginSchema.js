import SimpleSchema from 'simpl-schema';

const LoginSchema = new SimpleSchema({
    email: {
        label: "Username (Email)",
        type: String,
        uniforms: {
            placeholder: "Please enter your username (email)."
        }
    },
    password: {
        label: "Password",
        type: String,
        uniforms: {
            type: "password",
            placeholder: "Please enter password."
        }
    }
});

export default LoginSchema;