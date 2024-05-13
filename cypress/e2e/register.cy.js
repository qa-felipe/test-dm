import register from '../support/pages/register'
import student from '../fixtures/student.json';

//The page renders and breaks the tests
//This code bellow will make the tests stop breaking
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Cadastro', () => {
  it('Cadastro com sucesso, todos campos preenchidos', () => {
    //Access student registration form
    register.acessRegisterForm();

    //Fill required fields on student registration form
    register.fillRequiredFields(student.name, student.lastName, student.phone, student.gender);

    //Fill optional fields on student registration form
    register.fillOptionalFields(student.hobbies, student.subjects, student.email,
      student.dateBirth, student.pic, student.currentAddress, student.state, student.city);

    //Submit student registration form
    register.submitRegisterForm();

    //Validate data submitted
    register.checkRegisterForm();
  }),

  it('Cadastro somente campos obrigatórios', () => {
    //Access student registration form
    register.acessRegisterForm();

    //Fill required fields on student registration form
    register.fillRequiredFields(student.name, student.lastName, student.phone, student.gender);

    //Submit student registration form
    register.submitRegisterForm();

    //Validate data submitted
    register.checkRegisterForm();
  })
})



//elementos 
//Name,LastName,Email,Gender,Phone,DateBirth,Subjects,Hobbies,Pic,CurrentAddress,State,City
//submitButton
//Nome,SobreNome,telefone,DataNasc
