//{
//  `Modify the kebabize function so that it converts a camel case string into a kebab case.
//
//kebabize('camelsHaveThreeHumps') // camels-have-three-humps
//kebabize('camelsHave3Humps') // camels-have-humps
//Notes:
//
//the returned string should only contain lowercase letters`;
//}

function kebabize(str) {
  return (
    str
      // first remove all non alhpabetical characters
      .replace(/[^a-z]/gi, '')
      // if the first letter is upper case, change it to lower case
      .replace(/^[A-Z]/, c => c.toLowerCase())
      // change all uppercase characters to lowercase and add a - before them.
      .replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)
  );
}

kebabize('helloThisIsCamelCase');
kebabize('tEsTestEtseTset');
