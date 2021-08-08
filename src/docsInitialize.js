import register from './docs/register';
import OTP from './docs/OTP'

export const definitionResponse = {
    ...register.definationResponse,
    ...OTP.definationResponse
}
export const paths = {
    ...register.paths,
    ...OTP.paths
}