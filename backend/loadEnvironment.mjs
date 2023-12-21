import AWS from "@aws-sdk";
(async () => {
  const ssm = new AWS.SSM();
  const parameter = await ssm
    .getParameter({
      Name: "PORT",
      WithDecryption: true,
    })
    .promise();
  const data = JSON.parse(parameter.Parameter.Value);
  console.log(data); // prints the json from above
})();
