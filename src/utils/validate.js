export const validateForm = (email, password, name, isSignIn) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const nameRegex = /^[A-Za-z\s]{2,50}$/.test(name);
    if (!isSignIn && !nameRegex) {
        return "Name must be between 2 and 50 characters long and contain only letters and spaces";
    }
    if (!emailRegex) {
        return "Invalid email format";
    }
    if (!passwordRegex) {
        return "Password must be at least 8 characters long and contain both letters and numbers";
    }

    return null; 
}