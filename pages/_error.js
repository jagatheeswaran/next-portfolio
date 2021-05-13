import Layout from "../components/Layout";

const Error = ({ statusCode }) => (
  <Layout title="Error!!!">
    <p>
      {statusCode
        ? `Couldn't load user data: Status Code ${statusCode}`
        : `Couldn't get that page, sorry!`}
    </p>
  </Layout>
);

export default Error;
