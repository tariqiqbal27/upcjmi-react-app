import {loadOpenUrl, loadSecureUrl} from './loader.api.helper';
import {IEmail, IPing, ISignInToken, IUserExists, IUserMeta} from '../../types/api.type';
import {ISignUpData} from '../../types/signUp.type';
import {IContactForm} from '../../types/apiData.types';

const UPing = 'ping/';

const USignInWithEmail = 'auth/sign-in/email/';
const USignInWithGoogle = 'auth/sign-in/google/';

const USignUpStudent = 'student/sign-up/';
// const USignUpCompanyRepresentative = 'company/sign-up/';

const UContact = 'contact/';

const UUserMetaDetails = 'auth/user/meta/';
const UUserExits = 'auth/user/exists/';

const UVerifyEmail = 'auth/verify/email/';
const USendVerificationMail = 'auth/verify/email/send/';

export const pingAPI = (): Promise<IPing> => loadOpenUrl(UPing);

export const signUpStudentAPI = (data: ISignUpData) =>
  loadOpenUrl(USignUpStudent, {
    method: 'post',
    data,
  });

export const signINWithEmailAPI = (email: string, password: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithEmail, {
    method: 'post',
    data: {email, password},
  });
export const signInWithGoogleAPI = (id: string, token: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithGoogle, {
    method: 'post',
    data: {id, token},
  });

export const contactFormAPI = (data: IContactForm): Promise<any> => loadOpenUrl(UContact, {
  method: 'post',
  data
});

export const getUserMetaDetailAPI = (): Promise<IUserMeta> => loadSecureUrl(UUserMetaDetails);
export const doesUserExistsAPI = (email: string): Promise<IUserExists> =>
  loadOpenUrl(UUserExits, {
    params: {
      email,
    },
  });

export const verifyEmailAPI = (hash: string): Promise<IEmail> => loadOpenUrl(UVerifyEmail, {
  method: 'post',
  data: {hash}
});

export const reSendVerificationMailAPI = (): Promise<void> =>
  loadSecureUrl(USendVerificationMail);
