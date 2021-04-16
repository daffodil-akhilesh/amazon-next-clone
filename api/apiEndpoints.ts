import config from "../config";
export default {
    LOGIN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.FIREBASE_AUTH_KEY}`,
    SIGNUP: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.FIREBASE_AUTH_KEY}`
}