import register from './docs/register';
import OTP from './docs/OTP';
import Feedback from './docs/feedback'

export const definitionResponse = {
    ...register.definationResponse,
    ...OTP.definationResponse,
    ...Feedback.definationResponse
}
export const paths = {
    ...register.paths,
    ...OTP.paths,
    ...Feedback.paths
}