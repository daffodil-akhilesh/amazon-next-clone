export const getUserName = (email) => {
    const arr = email.split("@");
    return arr[0];
}