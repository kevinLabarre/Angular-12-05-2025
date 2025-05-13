class User {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Candidate extends User {
  email;

  constructor(firstName, lastName, email) {
    super(firstName, lastName);
    this.email = email;
  }
}
