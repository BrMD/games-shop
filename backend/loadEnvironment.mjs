const AWS = require("aws-sdk");

(async () => {
  const ssm = new AWS.SSM();
  const parameter = await ssm
    .getParameter({
      Name: "super-secret-api-auth",
      WithDecryption: true,
    })
    .promise();
  const data = JSON.parse(parameter.Parameter.Value);
  console.log(data); // prints the json from above
  /*
    {
        key: "this-is-a-secret-key",
        secret: "this-is-a-key-secret"
    }
    */
})();
