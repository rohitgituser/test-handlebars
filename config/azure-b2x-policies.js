/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_benzeen",
        resetPassword: "B2C_1_benzeen_reset_password",
        // editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://benzeenb2c.b2clogin.com/tfp/benzeenb2c.onmicrosoft.com/B2C_1_benzeen",
        },
        resetPassword: {
            authority: "https://benzeenb2c.b2clogin.com/tfp/benzeenb2c.onmicrosoft.com/B2C_1_benzeen_reset_password",
        },
        // editProfile: {
        //     authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_edit_profile"
        // }
    },
    authorityDomain: "benzeenb2c.b2clogin.com"
}

module.exports = b2cPolicies;