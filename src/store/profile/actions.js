export const TOGGLE_PROFILE = 'PROFILE::TOGGLEPROFILE'
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'

export const toggleProfile = () => ({
    type: TOGGLE_PROFILE,
});

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
});