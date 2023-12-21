import SSM from "aws-sdk/clients/ssm";

const ssm = new SSM();

export async function loadParameter(parameterName) {
  try {
    const { Parameter } = await ssm
      .getParameter({
        Name: parameterName,
        WithDecryption: true,
      })
      .promise();

    return Parameter?.Value ?? null;
  } catch (e) {
    console.error(e);
    return null;
  }
}
console.log(loadParameter("PORT"));
