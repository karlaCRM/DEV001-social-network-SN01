// console.log('estamos aquí');
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const sendEmailVerification = jest.fn();
export const sendPasswordResetEmail = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const AuthErrorCodes = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn();
export const provider = jest.fn(GoogleAuthProvider());
export const updateProfile = jest.fn();
export const signOut = jest.fn();

/* jest.fn((auth, email, password) => {
  Promise.resolve({ user: { email, password } });
}); */
