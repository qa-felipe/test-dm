//elements from register page to execute actions
//#submit

export const ELEMENTS = {
    //Registration form elements
    practiceForm: '.text-center',
    name: 'input#firstName',
    lastName: 'input#lastName',
    email: 'input#userEmail',
    gender: {
        male: '#genterWrapper > .col-md-9 > :nth-child(1)',
        female: '#genterWrapper > .col-md-9 > :nth-child(2)',
        other: '#genterWrapper > .col-md-9 > :nth-child(3)',  
    },
    phone: 'input#userNumber',
    dateBirth: 'input#dateOfBirthInput',
    subjects: '.subjects-auto-complete__value-container',
    hobbies: {
        sports: '#hobbiesWrapper > .col-md-9 > :nth-child(1)',
        reading: '#hobbiesWrapper > .col-md-9 > :nth-child(2)',
        music: '#hobbiesWrapper > .col-md-9 > :nth-child(3)'
    },
    pic: '#uploadPicture',
    currentAddress: '#currentAddress',
    state: '#stateCity-wrapper > :nth-child(2)',
    city: '#stateCity-wrapper > :nth-child(3)',
    submit: '#submit',

    //Submit form elements
    submitModal: '.modal',
    
}