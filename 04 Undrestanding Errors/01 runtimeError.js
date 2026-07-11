// run time errors are caused when the syntax is correct but some logic is not making sence

try {
  let user = null;
  console.log(user.name); //user does not have any name so it will throw an error
} catch (error) {
  console.error("An error was caught safely:", error.message);

  //error.message returns  Cannot read properties of null (reading 'name')
  // so this type of error can be found easily
} finally {
  console.log("Cleanup actions go here.");
}
